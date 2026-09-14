"""Render reviewed product decisions as evaluation documents; no business code."""
from pathlib import Path
import csv,json,re
from collections import Counter

ROOT=Path(__file__).resolve().parents[1]
A=ROOT/'analysis'; O=ROOT/'outputs'; O.mkdir(exist_ok=True)
def readj(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def link(label,p,line=None):
    dest=str(p if isinstance(p,Path) else ROOT/p)
    if line: dest+=':'+str(line)
    return f'[{label}](<{dest}>)'
def text(v):
    if isinstance(v,list): return '；'.join(text(x) for x in v)
    if isinstance(v,dict): return str(v.get('api_name',json.dumps(v,ensure_ascii=False)))
    return str(v).replace('|','／').replace('\n',' ')
def table(headers,rows):
    return '\n'.join(['| '+' | '.join(headers)+' |','|'+'|'.join(['---']*len(headers))+'|']+['| '+' | '.join(text(x) for x in row)+' |' for row in rows])+'\n'
reg=readj(A/'requirement-registry.json')
dec=list(csv.DictReader((A/'principal-decisions.psv').read_text(encoding='utf-8-sig').splitlines(),delimiter='|'))
assert len(reg)==len(dec)==60
assert [x['requirement_id'] for x in reg]==[x['id'] for x in dec]
qs=readj(A/'principal-questions.json'); qmap={x['id']:x for x in qs}
index=readj(A/'01-jd-api-capability-index.json')['entries']
for i,e in enumerate(index,1): e['evidence_id']=f'API{i:03}'
# Principal taxonomy correction: validation does not persist product data.
for e in index:
    if e['api_name']=='postProductValidation': e['operation_type']='ACTION'
    if e['api_name']=='postProductApply':
        e['inputs']='request.schema、productApplyDTO（仅productId/spuSkuApplyGray/saveActionType/limitInfoSubmitMethod/categoryDTO等已展开）、身份与scene'
        e['reason']='创建/整版编辑申请候选；完整内容可写字段未被当前schema证明（P01）'
    if e['api_name']=='getAfsOrder':
        e['outputs']='售后详情；customerApplyInfo.applyReasonFirstCid/Desc、applyReasonSecondCid/Desc（P02）'
byrid={r['requirement_id']:[e for e in index if r['requirement_id'] in e['requirement_ids']] for r in reg}
maps={}
for p in (A/'candidate-mapping').glob('*.json'):
    for x in readj(p):
        rid=x['requirement_id']; assert rid not in maps, rid
        maps[rid]=x
assert set(maps)==set(byrid), 'All eight module mappings must exist before final render'

# Principal scope adjudication: candidate workers cannot expand the tender scope.
for rid in ['R003','R004','R010','R011','R012','R013','R022','R042','R050']:
    maps[rid]['write_action']='原文核心交付为生成/计算结果，不需要修改京东状态；自动上传、发布或发送按另行明确的扩展范围评估。'
maps['R009']['write_action']='生成完整经营方案不要求平台策略写入或自动执行；需要的是经营事实、约束及方案生成能力。'
maps['R016']['read_data']='listAdsCampaigns/listAdsGroups是广告效果的部分输入候选；需补充创意关联、指标对象类型、单位和归因口径，不能宣称完全没有广告数据候选。'
maps['R016']['write_action']='核心为依据广告效果生成新创意；投放绑定或发布不是原文明确要求。'
maps['R023']['read_data']='持续竞争环境与成本约束；listSuggestedPrices/listPriceStars可作策略辅助，但不替代竞品实时价及历史序列。'
maps['R023']['write_action']='仅持续给出调价策略，不自动修改价格；实际改价由R055另行授权。'
maps['R049']['read_data']='getAfsOrder.customerApplyInfo提供applyReasonFirstCid/Desc及applyReasonSecondCid/Desc；需要afsOrderId与商家身份，具体权限及枚举待确认。'
maps['R049']['write_action']='自动读取原因并由我方形成解决方案；不要求退款、审核等售后处置动作。'
for d in dec:
    rid=d['id']
    if d['automation'] in ['T0','T1']:
        maps[rid]['callback_event']='原文核心范围未要求持续事件订阅；存在平台写操作时需确认同步结果或状态查询，不能仅因未找到Callback判定无法交付。'
    else:
        maps[rid]['callback_event']='需可靠获得触发/结果数据；先确认轮询频率、配额与可接受延迟，再判断是否必须Callback/Event。京麦任务记录不等同业务事件交付。'
    maps[rid]['principal_review']={'coverage':d['coverage'],'scope':d['boundary'],'questions':d['questions']}
    maps[rid]['candidate_apis']=[x['api_name'] for x in byrid[rid]]
    rr=next(x for x in reg if x['requirement_id']==rid)
    maps[rid]['evidence']=[f"FACT_REQUIREMENT: {rr['source_file']}:L{rr['source_line']}", 'FACT_EXISTING_PRODUCT: inputs\\existing-capabilities.md；'+d['ec']]
    maps[rid]['evidence'] += [x['evidence_id']+' '+x['api_name']+' '+x['source_file'] for x in byrid[rid]]
    maps[rid]['evidence'] += ['INFERENCE_TECHNICAL: 主审产品边界；问题'+d['questions']]
    maps[rid]['gaps']=d['explanation']+' '+d['boundary']
    if d['coverage']=='FULL':
        maps[rid]['support']='直接支持';maps[rid]['public_api_closed_loop']='平台读取合同可覆盖；实际权限未验证，方案生成由我方实现。'
    elif d['coverage']=='PARTIAL':
        maps[rid]['support']='部分支持';maps[rid]['public_api_closed_loop']=False
    elif d['coverage']=='NONE_FOUND':
        maps[rid]['support']='不支持';maps[rid]['public_api_closed_loop']=False
        maps[rid]['gaps']='OPEN_API_NOT_FOUND：'+maps[rid]['gaps']
    else:
        maps[rid]['support']='直接支持'
        maps[rid]['public_api_closed_loop']='不适用：核心交付不需要京东API；这里的直接支持仅指无需补京东接口，不代表产品已完成。'
# Preserve the module separation while applying reviewed scope corrections.
for p in (A/'candidate-mapping').glob('*.json'):
    old=readj(p); reviewed=[maps[x['requirement_id']] for x in old]
    p.write_text(json.dumps(reviewed,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    out=['# 需求与API候选映射（已完成范围审核）\n','只使用本模块需求、已有能力事实与相关API索引。平台接口覆盖不包括我方生成/算法能力，也不默认扩展为自动回写。核心无需京东接口时，“直接支持”仅表示不需要新增平台接口；产品能力以最终矩阵为准。\n']
    for m in reviewed:
        out += ['## '+m['requirement_id']+'\n',table(['字段','结果'],[[k,m[k]] for k in ['candidate_apis','support','read_data','write_action','callback_event','public_api_closed_loop','gaps','evidence']]),'审核边界：'+m['principal_review']['scope']+'\n']
    p.with_suffix('.md').write_text('\n'.join(out),encoding='utf-8')

EC={'EC01':(17,'成熟SaaS入口/页面/承载基础；复杂编排与授权未确认'),'EC02':(37,'商品图片、一键主图/详情页、批量SKU素材'),'EC03':(73,'商品信息诊断/优化及信息分方向基础'),'EC04':(111,'招标方CLI不代表我方实现或已获授权')}
def refs(r,d):
    ans=[link(r['requirement_id']+'需求',ROOT/r['source_file'],r['source_line'])]
    ans += [link(x,ROOT/'inputs'/'existing-capabilities.md',EC[x][0]) for x in d['ec'].split(',')]
    es=byrid[r['requirement_id']]
    if es: ans.append('API证据 '+','.join(e['evidence_id'] for e in es))
    return '；'.join(ans)
def permission(d): return 'NOT_REQUIRED' if d['coverage']=='NOT_REQUIRED' else 'UNKNOWN'
def collab(d):
    vals=[]
    for q in d['questions'].split(','):
        vals += qmap[q]['collaboration']
    # User-fed arithmetic and content output do not depend on platform data access.
    if d['coverage']=='NOT_REQUIRED': vals=[x for x in vals if x in ('BUSINESS_RULE_CONFIRMATION',)]
    writes={'R002','R005','R006','R007','R014','R015','R034','R038','R039','R040','R041','R043','R047','R053','R055','R058'}
    if d['id'] not in writes: vals=[x for x in vals if x!='NEW_ACTION_API_POSSIBLE']
    if d['id']=='R001': vals=[x for x in vals if x!='INTERNAL_DATA_REQUIRED']
    return list(dict.fromkeys(vals)) or ['NONE']
def label(d): return d['primary']+(' + '+d['secondary'].replace(',',' + ') if d['secondary']!='无' else '')
def loop(d):
    return {'FULL':'平台交互合同覆盖：是；实际权限与运行效果未验证。','PARTIAL':'否：仅覆盖部分平台数据或动作，不能承诺完整闭环。','NONE_FOUND':'否：必要专用合同当前资料中未发现（OPEN_API_NOT_FOUND）。','NOT_REQUIRED':'核心交付不依赖京东API；使用商家输入，平台集成为可选扩展。'}[d['coverage']]

header='# 京东京喜 ISV 产品评估矩阵\n\n本表覆盖60项原文需求。等级是基于需求、现有能力与本地接口资料的技术评估，不代表已上线、已授权或已完成联调。\n\n'
header+='复用分类和技术等级定义见 '+link('评估口径',A/'00-evaluation-framework.md')+'。SaaS产品化的低/中/高表示新增复杂度。现有能力“无”表示当前基线没有该专项能力证明；UNKNOWN保留未核实的基础设施状态。自动化等级表示目标形态，T4的无人值守条件需确认，单次一键执行仍可为T0。\n\n'
header+='A=可直接产品化，B=基于既有能力二开，C=专项研发，D=强依赖京东数据/接口，E=双方联合定义或研发协同。主要标签与辅助标签分别列出。权限只有UNKNOWN或NOT_REQUIRED；当前没有CONFIRMED证据。\n\n'
body=[header]
for module in dict.fromkeys(r['module'] for r in reg):
    pairs=[(r,d) for r,d in zip(reg,dec) if r['module']==module]
    body+=['## '+module+'\n',table(['ID / 产品','复用分类','复用程度','SaaS产品化','京东数据依赖','主标签','辅助标签'],[[r['requirement_id']+' '+r['product_requirement'],d['reuse'],d['existing'],d['saas'],d['dependency'],d['primary'],d['secondary']] for r,d in pairs])]
    body+=[table(['ID','Public API Coverage','Permission Status','JD Collaboration Requirement','研发','自动化','协同问题'],[[d['id'],d['coverage'],permission(d),collab(d),d['research'],d['automation'],d['questions']] for r,d in pairs])]
    for r,d in pairs: body += [f"**{d['id']} 真正困难：{d['difficulty']}。** {d['explanation']}\n\n产品边界：{d['boundary']}\n\n证据：{refs(r,d)}。结论类型：INFERENCE_TECHNICAL；协同未决项：NEEDS_JD_CONFIRMATION。\n"]
(O/'02-product-evaluation-matrix.md').write_text('\n'.join(body),encoding='utf-8')

api=['# 京东京喜需求与公开接口能力映射\n','覆盖17类、243个接口定义，筛出93个相关候选。候选匹配与最终需求覆盖分开；不把API存在推断为当前ISV已获权限。本地资料存在字段未展开、非标准方法和部分描述乱码，未作线上调用测试。\n',
     '逐接口字段、原始method、分类、置信度和来源见本文附录；定点核验见 '+link('商品广告核验',A/'api-evidence'/'commerce-verification.md')+'、'+link('运营核验',A/'api-evidence'/'operations-verification.md')+'、'+link('关键证据裁决',A/'api-evidence'/'principal-verification.md')+'。\n',
     table(['覆盖分类','数量'],Counter(d['coverage'] for d in dec).items()),
     'FULL只表示原文需要的平台交互有完整公开合同，不表示我方产品完成；NOT_REQUIRED仅用于明确的商家输入/本地交付边界。NONE_FOUND统一表示OPEN_API_NOT_FOUND。\n']
for r,d in zip(reg,dec):
    m=maps[d['id']]; es=byrid[d['id']]
    api += [f"## {d['id']} {r['product_requirement']}\n",
        f"**覆盖：{d['coverage']}；权限：{permission(d)}。** {loop(d)}\n",
        '候选：'+('；'.join(e['evidence_id']+' `'+e['api_name']+'`' for e in es) if es else ('核心无需接口；可选集成按扩展范围评估' if d['coverage']=='NOT_REQUIRED' else 'OPEN_API_NOT_FOUND'))+'。\n',
        table(['项','需求与接口边界'],[
            ['需要READ数据',m['read_data']],['需要WRITE / ACTION',m['write_action']],['Callback / Event',m['callback_event']],
            ['缺口及产品判断',d['explanation']],['交付边界',d['boundary']],['京东确认问题',d['questions']]]),
        '证据：'+refs(r,d)+'。\n']
api += ['## API字段证据附录\n','以下保留原始method，异常方法不擅自改写为HTTP标准动词；ACTION含业务校验/状态动作，不等于全部会修改商品。下列候选置信度仅衡量匹配与字段清晰度。\n']
for e in index:
    api += [f"### {e['evidence_id']} {e['category']} · {e['api_name']}\n",table(['项','证据'],[
      ['method',e['method']],['操作类型',e['operation_type']],['主要输入',e['inputs']],['主要输出',e['outputs']],
      ['相关需求',e['requirement_ids']],['匹配原因',e['reason']],['置信度',e['confidence']],['source_file',e['source_file']]])]
    if e.get('verification_limits'): api += ['定点限制：'+text(e['verification_limits'])+'。\n']
(O/'01-api-capability-map.md').write_text('\n'.join(api),encoding='utf-8')

questions=['# 京东接口与数据待确认事项\n','本清单按接口/数据合同去重，共18项。优先确认已有公开或内部能力及适用范围，不能把“当前资料未发现”直接解释为必须新建接口。所有事项状态均为待确认。\n',
           '原文10类重点活动统一在Q08逐场景回填；Callback是否必须由约定时效与轮询配额决定，不预设每项需求都需要事件接口。\n',
           table(['问题','类别','关联需求'],[[q['id']+' '+q['title'],q['types'],','.join(d['id'] for d in dec if q['id'] in d['questions'].split(','))] for q in qs])]
for q in qs:
    questions += ['## '+q['id']+' '+q['title']+'\n',table(['项','说明'],[
       ['关联需求',','.join(d['id'] for d in dec if q['id'] in d['questions'].split(','))],['类型',q['types']],['我们想完成什么',q['goal']],['当前公开API能做到什么',q['current']],['当前缺什么',q['gap']],['希望京东确认什么',q['ask']],['证据',q['evidence']],['状态','NEEDS_JD_CONFIRMATION']])]
questions += ['## Q08场景回填表\n',table(['活动场景','资格/规则读取','报名/撤销及结果','费用/叠加/价保','底表替代'],[[x,'待京东提供合同','待京东提供合同','待京东确认规则','待确认模板'] for x in ['官方直降','首购礼金','秒杀','特价','便宜包邮','百补','顺手买','买赠','换购','焕新补贴']]),'证据定位见 '+link('API能力映射',O/'01-api-capability-map.md')+' 及 '+link('产品矩阵',O/'02-product-evaluation-matrix.md')+'；EC01-EC04对应现有能力事实文档，CV/O/P对应定点证据。\n']
(O/'03-jd-interface-questions.md').write_text('\n'.join(questions),encoding='utf-8')

report=(A/'principal-report-template.md').read_text(encoding='utf-8')
full=[]
for module in dict.fromkeys(r['module'] for r in reg):
    full += ['### '+module+'\n',table(['需求','产品判断（主；辅）','现有复用','真正困难'],[[r['requirement_id']+' '+r['product_requirement'],d['primary']+'；'+d['secondary'].replace(',',' + '),d['existing'],d['difficulty']+'：'+d['explanation']] for r,d in zip(reg,dec) if r['module']==module])]
report=report.replace('{{FULL_MATRIX}}','\n'.join(full))
report=report.replace('{{COUNTS}}',table(['主要产品标签','需求数'],[(x,Counter(d['primary'] for d in dec)[x]) for x in 'ABCDE']))
report=report.replace('{{COVERAGE}}',table(['公开接口覆盖','需求数'],[(x,Counter(d['coverage'] for d in dec)[x]) for x in ['FULL','PARTIAL','NONE_FOUND','NOT_REQUIRED']]))
report=report.replace('{{LINKS}}','\n'.join('- '+link(name,O/file) for name,file in [('接口能力与证据','01-api-capability-map.md'),('完整产品评估矩阵','02-product-evaluation-matrix.md'),('京东协同问题清单','03-jd-interface-questions.md')]))
(O/'04-初步产品评估报告.md').write_text(report,encoding='utf-8')
reviewed=[]
for r,d in zip(reg,dec): reviewed.append(dict(r,**d,permission=permission(d),collaboration=collab(d),api_evidence_ids=[e['evidence_id'] for e in byrid[d['id']]]))
(A/'principal-evaluation.json').write_text(json.dumps(reviewed,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(A/'reviewed-api-evidence.json').write_text(json.dumps(index,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'requirements':len(reg),'api_candidates':len(index),'questions':len(qs),'primary':dict(Counter(d['primary'] for d in dec)),'coverage':dict(Counter(d['coverage'] for d in dec))},ensure_ascii=False))
