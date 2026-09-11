// ============================================================
// 京东开放平台 - 客服API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 12 个接口
// ============================================================
// ============================================================
// 查询客服在线状态  (queryWaiterStatus)
// JD method: GET.sp-support.v0.dongdong-waiter-status   HTTP: GET
// 支持批量查询指定客服在线状态
// ============================================================
export interface QueryWaiterStatusRequest {
  queryWaiterStatusRequest: {
    app: string;
    waiters: {
      item?: string;
    };
    venderId?: string;
  };
}
export interface QueryWaiterStatusResponse {
  data?: {
    presences?: Record<string, unknown>;
    workingSts?: Record<string, unknown>;
    waiter?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 10610001004, 10610001003, 10610001002, 10610001001

// ============================================================
// 查询机器人评价明细  (listChatbotEvaluations)
// JD method: GET.sp-support.v0.chatbots._robotCode.evaluations   HTTP: GET
// 查询客服机器人评价记录列表接口
// ============================================================
export interface ListChatbotEvaluationsRequest {
  robotCode: string;
  listChatbotEvaluationsRequest: {
    sortOrder?: string;
    venderId?: number;
    startTime?: number;
    endTime?: number;
    page: number;
    pageSize: number;
  };
}
export interface ListChatbotEvaluationsResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    robotCode?: string;
    waiter?: string;
    customer?: string;
    xidBuyer?: string;
    ouid?: string;
    sessionTime?: number;
    evaluationTime?: number;
    degree?: number;
    solveOption?: string;
    evaluationLabel?: string;
    evaluation?: string;
    sid?: string;
    inviteTime?: number;
    inviteType?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10606011002, 10606011001, 10606011004, 10606011003, 10606011006, 10606011005

// ============================================================
// 获取聊天机器人绩效数据  (getChatbotPerformance)
// JD method: GET.sp-support.v0.chatbot-performance._robotCode   HTTP: GET
// 用于获取聊天机器人绩效数据
// ============================================================
export interface GetChatbotPerformanceRequest {
  robotCode: string;
  getChatbotPerformanceRequest: {
    venderId?: number;
    startTime: number;
    endTime: number;
  };
}
export interface GetChatbotPerformanceResponse {
  data?: {
    consultCount?: number;
    replyCount?: number;
    unReplyCount?: number;
    evaluationCount?: number;
    verySatisfiedCount?: number;
    satisfiedCount?: number;
    middleSatisfiedCount?: number;
    unsatisfiedCount?: number;
    veryUnsatisfiedCount?: number;
    solvedCount?: number;
    unSolvedCount?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10607001001, 10607001002, 10607001005, 10607001003, 10607001004

// ============================================================
// 查询会话下的聊天记录  (listDongdongSessionChatLogs)
// JD method: GET.sp-support.v0.dongdong-sessions._sid.chat-logs   HTTP: GET
// 查询会话下的聊天记录，包含客服与顾客的对话信息，会话ID需要从listDongdongSessions获取
// ============================================================
export interface ListDongdongSessionChatLogsRequest {
  sid: string;
  listChatLogsRequest?: {
    venderId?: number;
  };
}
export interface ListDongdongSessionChatLogsResponse {
  data?: {
    waiter?: string;
    customer?: string;
    xidBuyer?: string;
    waiterSend?: number;
    createdTime?: number;
    content?: string;
    msgType?: number;
    imgUrl?: string;
    contentType?: string;
    sid?: string;
    uuid?: string;
    revokeFlag?: number;
    revokeTime?: number;
    skuId?: number;
    msgAssistFlag?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10604011001

// ============================================================
// 获取咚咚会话列表  (listDongdongSessions)
// JD method: GET.sp-support.v0.dongdong-sessions   HTTP: GET
// 用于查询顾客咨询的会话列表，不包含聊天记录，如需获取聊天记录，需配合listChatLogs接口使用
// ============================================================
export interface ListDongdongSessionsRequest {
  listDongdongSessionsRequest: {
    venderId?: number;
    startTime: number;
    endTime: number;
    sortBy?: string;
    sortOrder?: string;
    sessionType?: number;
    entryList?: {
      element?: string;
    };
    waiterList?: {
      element?: string;
    };
    customerList?: {
      element?: string;
    };
    page: number;
    pageSize: number;
  };
}
export interface ListDongdongSessionsResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    appId?: string;
    cAppId?: string;
    customer?: string;
    xidBuyer?: string;
    waiter?: string;
    createdTime?: number;
    replyTime?: number;
    closeTime?: number;
    closeReason?: string;
    sessionType?: number;
    transfer?: boolean;
    sid?: string;
    skuId?: number;
    orderId?: number;
    groupId?: number;
    lastCustomerMsgTime?: number;
    lastWaiterMsgTime?: number;
    customerMsgNum?: number;
    waiterMsgNum?: number;
    responseAvgSpeed?: number;
    entry?: string;
    inviteTime?: number;
    inviteType?: string;
    evaluationTime?: number;
    degree?: number;
    solveOption?: string;
    evaluationLabel?: string;
    evaluation?: string;
    robotCode?: string;
    fromRobotSid?: string;
    robotToImSid?: string;
    extInfo?: string;
    toSid?: string;
    toGroupId?: number;
    toWaiter?: string;
    transferTime?: number;
    transferReason?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10604001001, 10604001005, 10604002501, 10604001004, 10604001003, 10604001002, 10604001007, 10604001006

// ============================================================
// 获取咚咚会话详情  (listDongdongChatDetails)
// JD method: GET.sp-support.v0.dongdong-chat-details   HTTP: GET
// 用于获取咚咚会话详情，包含会话列表和聊天记录，少量数据场景下可通过该接口快速获取聊天信息
// ============================================================
export interface ListDongdongChatDetailsRequest {
  listDongdongChatDetailsRequest: {
    venderId?: number;
    startTime: number;
    endTime: number;
    sortBy?: string;
    sortOrder?: string;
    sessionType?: number;
    entryList?: {
      element?: string;
    };
    waiterList?: {
      element?: string;
    };
    customerList?: {
      element?: string;
    };
    page: number;
    pageSize: number;
  };
}
export interface ListDongdongChatDetailsResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    dongdongSession?: {
      appId?: string;
      cAppId?: string;
      customer?: string;
      waiter?: string;
      createdTime?: number;
      replyTime?: number;
      closeTime?: number;
      closeReason?: string;
      sessionType?: number;
      transfer?: boolean;
      sid?: string;
      skuId?: number;
      orderId?: number;
      groupId?: number;
      lastCustomerMsgTime?: number;
      lastWaiterMsgTime?: number;
      customerMsgNum?: number;
      waiterMsgNum?: number;
      responseAvgSpeed?: number;
      entry?: string;
      inviteTime?: number;
      inviteType?: string;
      evaluationTime?: number;
      degree?: number;
      solveOption?: string;
      evaluationLabel?: string;
      evaluation?: string;
      robotCode?: string;
      fromRobotSid?: string;
      robotToImSid?: string;
      extInfo?: string;
      toSid?: string;
      toGroupId?: number;
      toWaiter?: string;
      transferTime?: number;
      transferReason?: string;
    };
    dongdongChatLogList?: {
      waiter?: string;
      customer?: string;
      waiterSend?: number;
      createdTime?: number;
      content?: string;
      msgType?: number;
      imgUrl?: string;
      contentType?: string;
      sid?: string;
      uuid?: string;
      revokeFlag?: number;
      revokeTime?: number;
      skuId?: number;
      msgAssistFlag?: number;
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10605001006, 10605001005, 10605001008, 10605001007, 10605001009, 10605001002, 10605001001, 10605001004, 10605001003

// ============================================================
// 查询商家客服列表  (listDongdongWaiters)
// JD method: GET.sp-support.v0.dongdong-waiters   HTTP: GET
// 查询商家下，客服列表信息，包括客服总量，每个客服的level（是否是主账号）
// ============================================================
export interface ListDongdongWaitersRequest {
  listDongdongWaitersRequest?: {
    venderId?: number;
    pageSize: number;
    page: number;
  };
}
export interface ListDongdongWaitersResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    shopName?: string;
    waiter?: string;
    yn?: number;
    leader?: boolean;
    level?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 10601001001, 10601001002, 10601001003

// ============================================================
// 查询客服绩效列表  (listDongdongWaiterPerformance)
// JD method: GET.sp-support.v0.dongdong-waiter-performance   HTTP: GET
// 查询客服绩效接口，用于获取客服人员的绩效数据
// ============================================================
export interface ListDongdongWaiterPerformanceRequest {
  listWaiterPerformanceRequest: {
    waiterList: string[];
    venderId?: number;
    startTime: number;
    endTime: number;
  };
}
export interface ListDongdongWaiterPerformanceResponse {
  data?: {
    waiter?: string;
    avgWaitTime?: number;
    onlineTotalTime?: number;
    serviceTotalTime?: number;
    consultCount?: number;
    replyCount?: number;
    unReplyCount?: number;
    evaluationCount?: number;
    verySatisfiedCount?: number;
    satisfiedCount?: number;
    middleSatisfiedCount?: number;
    unsatisfiedCount?: number;
    veryUnSatisfiedCount?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
}
  // 错误码: 10603001004, 10603001003, 10603001006, 10603001005, 10603001002, 10603001001

// ============================================================
// 查询客服评价列表  (listDongdongWaiterEvaluations)
// JD method: GET.sp-support.v0.dongdong-waiter-evaluations   HTTP: GET
// 客服评价列表接口，用于获取用户对客服的评价信息。
// ============================================================
export interface ListDongdongWaiterEvaluationsRequest {
  listWaiterEvaluationsRequest: {
    waiterList?: {
      element?: string;
    };
    sortOrder?: string;
    venderId?: number;
    startTime: number;
    endTime: number;
    page: number;
    pageSize: number;
  };
}
export interface ListDongdongWaiterEvaluationsResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    waiter?: string;
    customer?: string;
    xidBuyer?: string;
    ouid?: string;
    sessionTime?: number;
    evaluationTime?: number;
    degree?: number;
    solveOption?: string;
    evaluationLabel?: string;
    evaluation?: string;
    sid?: string;
    inviteType?: string;
    inviteTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 10602001006, 10602001007, 10602001004, 10602001005, 10602001002, 10602001003, 10602001001

// ============================================================
// 发送京东客服消息  (postDongdongMessage)
// JD method: POST.sp-support.v0.dongdong-messages   HTTP: POST
// 发送京东客服消息接口，用于向用户发送客服消息。
// ============================================================
export interface PostDongdongMessageRequest {
  postDongdongMessageRequest: {
    dongdongMessage: {
      accessSignature: {
        accessId: string;
        aspId: string;
        accessToken: string;
        venderId: number;
        source: string;
        version: string;
      };
      upId: string;
      ver: string;
      fromApp: string;
      fromPin: string;
      toApp: string;
      toPinPlainText: string;
      xidBuyer: string;
      body: string;
    };
  };
}
export interface PostDongdongMessageResponse {
  data?: {
    accessId?: string;
    msgId?: string;
    sendTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10608001002, 10608001001, 10608002501

// ============================================================
// 发送客服通知  (postDongdongNotice)
// JD method: POST.sp-support.v0.dongdong-notices   HTTP: POST
// 发送客服通知接口，用于向客户发送消息通知。
// ============================================================
export interface PostDongdongNoticeRequest {
  postDongdongNoticeRequest: {
    dongdongNotice: {
      sender?: string;
      receivers: {
        element: string;
      };
      appId: string;
      sendTime: number;
      accessToken: string;
      title: string;
      content: string;
      url?: string;
      noticeId: string;
    };
  };
}
export interface PostDongdongNoticeResponse {
  data?: {
    noticeId?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 10609001001, 10609001002

// ============================================================
// 发送场景化消息  (postDongdongMessageV1)
// JD method: POST.sp-support.v1.dongdong-messages   HTTP: POST
// 支持场景化消息发送
// ============================================================
export interface PostDongdongMessageV1Request {
  postDongdongMessageRequest: {
    dongdongSceneMessage?: {
      access: {
        aspId: string;
        accessToken: string;
        source: string;
      };
      sender?: {
        app?: string;
        pin?: string;
      };
      receiver?: {
        app?: string;
        pin?: string;
        xidBuyer?: string;
        ouid?: string;
      };
      bizParam?: Record<string, unknown>;
      bizScene?: string;
      isReceiver?: boolean;
      isSender?: boolean;
      isCtrl?: boolean;
      venderId?: string;
    };
  };
}
export interface PostDongdongMessageV1Response {
  data?: {
    msgId?: string;
    accessId?: string;
    sendTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 10611001003, 10611001002, 10611001001