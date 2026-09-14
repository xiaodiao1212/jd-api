// ============================================================
// 京东开放平台 - 会员API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 13 个接口
// ============================================================
// ============================================================
// 获取会员体系详情  (getMemberSystem)
// JD method: GET.sp-marketing.v0.member-systems._memberSystemId   HTTP: GET
// 获取会员体系配置的会员卡信息、等级规则、积分规则。
// ============================================================
export interface GetMemberSystemRequest {
  memberSystemId: number;
  request: {
    scopeSet?: {
      element?: string;
    };
    venderId: number;
  };
}
export interface GetMemberSystemResponse {
  data?: {
    memberSystemId?: number;
    memberSystemState?: number;
    memberSystemType?: number;
    memberSystemTypeDesc?: string;
    memberSystemPointsFlag?: boolean;
    memberSystemPointsRuleList?: {
      ruleId?: string;
      type?: number;
      typeDesc?: string;
      exchangeMultiplier?: Record<string, unknown>;
      points?: number;
    }[];
    memberSystemLevelRuleList?: {
      memberLevel?: number;
      memberLevelName?: string;
      minOrderAmount?: Record<string, unknown>;
      maxOrderAmount?: Record<string, unknown>;
      minOrderCount?: number;
      maxOrderCount?: number;
    }[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10504001001, 10504001002

// ============================================================
// 查询会员体系列表  (listMemberSystems)
// JD method: GET.sp-marketing.v0.member-systems   HTTP: GET
// 查询当前商家所属的的会员体系信息
// ============================================================
export interface ListMemberSystemsRequest {
  request?: {
    venderId?: number;
    scopeSet?: {
      element?: string;
    };
  };
}
export interface ListMemberSystemsResponse {
  data?: {
    memberSystemId?: number;
    memberSystemState?: number;
    memberSystemType?: number;
    memberSystemTypeDesc?: string;
    memberSystemPointsFlag?: boolean;
    memberSystemPointsRuleList?: {
      ruleId?: string;
      type?: number;
      typeDesc?: string;
      exchangeMultiplier?: Record<string, unknown>;
      points?: number;
    }[];
    memberSystemLevelRuleList?: {
      memberLevel?: number;
      memberLevelName?: string;
      minOrderAmount?: Record<string, unknown>;
      maxOrderAmount?: Record<string, unknown>;
      minOrderCount?: number;
      maxOrderCount?: number;
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10504001001, 10504001002, 10504001003

// ============================================================
// 查询商家会员权益列表  (listVenderMemberRights)
// JD method: GET.sp-marketing.v0.vender-member-rights   HTTP: GET
// 查询当前商家所属的会员体系，配置的会员等级和规则数据
// ============================================================
export interface ListVenderMemberRightsRequest {
  request?: {
    scopeSet?: {
      element?: string;
    };
    venderId?: number;
  };
}
export interface ListVenderMemberRightsResponse {
  data?: {
    memberDiscountList?: {
      discount?: string;
      venderMemberGradeName?: string;
      venderMemberGrade?: string;
      memberSystemId?: number;
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10503001001, 10503001003

// ============================================================
// 变更会员积分  (postMemberPoint)
// JD method: POST.sp-marketing.v0.members._omid.points   HTTP: POST
// 线下商家会员积分发生变更时，通过该接口同步给平台会员积分系统。

// ============================================================
export interface PostMemberPointRequest {
  memberId: string;
  request: {
    memberPointDTO?: {
      pointsOperationType: number;
      businessId: string;
      comment?: string;
      points: number;
      venderId: number;
    };
  };
}
export interface PostMemberPointResponse {
  data?: {
    memberSystemId?: number;
    points?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10501012505, 10501012506, 10501013001, 10501011001, 10501011002, 10501012503, 10501012504, 10501012501, 10501012502

// ============================================================
// 查询会员积分变更列表  (listMemberPoints)
// JD method: GET.sp-marketing.v0.members._omid.points   HTTP: GET
// 查询指定会员的积分增、减变更明细记录。
// ============================================================
export interface ListMemberPointsRequest {
  omid: string;
  request?: {
    venderId: number;
    scopeSet?: {
      field?: string;
    };
    startTime?: number;
    endTime?: number;
    cursor?: string;
    pageSize?: number;
  };
}
export interface ListMemberPointsResponse {
  data?: {
    businessId?: string;
    orderId?: string;
    memberSystemId?: number;
    customerPin?: string;
    xidBuyer?: string;
    occurTime?: number;
    points?: number;
    pointsChangeRemark?: string;
    currentRemainPoints?: number;
    pointsOperationType?: number;
    pointsOperationTypeDesc?: string;
  }[];
  paginationData?: {
    pageSize?: number;
    currentPage?: number;
    nextCursor?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10501011003, 10501011001, 10501011002

// ============================================================
// 查询会员详情及统计信息  (getMemberAggStatistic)
// JD method: GET.sp-marketing.v0.member-agg-statistics._omid   HTTP: GET
// 通过该接口，查询指定会员基本信息及交易类统计信息
// ============================================================
export interface GetMemberAggStatisticRequest {
  omid: string;
  request: {
    scopeSet: {
      field: string;
    };
    venderId: number;
  };
}
export interface GetMemberAggStatisticResponse {
  data?: {
    member?: {
      omid?: string;
      customerPin?: string;
      xidBuyer?: string;
      memberSystemId?: number;
      memberLevel?: number;
      offlineMemberCardNo?: string;
      gender?: string;
      birthday?: string;
      openCardChannelId?: number;
      bindTime?: number;
      phoneFlag?: boolean;
      wechatFlag?: boolean;
      pcFlag?: boolean;
      joinOrigin?: number;
      paidUpMember?: number;
      points?: number;
      originVenderId?: number;
      latestJoinTime?: number;
    };
    totalOrderAmount?: Record<string, unknown>;
    totalOrderCount?: number;
    avgOrderPrice?: Record<string, unknown>;
    lastOrderTime?: number;
    firstOrderTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10502001001, 10502001002

// ============================================================
// 解绑会籍  (deleteMember)
// JD method: DELETE.sp-marketing.v0.members._omid   HTTP: DELETE
// 解绑用户在当家商家下的会员身份，24小时内不可再次入会。
// ============================================================
export interface DeleteMemberRequest {
  omid: string;
  request: {
    memberSystemId: number;
    venderId: number;
  };
}
export interface DeleteMemberResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10501001002, 10501001003, 10501001001

// ============================================================
// 查询会员详情  (getMember)
// JD method: GET.sp-marketing.v0.members._omid   HTTP: GET
// 通过会员ID指定会员详情信息
// ============================================================
export interface GetMemberRequest {
  omid: string;
  request: {
    scopeSet: {
      field: string;
    };
    venderId: number;
  };
}
export interface GetMemberResponse {
  data?: {
    omid?: string;
    memberSystemId?: number;
    customerPin?: string;
    xidBuyer?: string;
    gender?: string;
    birthday?: string;
    openCardChannelId?: number;
    offlineMemberCardNo?: string;
    memberLevel?: number;
    bindTime?: number;
    phoneFlag?: boolean;
    wechatFlag?: boolean;
    pcFlag?: boolean;
    joinOrigin?: number;
    paidUpMember?: number;
    points?: number;
    originVenderId?: number;
    latestJoinTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10501001002, 10501001003, 10501001001

// ============================================================
// XID和会员ID批量互转接口  (listOmids)
// JD method: GET.sp-marketing.v0.omids   HTTP: GET
// 跨店铺：同一会员体系下有多个店铺时，同一用户，查询到omid相同
跨应用：同一会员体系下店铺订购不同应用，可通过xid转化为omid，将不同应用下的用户识别为同一人。
// ============================================================
export interface ListOmidsRequest {
  request: {
    venderId?: number;
    xidList?: string[];
    omidList?: string[];
    sceneType?: number;
  };
}
export interface ListOmidsResponse {
  data?: {
    omid?: string;
    xid?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10505001006, 10505001001

// ============================================================
// 更新会员信息  (patchMember)
// JD method: PATCH.sp-marketing.v0.members._omid   HTTP: PATCH
// 修改会员的基本信息
// ============================================================
export interface PatchMemberRequest {
  omid: string;
  request: {
    version: string;
    operationList: {
      key: string;
      value: string;
      operation: string;
    }[];
    venderId: number;
    operationType?: number;
  };
}
export interface PatchMemberResponse {
  data?: {
    omid?: string;
    memberSystemId?: number;
    memberLevel?: number;
    memberCode?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10501001002, 10501001003, 10501001001

// ============================================================
// 查询会员详情及统计数据列表  (listMemberAggStatistics)
// JD method: GET.sp-marketing.v0.member-agg-statistics   HTTP: GET
// 查询指定条件下的会员列表及交易统计类数据列表，不包含LV0会员数据
// ============================================================
export interface ListMemberAggStatisticsRequest {
  request: {
    venderId: number;
    memberLevel?: string;
    memberLevels?: {
      memberLevel?: string;
    };
    mobile?: string;
    customerPin?: string;
    xidBuyer?: string;
    ouid?: string;
    orderStartTime?: number;
    orderEndTime?: number;
    bindingStartTime?: number;
    bindingEndTime?: number;
    latestOrderStartTime?: number;
    latestOrderEndTime?: number;
    minOrderAmount?: Record<string, unknown>;
    maxOrderAmount?: Record<string, unknown>;
    minOrderCount?: number;
    maxOrderCount?: number;
    minAvgOrderPrice?: Record<string, unknown>;
    maxAvgOrderPrice?: Record<string, unknown>;
    scopeSet?: {
      element?: string;
    };
    page: number;
    pageSize: number;
  };
}
export interface ListMemberAggStatisticsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    member?: {
      omid?: string;
      customerPin?: string;
      xidBuyer?: string;
      ouid?: string;
      memberSystemId?: number;
      memberLevel?: number;
      offlineMemberCardNo?: string;
      bindTime?: number;
      phoneFlag?: boolean;
      wechatFlag?: boolean;
      pcFlag?: boolean;
      joinOrigin?: number;
      paidUpMember?: number;
      points?: number;
      originVenderId?: number;
      latestJoinTime?: number;
    };
    totalOrderAmount?: Record<string, unknown>;
    totalOrderCount?: number;
    avgOrderPrice?: Record<string, unknown>;
    lastOrderTime?: number;
    firstOrderTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10502001003, 10502001001

// ============================================================
// 查询会员列表  (listMembers)
// JD method: GET.sp-marketing.v0.members   HTTP: GET
// 查询指定条件下的会员列表数据，不包含LV0会员数据
// ============================================================
export interface ListMembersRequest {
  request: {
    venderId: number;
    customerPin?: string;
    xidBuyer?: string;
    ouid?: string;
    memberLevel?: string;
    memberLevels?: {
      memberLevel?: string;
    };
    mobile?: string;
    orderStartTime?: number;
    orderEndTime?: number;
    bindingStartTime?: number;
    bindingEndTime?: number;
    latestOrderStartTime?: number;
    latestOrderEndTime?: number;
    minOrderCount?: number;
    maxOrderCount?: number;
    minOrderAmount?: Record<string, unknown>;
    maxOrderAmount?: Record<string, unknown>;
    minAvgOrderPrice?: Record<string, unknown>;
    maxAvgOrderPrice?: Record<string, unknown>;
    scopeSet?: {
      element?: string;
    };
    page: number;
    pageSize: number;
  };
}
export interface ListMembersResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    omid?: string;
    customerPin?: string;
    xidBuyer?: string;
    ouid?: string;
    memberSystemId?: number;
    memberLevel?: number;
    offlineMemberCardNo?: string;
    bindTime?: number;
    phoneFlag?: boolean;
    wechatFlag?: boolean;
    pcFlag?: boolean;
    joinOrigin?: number;
    paidUpMember?: number;
    points?: number;
    originVenderId?: number;
    latestJoinTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10501001001, 10501001005

// ============================================================
// omid和ouid互转  (listOuids)
// JD method: PUT.sp-marketing.v0.omid-ouids.batch   HTTP: PUT
// omid和ouid互转接口
// ============================================================
export interface ListOuidsRequest {
  request: {
    sceneType: number;
    pin?: string;
    ouidList?: {
      ouidDTO?: {
        ouid?: string;
      };
    };
    omidList?: {
      omid?: string;
    };
  };
}
export interface ListOuidsResponse {
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
  data?: {
    ouidDTO?: {
      ouid?: string;
      omid?: string;
    };
  };
}
  // 错误码: 10506001002, 10506001001