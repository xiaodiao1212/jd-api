// ============================================================
// 京东开放平台 - 营销API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 15 个接口
// ============================================================
// ============================================================
// 上报活动信息  (postActivityReport)
// JD method: POST.sp-marketing.v0.marketingactivities   HTTP: POST
// ISV上报商家活动信息
// ============================================================
export interface PostActivityReportRequest {
  param1: {
    venderId: string;
    basetype: number;
    activityId: string;
    activityType: number;
    activityName: string;
    activityUrl: string;
    startTime: string;
    endTime: string;
    placementPosition: string;
    isKeyActivity: number;
    isFinancialInvolved: number;
    expectedPv?: string;
    historicalActivityPv?: string;
    shopMemberCount?: number;
    platformFilingStatus?: number;
  };
}
export interface PostActivityReportResponse {
  msg?: string;
  code?: string;
  data?: boolean;
  success?: boolean;
  reqId?: string;
  errorList?: {
    code?: number;
    message?: string;
    details?: string;
  };
}
  // 错误码: 500*, 400*, 200

// ============================================================
// 人群预计算  (getPreCompute)
// JD method: GET.sp-marketing.v0.pre-computes   HTTP: GET
// 人群预计算
// ============================================================
export interface GetPreComputeRequest {
  request?: {
    venderId?: number;
    appId?: string;
    strategyId?: string;
    strategy?: string;
    strategyParam?: string;
    pinType?: number;
    partition?: string;
    applicationDomain?: number;
    strategyOperateType?: number;
  };
}
export interface GetPreComputeResponse {
  success?: boolean;
  data?: {
    total?: number;
    member?: number;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12204002001

// ============================================================
// 创建人群策略  (postStrategy)
// JD method: POST.sp-marketing.v0.strategies   HTTP: POST
// 创建人群策略
// ============================================================
export interface PostStrategyRequest {
  request?: {
    appId?: string;
    venderId?: number;
    name: string;
    description: string;
    strategy: string;
    strategyParam?: string;
    applicationDomain: number;
    partition?: string;
  };
}
export interface PostStrategyResponse {
  success?: boolean;
  data?: {
    strategyId?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12202001001

// ============================================================
// 查询策略详情  (getStrategy)
// JD method: GET.sp-marketing.v0.strategies._strategyId   HTTP: GET
// 查询策略详情
// ============================================================
export interface GetStrategyRequest {
  strategyId: string;
  request?: {
    appId?: string;
    venderId?: string;
  };
}
export interface GetStrategyResponse {
  success?: boolean;
  data?: {
    strategyId?: string;
    name?: string;
    description?: string;
    strategy?: string;
    createTime?: number;
    updateTime?: number;
    state?: number;
    strategyParam?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12202001009

// ============================================================
// 批量获取咚咚测试账号  (getTestPin)
// JD method: GET.sp-marketing.v0.dongdongs   HTTP: GET
// 批量获取咚咚测试账号
// ============================================================
export interface GetTestPinRequest {
  request?: {
    appKey?: string;
    venderId?: number;
  };
}
export interface GetTestPinResponse {
  success?: boolean;
  data?: string;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12205009999

// ============================================================
// 删除人群包  (deleteUserPackage)
// JD method: DELETE.sp-marketing.v0.userpackages._instanceId   HTTP: DELETE
// 删除人群包
// ============================================================
export interface DeleteUserPackageRequest {
  instanceId: string;
  request?: {
    appId?: string;
    venderId?: number;
    pin?: string;
  };
}
export interface DeleteUserPackageResponse {
  success?: boolean;
  data?: {
    instanceId?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12203001006

// ============================================================
// 查询策略列表  (listStrategies)
// JD method: GET.sp-marketing.v0.strategies   HTTP: GET
// 查询策略列表
// ============================================================
export interface ListStrategiesRequest {
  request?: {
    appId?: string;
    venderId?: string;
    pin?: string;
    scope: number;
    state?: string;
    applicationDomain?: number;
    strategyOperateType?: number;
    page?: number;
    pageSize?: number;
  };
}
export interface ListStrategiesResponse {
  success?: boolean;
  data?: {
    strategyId?: string;
    name?: string;
    description?: string;
    strategy?: string;
    createTime?: number;
    updateTime?: number;
    state?: number;
    strategyParam?: string;
    strategyType?: number;
    rule?: string;
    applicationDomain?: number;
    strategyOperateType?: number;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
}
  // 错误码: 12202001009

// ============================================================
// 修改人群策略  (patchStrategy)
// JD method: PATCH.sp-marketing.v0.strategies._strategyId   HTTP: PATCH
// 修改人群策略
// ============================================================
export interface PatchStrategyRequest {
  strategyId: string;
  request?: {
    appId?: string;
    venderId?: number;
    name: string;
    description: string;
    strategy: string;
    strategyParam?: string;
    applicationDomain: number;
    partition?: string;
  };
}
export interface PatchStrategyResponse {
  success?: boolean;
  data?: {
    strategyId?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12202001001

// ============================================================
// 查询人群标签列表  (listTags)
// JD method: GET.sp-marketing.v0.tags   HTTP: GET
// 查询人群标签列表，仅能获取有权限的标签，若需添加标签权限，请联系运营。
// ============================================================
export interface ListTagsRequest {
  request: {
    appId?: string;
    venderId?: number;
    begroup: string;
    version: number;
    applicationScenario: number;
  };
}
export interface ListTagsResponse {
  data?: {
    lableName?: string;
    lableMeaning?: string;
    lableDesc?: string;
    hasEnumValue?: boolean;
    begroup?: string;
    version?: number;
    labelApplyType?: number;
    enumValues?: {
      enumValuesItem?: {
        fieldValue?: string;
        realValue?: string;
        version?: number;
      };
    };
    lableIntroduce?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
  success?: boolean;
}
  // 错误码: 12201001001

// ============================================================
// 删除人群策略  (deleteStrategy)
// JD method: DELETE.sp-marketing.v0.strategies._strategyId   HTTP: DELETE
// 删除人群策略
// ============================================================
export interface DeleteStrategyRequest {
  strategyId: string;
  request?: {
    appId?: string;
    venderId?: number;
  };
}
export interface DeleteStrategyResponse {
  success?: boolean;
  data?: {
    strategyId?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12202001009

// ============================================================
// 查询人群包列表  (listUserPackage)
// JD method: GET.sp-marketing.v0.userpackages   HTTP: GET
// 查询人群包列表
// ============================================================
export interface ListUserPackageRequest {
  request?: {
    appId?: string;
    venderId?: number;
    pin?: string;
    createTime?: string;
    page?: number;
    pageSize?: number;
  };
}
export interface ListUserPackageResponse {
  success?: boolean;
  data?: {
    instanceId?: string;
    resultName?: string;
    resultDesc?: string;
    type?: number;
    resultNum?: number;
    status?: number;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12203001006

// ============================================================
// 人群上传-开始阶段  (uploadPackageStart)
// JD method: POST.sp-marketing.v0.userpackages._instanceId.multiuploads   HTTP: POST
// 人群上传-开始阶段，使用人群上传功能时，需先调用此接口。
// ============================================================
export interface UploadPackageStartRequest {
  instanceId: string;
  request?: {
    appId?: string;
    venderId?: number;
    fileType: string;
    fileSize: number;
    md5: string;
  };
}
export interface UploadPackageStartResponse {
  success?: boolean;
  data?: string;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12203001003

// ============================================================
// 更新人群包  (patchUserPackage)
// JD method: PATCH.sp-marketing.v0.userpackages._instanceId   HTTP: PATCH
// 更新人群包，仅支持修改上传人群的活动id，同老接口（jingdong.data.vender.strategy.inst.bind ）
// ============================================================
export interface PatchUserPackageRequest {
  instanceId: string;
  request?: {
    appId?: string;
    venderId?: number;
    pin?: string;
    mktActivityId: string;
    mktActivityInstId: string;
    taskId: string;
    taskInstId: string;
  };
}
export interface PatchUserPackageResponse {
  success?: boolean;
  data?: {
    instanceId?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12203001006

// ============================================================
// 创建人群包  (postUserPackage)
// JD method: POST.sp-marketing.v0.userpackages   HTTP: POST
// 创建人群包
// ============================================================
export interface PostUserPackageRequest {
  request?: {
    appId?: string;
    venderId?: number;
    pin?: string;
    strategyId: string;
    mktActivityId: string;
    mktActivityInstId: string;
    taskId: string;
    taskInstId: string;
    strategyParam?: string;
    instancePackType?: number;
    strategyOperateType?: number;
  };
}
export interface PostUserPackageResponse {
  success?: boolean;
  data?: {
    instanceId?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12203001001

// ============================================================
// 人群上传-单分片上传或上传完成  (uploadPackageProcessOrEnd)
// JD method: PATCH.sp-marketing.v0.userpackages._instanceId.multiuploads._uploadId   HTTP: PATCH
// 人群上传-单分片上传或上传完成，原单分片上传以及人群上传结束接口均整合在此接口
// ============================================================
export interface UploadPackageProcessOrEndRequest {
  instanceId: string;
  uploadId: string;
  request?: {
    appId?: string;
    venderId?: number;
    handleType: number;
    partNumber?: number;
    partFileBase64Str?: string;
    length?: number;
    md5?: string;
    lastPartNumber?: number;
    pin?: string;
    resultName?: string;
    resultDesc?: string;
    dataType?: string;
  };
}
export interface UploadPackageProcessOrEndResponse {
  success?: boolean;
  data?: {
    uploadId?: string;
    partNumber?: number;
    instanceId?: string;
    missPartList?: Record<string, unknown>;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 12203001007, 12203001005