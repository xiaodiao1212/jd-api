from pathlib import Path
import re,json
ROOT=Path(r'C:\Users\vanna\OneDrive\Zhizi\JD\jd-jingxi-isv-evaluation')
BASE=ROOT/'references'/'jd-api'/'京东开放平台文档'/'jd-api-文档'; OUT=ROOT/'analysis'/'api-index'
CATS=['数据API','订单API','售后API','客服API','商家API','会员API','门店API','财务API','京麦API','通用API','虎符','变更说明']
KEEP={
'数据API':{'getReportSchema','postReport','getSensitiveReportSchema','postSensitiveReport','getReportDownloadTask'},
'订单API':{'getOrder','listOrders','listWaybillTraces','listBasicOrders','getBasicOrder'},
'售后API':{'listAfsOrderLogs','listAfsOrders','getAfsOrder','listPriceProtectOrders','getPriceProtectOrder'},
'客服API':{'queryWaiterStatus','listChatbotEvaluations','getChatbotPerformance','listDongdongSessionChatLogs','listDongdongSessions','listDongdongChatDetails','listDongdongWaiters','listDongdongWaiterPerformance','listDongdongWaiterEvaluations','postDongdongMessage','postDongdongMessageV1'},
'商家API':set(),
'会员API':{'getMemberSystem','listMemberSystems','listVenderMemberRights','postMemberPoint','listMemberPoints','getMemberAggStatistic','getMember','listOmids','patchMember','listMemberAggStatistics','listMembers','listOuids'},
'门店API':set(),
'财务API':{'listAccountRecords','listBills'},
'京麦API':{'postJmAiTask','getJmAiTask','patchJmAiTask','postJmAiTaskRecord','getJmAiTaskRecord','patchJmAiTaskRecord'},
'通用API':set(),
'虎符':set(),'变更说明':set()}
REQ={'数据API':'AI经营复盘、CTR/CVR/活动/广告诊断（指标语义待确认）','订单API':'履约诊断、售后诊断、AI自动执行（订单工具）','售后API':'售后诊断、售后沟通话术、AI自动执行（售后工具）','客服API':'客服诊断、AI客服回复、异常预警','商家API':'店铺升星助手、店铺层级助手、一键发品/商品运营前置资料','会员API':'会员运营、AI经营复盘','门店API':'店铺及门店服务、AI自动执行','财务API':'毛利测算、活动收益测算、AI经营复盘','京麦API':'AI任务编排、AI自动执行、自动复检、异常预警','通用API':'AI自动执行安全/地址基础能力、客服履约、内容安全','虎符':'ISV与京东能力路由接入前置、权限/场景核验（非业务能力）','变更说明':''}
RID={'getReportSchema':'R024,R025,R035,R044,R048,R057（指标语义待确认）','postReport':'R024,R025,R035,R044,R048,R057（指标语义待确认）','getSensitiveReportSchema':'R024,R025,R035,R044,R048,R057（敏感数据范围待确认）','postSensitiveReport':'R024,R025,R035,R044,R048,R057（敏感数据范围待确认）','getReportDownloadTask':'R057（报表下载语义待确认）','getOrder':'R048','listOrders':'R048','listWaybillTraces':'R048','listBasicOrders':'R048','getBasicOrder':'R048','listAfsOrderLogs':'R049','listAfsOrders':'R049','getAfsOrder':'R049','listPriceProtectOrders':'R049','getPriceProtectOrder':'R049','queryWaiterStatus':'R046','listChatbotEvaluations':'R046','getChatbotPerformance':'R046','listDongdongSessionChatLogs':'R046,R050','listDongdongSessions':'R046,R050','listDongdongChatDetails':'R046,R050','listDongdongWaiters':'R046','listDongdongWaiterPerformance':'R046','listDongdongWaiterEvaluations':'R046','postDongdongMessage':'R050','postDongdongMessageV1':'R050','postMemberPoint':'R053','listMemberPoints':'R053','getMemberAggStatistic':'R053','deleteMember':'R053','getMember':'R053','listOmids':'R053','patchMember':'R053','listMemberAggStatistics':'R053','listMembers':'R053','listOuids':'R053','getMemberSystem':'R053','listMemberSystems':'R053','listVenderMemberRights':'R053','listAccountRecords':'R021,R032,R057','listBills':'R021,R032,R057','postJmAiTask':'R054,R055,R056,R060','getJmAiTask':'R054,R055,R056,R060','patchJmAiTask':'R054,R055,R056,R060','postJmAiTaskRecord':'R054,R055,R056,R060','getJmAiTaskRecord':'R054,R055,R056,R060','patchJmAiTaskRecord':'R054,R055,R056,R060'}
EV={'getOrder':'请求 orderId、venderId、scopeSet.fieldName；返回 orderId/orderStatus/createdTime/modifiedTime 等订单详情（其余嵌套字段待定点确认）','listOrders':'请求 venderId、查询时间/状态/分页与 scopeSet；返回订单列表及分页状态（完整字段待定点确认）','listWaybillTraces':'请求运单号/订单标识；返回轨迹节点与时间（字段待定点确认）','listAfsOrders':'请求商家、时间、状态和分页；返回售后单列表（完整字段待定点确认）','getAfsOrder':'请求 afsOrderId；返回售后原因、状态、金额及商品信息（字段待定点确认）','listAfsOrderLogs':'请求 afsOrderId；返回服务单操作日志（字段待定点确认）','postDongdongMessage':'请求会话/接收方与消息内容；返回发送结果（字段待定点确认）','postDongdongMessageV1':'请求会话/接收方与消息内容；返回发送结果（字段待定点确认）','postReport':'请求 reportSchemaId、筛选条件与时间范围；返回报表数据或下载任务（指标语义待定点确认）'}
def parse(cat):
 p=BASE/cat/'jd-apis.d.ts'
 if not p.exists(): return []
 ls=p.read_text(encoding='utf-8').splitlines(); out=[]
 for i,l in enumerate(ls):
  m=re.match(r'// (.+?)\s+\((\w+)\)\s*$',l)
  if not m: continue
  title,name=m.groups(); method=ep=desc=''
  for z in ls[i+1:i+8]:
   if 'JD method:' in z:
    q=re.search(r'JD method:\s*(\w+)\.(\S+?)\s+HTTP:\s*(\w+)',z)
    if q: method,ep=q.group(1),q.group(2)
   elif z.startswith('// ') and '===' not in z and '错误码' not in z and 'JD method:' not in z: desc=z[3:].strip()
  pas=name[0].upper()+name[1:]
  def fields(kind):
   st=next((j for j in range(i,min(i+120,len(ls))) if ls[j].startswith('export interface '+pas+kind)),None)
   if st is None:return []
   a=[]
   for z in ls[st+1:min(st+90,len(ls))]:
    if z.startswith('export interface ') or (z and not z.startswith(' ')): break
    q=re.match(r'  ([A-Za-z0-9_]+)\??\s*:',z)
    if q:a.append(q.group(1))
   return a
  out.append({'category':cat,'name':name,'title':title,'method':method,'endpoint':ep,'description':desc,'request_fields':fields('Request'),'response_fields':fields('Response'),'source_file':str(p),'line':i+1})
 return out
