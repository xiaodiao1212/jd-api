// ============================================================
// 京东开放平台 - 虎符 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 4 个接口
// ============================================================
// ============================================================
// 查询已接入场景列表  (listAccessedScenes)
// JD method: GET.open-hufu.v0.hufuSceneses   HTTP: GET
// 查询已接入场景列表
// ============================================================
export interface ListAccessedScenesRequest {
  listAccessedScenesDTO?: {
    pageNumber: number;
    sceneId?: number;
    pageSize: number;
    appKey?: string;
  };
}
export interface ListAccessedScenesResponse {
  data?: {
    accessedScenes?: {
      accessedScenesItem?: {
        appName?: string;
        sceneName?: string;
        sceneDocUrl?: string;
        imgUrl?: string;
        sceneDesc?: string;
        appTypeDesc?: string;
        createTime?: string;
        appType?: string;
        sceneDocName?: string;
        sceneId?: number;
        appKey?: string;
        accessSceneId?: number;
        appTypeLevel?: number;
      };
    };
    totalCount?: number;
  };
  success?: boolean;
  errorList?: {
    code?: number;
    details?: string;
    message?: string;
  };
}
  // 错误码: 12502004000, 12502005000

// ============================================================
// 查询路由列表  (listRouters)
// JD method: GET.open-hufu.v0.hufuRouters   HTTP: GET
// 查询路由列表
// ============================================================
export interface ListRoutersRequest {
  listroutersDTO?: {
    appKey: string;
    targetAppKey?: string;
    sceneId: number;
    status?: number;
    routerType?: number;
    interFlowAccessId: number;
    customerId?: string;
    appUrl?: string;
    pageNumber: number;
    pageSize: number;
  };
}
export interface ListRoutersResponse {
  data?: {
    records?: {
      recordsItem?: {
        targetAppName?: string;
        routerType?: number;
        applyReason?: string;
        shopName?: string;
        appUrl?: string;
        updateTime?: string;
        reviewComments?: string;
        targetAppImgUrl?: string;
        createTime?: string;
        routerId?: number;
        customerId?: string;
        targetAppKey?: string;
        status?: number;
      };
    };
    totalCount?: number;
  };
  success?: boolean;
  errorList?: {
    code?: number;
    details?: string;
    message?: string;
  };
}
  // 错误码: 12501005000, 12501004000

// ============================================================
// 申请对接路由  (saveRouter)
// JD method: POST.open-hufu.v0.hufuRouters   HTTP: POST
// 申请对接路由
// ============================================================
export interface SaveRouterRequest {
  saveRouterDTO?: {
    sceneId: number;
    routerId?: number;
    interflowAccessId: number;
    sourceAppKey: string;
    targetAppKey: string;
    sourceAppUrl: string;
    shopName: string;
    routerType: number;
    applyReason?: string;
  };
}
export interface SaveRouterResponse {
  data?: {
    result?: boolean;
  };
  success?: boolean;
  errorList?: {
    code?: number;
    details?: string;
    message?: string;
  };
}
  // 错误码: 12501005000, 12501004000

// ============================================================
// 确认路由对接申请  (confirmRouter)
// JD method: POST.open-hufu.v0.hufuRouters.validations   HTTP: POST
// 确认路由对接申请 status=1 审核通过 status=2 驳回
// ============================================================
export interface ConfirmRouterRequest {
  confirmRouterDTO?: {
    interFlowAccessId: number;
    sceneId: number;
    appKey: string;
    routerId: number;
    customerId: string;
    targetAppUrl: string;
    status: number;
    reviewComments?: string;
  };
}
export interface ConfirmRouterResponse {
  data?: {
    result?: boolean;
  };
  success?: boolean;
  errorList?: {
    code?: number;
    details?: string;
    message?: string;
  };
}
  // 错误码: 12501005000, 12501004000