allops=sum((parse(c) for c in CATS),[]); selected=[]
for o in allops:
 if o['name'] not in KEEP[o['category']]:continue
 v=o['method'].upper(); typ='READ' if v=='GET' else ('ACTION' if o['category']=='虎符' else 'WRITE')
 if o['name'] in {'postReport','postSensitiveReport','listOuids'}: typ='READ'
 o.update(operation_type=typ,requirement_id=RID.get(o['name'],'待registry'),requirement_names=REQ[o['category']],confidence='medium' if o['category'] in {'数据API'} else 'high',reason=EV.get(o['name'],'接口描述与对应需求直接相关；仅作为候选证据，权限、京喜适用性及完整字段待确认。'),evidence_fields=EV.get(o['name'],'完整嵌套输入/输出字段待 Phase4 定点确认。')); selected.append(o)
scan={}
for c in CATS:
 a=parse(c); scan[c]={'interfaces_scanned':len(a),'candidates':sum(x['name'] in KEEP[c] for x in a),'excluded':sum(x['name'] not in KEEP[c] for x in a)}
payload={'phase':'Phase2','scope_categories':CATS,'source_policy':'仅扫描 jd-apis.d.ts；未读取 openapi.json','summary':{'total_operations_scanned':len(allops),'candidate_operations':len(selected),'excluded_operations':len(allops)-len(selected),'action_types':{k:sum(x['operation_type']==k for x in selected) for k in ['READ','WRITE','ACTION','CALLBACK']}},'category_scan':scan,'exclusion_reasons':{'scope_outside_phase2':'商品API、营销API、推广API、内容API、C2M API未扫描','weak_requirement_relation':'名称/描述与需求清单业务目标无直接关系的订单/通用接口排除','change_log':'变更说明无接口定义'},'scene_evidence':[{'source_file':'references/jd-api/京东开放平台文档/POP模式对接方案.md','lines':'12,31,37,55-82,116-129,153-189,225-232,278-282','finding':'POP含SOP及门店发货/自提/到店模式；订单、售后、财务、会员、客服属于开放场景。文档说明的是场景范围/适用模式，不等于具体接口权限。'},{'source_file':'references/jd-api/京东开放平台文档/客服场景文档/客服开放场景概述.md','lines':'12-18,40-46','finding':'客服域覆盖机器人、会话聊天、绩效、质检；适用POP与厂直。'},{'source_file':'references/jd-api/京东开放平台文档/售后场景文档/退换补修场景方案.md','lines':'157-205','finding':'售后列表/详情用于历史同步与增量获取；操作接口为PATCH，消息推送可用于增量但需定向开通。'}],'phase4_targeted_validation':['逐接口确认 request/response 完整字段、枚举、分页与错误码','核实数据API报表的商品/店铺/渠道/广告/时间粒度指标语义，避免由 report 名称推断','核实通用订单接口对京喜店铺/订单类型的适用范围','核实每个候选接口的 ISV 应用权限、商家授权、数据脱敏和写操作前置条件','京麦任务 API：确认任务状态机、回调/轮询、幂等及自动执行边界','虎符/通用安全 API：确认接入场景、路由权限与秘钥生命周期'],'operations':selected}
OUT.mkdir(parents=True,exist_ok=True); (OUT/'operations.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2),encoding='utf-8')
md=['# Phase2 API operation index','',f'- 范围：{len(allops)} 个接口定义，保留 {len(selected)} 个候选。仅扫描 jd-apis.d.ts，未读取 openapi.json。','- READ/WRITE/ACTION/CALLBACK 按业务语义初步分类；权限均为 unknown，不构成 PERMISSION_CONFIRMED。','- 需求 ID 已按 `analysis\\requirement-registry.json` 使用 R001-R060；候选接口只挂接有直接证据的需求。','','## 分类扫描统计','','|分类|扫描接口数|候选数|排除数|','|---|---:|---:|---:|']
for c in CATS:md.append(f"|{c}|{scan[c]['interfaces_scanned']}|{scan[c]['candidates']}|{scan[c]['excluded']}|")
md += ['','## 候选接口','','|分类|接口/标题|HTTP|类型|输入字段（顶层）|输出字段（顶层）|关键证据字段/缺项|需求ID/名称|理由|精确来源|置信度|','|---|---|---|---|---|---|---|---|---|---|---|']
for o in selected:
 md.append('|'+ '|'.join([o['category'],f"`{o['name']}` / {o['title']}",o['method'],o['operation_type'],', '.join(o['request_fields']) or '未解析',', '.join(o['response_fields']) or '未解析',o['evidence_fields'],o['requirement_id']+' / '+o['requirement_names'],o['reason'],f"`{o['source_file']}:{o['line']}`",o['confidence']])+'|')
md += ['','## 场景资料补充证据','','- `POP模式对接方案.md:12,31,37,55-82,116-129,153-189,225-232,278-282`：POP包含SOP、门店发货/自提/到店；订单、售后、财务、会员、客服列为开放场景。仅证明场景范围和模式适用性。','- `客服场景文档/客服开放场景概述.md:12-18,40-46`：客服域覆盖机器人、会话聊天、绩效、质检；适用POP与厂直。','- `售后场景文档/退换补修场景方案.md:157-205`：售后列表/详情支持历史同步与增量获取；PATCH用于服务单操作，消息推送存在定向开通限制。','','## 排除与证据边界','','- 商品API、营销API、推广API、内容API、C2M API不在 Phase2；未扫描。','- 订单中 SN 序列号、OAID 解密、合单条件、核销码系列与当前需求目标无直接证据，排除；其余订单履约/订单查询候选保留。','- 变更说明/jd-apis.d.ts 无接口定义，仅作为变更资料入口。','- d.ts 只证明文档中存在公开接口候选（PUBLIC_API_FOUND）；不能证明 ISV 权限、京喜可用性或字段业务语义。','','## Phase4 定点验证清单','']+[f'- {x}' for x in payload['phase4_targeted_validation']]
(OUT/'operations.md').write_text('\n'.join(md)+'\n',encoding='utf-8'); print(len(allops),len(selected))
