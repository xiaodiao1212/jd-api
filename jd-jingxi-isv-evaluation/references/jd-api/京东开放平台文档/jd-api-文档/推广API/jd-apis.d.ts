// ============================================================
// 京东开放平台 - 推广API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 15 个接口
// ============================================================
// ============================================================
// 批量更新单元状态  (batchPutAdsGroupState)
// JD method: PUT.ads-group-states.batch   HTTP: PUT
// 批量更新单元的状态信息
// ============================================================
export interface BatchPutAdsGroupStateRequest {
  batchPutAdsGroupStateRequest: {
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    adsGroupStateDTO: {
      adGroupIdList: Record<string, unknown>;
      operateType: number;
    };
    appKey: string;
    josRemoteIp: string;
  };
}
export interface BatchPutAdsGroupStateResponse {
  data?: {
    adGroupId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10902001001, 10902002002, 10902001002, 10902002003, 10902003003, 10902001003, 10902009999, 10902002000, 10902003002, 10902002001, 10902003001

// ============================================================
// 计划状态更新  (batchPutAdsCampaignState)
// JD method: PUT.ads-bidding.v0.ads-campaign-states.batch   HTTP: PUT
// 批量更新计划的状态信息，jos可以设置每个计划更新的状态不一致，如计划a暂停，计划b启动-KA、秒送
// ============================================================
export interface BatchPutAdsCampaignStateRequest {
  batchPutAdsCampaignStateRequest: {
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    adsCampaignStateDTO?: {
      operateType: number;
      campaignIdList: Record<string, unknown>;
    };
    appKey: string;
    josRemoteIp: string;
  };
}
export interface BatchPutAdsCampaignStateResponse {
  data?: {
    campaignId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10901009999, 10901001003, 10901001002, 10901002003, 10901002001, 10901003002, 10901002002, 10901003003, 10901001001, 10901002000, 10901003001

// ============================================================
// 计划删除操作  (batchDeleteAdsCampaign)
// JD method: DELETE.ads-bidding.v0.ads-campaigns.batch   HTTP: DELETE
// 批量删除投放计划-KA
// ============================================================
export interface BatchDeleteAdsCampaignRequest {
  batchDeleteAdsCampaignRequest: {
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    adsCampaignIdList: Record<string, unknown>;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface BatchDeleteAdsCampaignResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  campaignIdList?: number[];
}
  // 错误码: 10901009999, 10901001003, 10901001002, 10901002003, 10901002001, 10901003002, 10901002002, 10901003003, 10901001001, 10901002000, 10901003001

// ============================================================
// 获取单元列表  (listAdsGroups)
// JD method: GET.ads-bidding.v0.ads-groups   HTTP: GET
// 获取单元列表
// ============================================================
export interface ListAdsGroupsRequest {
  listAdsGroupsRequest?: {
    subScenarioType?: number;
    scenarioType?: number;
    pageSize?: number;
    paymentType?: number;
    obys?: string;
    campaignId?: number;
    nameLike?: string;
    page?: number;
    status?: number;
    msStoreId?: string;
    adGroupId?: number;
    campaignNameLike?: string;
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface ListAdsGroupsResponse {
  data?: {
    businessType?: number;
    businessTypeDesc?: string;
    campaignType?: number;
    campaignTypeDesc?: string;
    campaignId?: number;
    adGroupId?: number;
    msStoreId?: string;
    msStoreName?: string;
    stationAddress?: string;
    campaignName?: string;
    scenarioType?: number;
    scenarioTypeDesc?: string;
    subScenarioType?: number;
    subScenarioTypeDesc?: string;
    paymentType?: number;
    paymentTypeDesc?: string;
    timeRangeType?: number;
    timeRangeTypeDesc?: string;
    biddingType?: number;
    biddingTypeDesc?: string;
    status?: number;
    statusDesc?: string;
    fee?: Record<string, unknown>;
    premiumCoef?: number;
    storeBalance?: Record<string, unknown>;
    unifiedBudget?: Record<string, unknown>;
    startTime?: number;
    endTime?: number;
    timeRange?: string;
    totalOrderCVS?: Record<string, unknown>;
    roi?: Record<string, unknown>;
    totalOrderSumDeal?: Record<string, unknown>;
    realTotalOrderSumDeal?: Record<string, unknown>;
    orderIdCnt?: number;
    ctr?: Record<string, unknown>;
    impressions?: number;
    clicks?: number;
    cost?: Record<string, unknown>;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  paginationData?: {
    currentPage?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
  };
}
  // 错误码: 10902001001, 10902002002, 10902001002, 10902001003, 10902009999, 10902002000

// ============================================================
// 批量添加单元  (batchPostAdsGroup)
// JD method: POST.ads-bidding.v0.ads-groups.batch   HTTP: POST
// 批量添加单元/门店--KA
// ============================================================
export interface BatchPostAdsGroupRequest {
  batchPostAdsGroupRequest: {
    campaignId: number;
    adsGroupDTOList: {
      msStoreId?: string;
      fee?: Record<string, unknown>;
      unifiedBudget?: Record<string, unknown>;
    }[];
    accountId?: number;
    siteId?: number;
    josApiName?: string;
    tenantCode?: string;
    authType?: string;
    requestFrom?: string;
    pin?: string;
    appKey?: string;
    josRemoteIp?: string;
  };
}
export interface BatchPostAdsGroupResponse {
  data?: {
    adGroupId?: number;
    msStoreId?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10902001001, 10902001002, 10902001003

// ============================================================
// 单个计划更新  (patchAdsCampaign)
// JD method: PATCH.ads-bidding.v0.ads-campaigns._adsCampaignId   HTTP: PATCH
// 当修改计划的出价控制方式、溢价系数、计划名称时，调用此接口进行修改，每次仅支持单个计划的更新。
// ============================================================
export interface PatchAdsCampaignRequest {
  campaignId: number;
  patchAdsCampaignRequest?: {
    josApiName: string;
    tenantCode: string;
    adsCampaignDTO: {
      premiumCoef?: number;
      biddingType: number;
      name?: string;
    };
    accountId?: number;
    pin: string;
    siteId: number;
    authType?: string;
    requestFrom: string;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface PatchAdsCampaignResponse {
  data?: {
    campaignId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10901009999, 10901001003, 10901001002, 10901002003, 10901002001, 10901003002, 10901002002, 10901003003, 10901001001, 10901002000, 10901003001

// ============================================================
// 计划新建  (postAdsCampaign)
// JD method: postAdsCampaign   HTTP: POSTADSCAMPAIGN
// 计划新建
// ============================================================
export interface PostAdsCampaignRequest {
  postAdsCampaignRequest?: {
    adsCampaignDTO?: {
      subScenarioType?: number;
      scenarioType?: number;
      orientJdoDTO?: {
        categoryPreferenceDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        };
        deliveryDistanceDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        };
        perAvgPaymentDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        };
        areaTypeDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        };
        timeRangeCoefDTO?: {
          openAllDayFlag?: boolean;
          weekDayTimeRangePriceCoefDTOList?: {
            timeRangeType?: number;
            priceCoef?: string;
            timeRange?: string;
          };
          weekEndTimeRangePriceCoefDTOList?: {
            timeRangeType?: number;
            priceCoef?: string;
            timeRange?: string;
          };
        };
        crowdId?: number;
        searchTrafficDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        };
        customerTypeDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        };
      };
      adGroupCreateJdoDTO?: {
        premiumCoef?: number;
        biddingType?: number;
        storeInfoDTOList?: {
          adGroupId?: number;
          msStoreId?: string;
          unifiedBudget?: Record<string, unknown>;
          fee?: Record<string, unknown>;
        };
      };
      biddingType?: number;
      fee?: Record<string, unknown>;
      paymentType?: number;
      timeRangeJdoDTO?: {
        timeRangeType?: number;
        weekEndTimeRange?: {
          element?: string;
        };
        weekDayTimeRange?: {
          element?: string;
        };
        openAllDayFlag?: boolean;
        timeRange?: {
          element?: string;
        };
        timeRangePriceCoef?: string;
      };
      premiumCoef?: number;
      startTime?: number;
      campaignType: number;
      name?: string;
      endTime?: number;
      businessType?: number;
      campaignBudgetDTO?: {
        unifiedBudget?: Record<string, unknown>;
        dateRange?: string;
        increaseBudgetStatus?: number;
        increaseBudgetRadio?: number;
        increaseBudgetMaxCount?: number;
        increaseBudgetExceptROI?: Record<string, unknown>;
      };
      uniformSpeed?: number;
    };
    josApiName: string;
    tenantCode: string;
    accountId?: number;
    pin: string;
    siteId: number;
    authType?: string;
    requestFrom: string;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface PostAdsCampaignResponse {
  data?: {
    campaignId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}

// ============================================================
// 批量更新计划部分信息  (batchPatchAdsCampaign)
// JD method: PATCH.ads-bidding.v0.ads-campaigns.batch   HTTP: PATCH
// 当更新计划的推广周期、推广时段、计划名称、外卖定向溢价、计划预算、投放策略时，使用该接口进行计划部分信息更新
// ============================================================
export interface BatchPatchAdsCampaignRequest {
  batchPatchAdsCampaignRequest?: {
    adsCampaignDTOList?: {
      timeRangeJdoDTO?: {
        timeRangeType?: number;
        weekEndTimeRange?: string[];
        weekDayTimeRange?: string[];
        openAllDayFlag?: boolean;
        timeRange?: string[];
        timeRangePriceCoef?: string;
      };
      orientJdoDTO?: {
        categoryPreferenceDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        }[];
        deliveryDistanceDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        }[];
        perAvgPaymentDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        }[];
        areaTypeDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        }[];
        timeRangeCoefDTO?: {
          weekDayTimeRangePriceCoefDTOList?: {
            timeRangeType?: number;
            priceCoef?: string;
            timeRange?: string;
          }[];
          openAllDayFlag?: boolean;
          weekEndTimeRangePriceCoefDTOList?: {
            timeRangeType?: number;
            priceCoef?: string;
            timeRange?: string;
          }[];
        };
        crowdId?: number;
        searchTrafficDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        }[];
        customerTypeDTOList?: {
          price?: Record<string, unknown>;
          value?: string;
        }[];
      };
      campaignId: number;
      name?: string;
      startTime?: number;
      endTime?: number;
      campaignBudgetDTO?: {
        unifiedBudget?: Record<string, unknown>;
        dateRange?: string;
        increaseBudgetStatus?: number;
        increaseBudgetRadio?: number;
        increaseBudgetMaxCount?: number;
      };
      uniformSpeed?: number;
    }[];
    josApiName: string;
    tenantCode: string;
    accountId?: number;
    pin: string;
    siteId: number;
    authType?: string;
    requestFrom: string;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface BatchPatchAdsCampaignResponse {
  data?: {
    campaignId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10901009999, 10901001003, 10901001002, 10901002003, 10901002001, 10901003002, 10901002002, 10901003003, 10901001001, 10901002000, 10901003001

// ============================================================
// 竞价广告单个计划信息的查询  (getAdsCampaign)
// JD method: GET.ads-bidding.v0.ads-campaigns._adsCampaignId   HTTP: GET
// 竞价广告单个计划信息的查询
// ============================================================
export interface GetAdsCampaignRequest {
  campaignId: number;
  getAdsCampaignRequest?: {
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface GetAdsCampaignResponse {
  data?: {
    campaignId?: number;
    campaignType?: number;
    campaignTypeDesc?: string;
    businessType?: number;
    businessTypeDesc?: string;
    status?: number;
    statusDesc?: string;
    uniformSpeed?: number;
    uniformSpeedDesc?: string;
    campaignBudgetJdoDTO?: {
      unifiedBudget?: Record<string, unknown>;
      todayBudget?: Record<string, unknown>;
      dateRange?: string;
      increaseBudgetStatus?: number;
      increaseBudgetRadio?: number;
      increaseBudgetMaxCount?: number;
      increaseBudgetExceptROI?: Record<string, unknown>;
    };
    timeRangeJdoDTO?: {
      timeRangeType?: number;
      timeRangeTypeDesc?: string;
      weekDayTimeRange?: string[];
      weekEndTimeRange?: string[];
      timeRange?: string[];
      openAllDayFlag?: boolean;
      timeRangePriceCoef?: string;
    };
    paymentType?: number;
    paymentTypeDesc?: string;
    storeGroupInfoJdoDTO?: {
      biddingType?: number;
      biddingTypeDesc?: string;
      premiumCoef?: number;
      storeInfoDTOList?: {
        adGroupId?: number;
        fee?: Record<string, unknown>;
        unifiedBudget?: Record<string, unknown>;
        msStoreId?: string;
      }[];
    };
    startTime?: number;
    endTime?: number;
    createdTime?: number;
    modifiedTime?: number;
    name?: string;
    scenarioType?: number;
    scenarioTypeDesc?: string;
    orientJdoDTO?: {
      crowdId?: number;
      timeRangeCoefDTO?: {
        openAllDayFlag?: boolean;
        weekDayTimeRangePriceCoefDTOList?: {
          timeRangeType?: number;
          timeRangeTypeDesc?: string;
          timeRange?: string;
          priceCoef?: string;
        }[];
        weekEndTimeRangePriceCoefDTOList?: {
          timeRangeType?: number;
          timeRangeTypeDesc?: string;
          timeRange?: string;
          priceCoef?: string;
        }[];
      };
      deliveryDistanceDTOList?: {
        value?: string;
        price?: Record<string, unknown>;
      }[];
      categoryPreferenceDTOList?: {
        value?: string;
        price?: Record<string, unknown>;
      }[];
      perAvgPaymentDTOList?: {
        value?: string;
        price?: Record<string, unknown>;
      }[];
      searchTrafficDTOList?: {
        value?: string;
        price?: Record<string, unknown>;
      }[];
      customerTypeDTOList?: {
        value?: string;
        price?: Record<string, unknown>;
      }[];
      areaTypeDTOList?: {
        value?: string;
        price?: Record<string, unknown>;
      }[];
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10901009999, 10901001003, 10901001002, 10901002003, 10901002001, 10901003002, 10901002002, 10901003003, 10901001001, 10901002000, 10901003001

// ============================================================
// 获取计划列表  (listAdsCampaigns)
// JD method: listAdsCampaigns   HTTP: LISTADSCAMPAIGNS
// 获取计划列表,包含展点消数据
// ============================================================
export interface ListAdsCampaignsRequest {
  listAdsCampaignsRequest: {
    subScenarioType?: number;
    scenarioType?: number;
    pageSize?: number;
    paymentType?: number;
    obys?: string;
    campaignId?: number;
    nameLike?: string;
    page?: number;
    status?: number;
    pin: string;
    authType?: string;
    accountId?: number;
    requestFrom: string;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    josRemoteIp: string;
    appKey: string;
    startTime?: number;
    endTime?: number;
    dataMetricsFilter?: Record<string, unknown>;
    name?: string;
  };
}
export interface ListAdsCampaignsResponse {
  data?: {
    businessType?: number;
    businessTypeDesc?: string;
    campaignType?: number;
    campaignTypeDesc?: string;
    scenarioType?: number;
    scenarioTypeDesc?: string;
    subScenarioType?: number;
    subScenarioTypeDesc?: string;
    timeRangeType?: number;
    timeRangeTypeDesc?: string;
    paymentType?: number;
    paymentTypeDesc?: string;
    timeRange?: string;
    status?: number;
    statusDesc?: string;
    campaignId?: number;
    campaignName?: string;
    startTime?: number;
    endTime?: number;
    adGroupCnt?: number;
    pauseAdGroupCnt?: number;
    unifiedBudget?: Record<string, unknown>;
    totalOrderCVS?: Record<string, unknown>;
    roi?: Record<string, unknown>;
    totalOrderSumDeal?: Record<string, unknown>;
    realTotalOrderSumDeal?: Record<string, unknown>;
    orderIdCnt?: number;
    ctr?: Record<string, unknown>;
    impressions?: number;
    clicks?: number;
    cost?: Record<string, unknown>;
    cpm?: Record<string, unknown>;
    cpc?: Record<string, unknown>;
    directOrderCnt?: number;
    directOrderSum?: Record<string, unknown>;
    indirectOrderCnt?: number;
    indirectOrderSum?: Record<string, unknown>;
    totalOrderCnt?: Record<string, unknown>;
    totalOrderSum?: Record<string, unknown>;
    totalPresaleOrderCnt?: number;
    totalPresaleOrderSum?: Record<string, unknown>;
    directCartCnt?: number;
    indirectCartCnt?: number;
    totalCartCnt?: number;
    totalCartRate?: Record<string, unknown>;
    totalCartCost?: Record<string, unknown>;
    cpa?: Record<string, unknown>;
    totalOrderROI?: Record<string, unknown>;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
  paginationData?: {
    currentPage?: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
  };
}

// ============================================================
// 创建广告单元  (postAdsGroup)
// JD method: POST.ads-bidding.v0.ads-groups   HTTP: POST
// 向一个计划下创建一个单元时使用该接口（支持创建关键词计划、顶部店铺计划、腰带店铺计划、人群计划、常规活动计划）
// ============================================================
export interface PostAdsGroupRequest {
  postAdsGroupRequest: {
    campaignId: number;
    adsGroupDTO: {
      name: string;
      newAreaIds: Record<string, unknown>;
      deliveryTarget: number;
      adsGroupBiddingInfoDTO: {
        biddingType?: number;
        fee?: Record<string, unknown>;
        premiumCoef?: number;
        autoBiddingStatus?: number;
        orientationRangeType?: number;
      };
      shopId?: number;
      adDeviceType?: number;
      adOptimizeStatus?: number;
      keywordAutomatedStatus?: number;
      keywordAutomatedCoef?: number;
      url?: string;
      enable?: number;
      activityName?: string;
      activityTitle?: string;
      groupCrowdRefList?: {
        groupCrowdRefListItem?: {
          crowdId?: number;
          crowdPriceCoef?: number;
          crowdStatus?: number;
        };
      }[];
      adList?: {
        adListItem?: {
          adName?: string;
          creativeType?: number;
          skuId?: string;
          materialId?: number;
          skuDetailList?: {
            skuDetailListItem?: {
              skuId?: string;
              imgUrl?: string;
            };
          }[];
        };
      }[];
      commodityDeliveryList?: {
        commodityDeliveryListItem?: {
          commodityDeliveryMatchType?: number;
          skuId?: string;
          categoryId?: number;
          skuBrandId?: number;
          shopId?: number;
          commodityDeliveryMobilePrice?: Record<string, unknown>;
        };
      }[];
      keywordList?: {
        keywordListItem?: {
          keywordName?: string;
          keywordMobilePrice?: Record<string, unknown>;
          type?: number;
          searchPromoteRankEnable?: number;
          searchPromoteRankType?: number;
          searchPromoteRankCoef?: number;
          keyWordType?: number;
          reqType?: number;
        };
      }[];
      pospackageList?: {
        pospackageListItem?: {
          pospackageId?: number;
          pospackagePriceCoef?: number;
          pospackageStatus?: number;
        };
      }[];
    };
    siteId?: number;
    josApiName?: string;
    tenantCode?: string;
    requestFrom?: string;
    pin?: string;
    appKey?: string;
    josRemoteIp?: string;
  };
}
export interface PostAdsGroupResponse {
  data?: {
    adGroupId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10902001001, 10902001002, 10902002003, 10902003003, 10902002004, 10902009999, 10902002000, 10902003002, 10902003001

// ============================================================
// 批量删除单元  (batchDeleteAdsGroup)
// JD method: DELETE.ads-bidding.v0.ads-groups.batch   HTTP: DELETE
// 批量删除单元
// ============================================================
export interface BatchDeleteAdsGroupRequest {
  batchDeleteAdsGroupRequest: {
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    adsGroupIdList: Record<string, unknown>;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface BatchDeleteAdsGroupResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  adGroupIdList?: number[];
}
  // 错误码: 10902001001, 10902002002, 10902001002, 10902002003, 10902003003, 10902001003, 10902009999, 10902002000, 10902003002, 10902002001, 10902003001

// ============================================================
// 批量更新部分单元信息  (batchPatchAdsGroup)
// JD method: PATCH.ads-bidding.v0.ads-groups.batch   HTTP: PATCH
// 批量更新部分单元信息
1、更新单元预算（KA门店推广）
2、更新单元出价（KA门店推广仅支持更新出价值；秒送门店推广场景支持更新出价类型和出价值）
3、更新单元地域、状态、出价等（站内搜推单元）
// ============================================================
export interface BatchPatchAdsGroupRequest {
  batchPatchAdsGroupRequest: {
    adsGroupDTOList: {
      adsGroupDTOListItem?: {
        adsGroupBiddingInfoDTO?: {
          premiumCoef?: number;
          biddingType?: number;
          fee?: Record<string, unknown>;
          orientationRange?: number;
        };
        adsGroupBudgetDTO?: {
          unifiedBudget?: Record<string, unknown>;
        };
        adGroupId: number;
        newAreaIds?: Record<string, unknown>;
        deliveryTarget?: number;
        name?: string;
        status?: number;
      };
    };
    accountId?: number;
    siteId: number;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
    pin: string;
    appKey: string;
    josRemoteIp: string;
  };
}
export interface BatchPatchAdsGroupResponse {
  data?: {
    adGroupId?: number;
    message?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10902001001, 10902002002, 10902001002, 10902002003, 10902003003, 10902001003, 10902009999, 10902002000, 10902003002, 10902002001, 10902003001

// ============================================================
// 查询广告投放账户余额  (getAccountBalance)
// JD method: GET.ads-billing.v0.ads-accounts.self.ads-balances   HTTP: GET
// 查询广告投放账户余额，根据登录身份，查询京准通中的现金、红包、和返佣金的余额
// ============================================================
export interface GetAccountBalanceRequest {
  getAdsAccountAdsBalanceRequest?: {
    accountId?: number;
    pin: string;
    siteId: number;
    appKey: string;
    josRemoteIp: string;
    josApiName: string;
    tenantCode: string;
    authType?: string;
    requestFrom: string;
  };
}
export interface GetAccountBalanceResponse {
  data?: {
    cashBalanceAmount?: Record<string, unknown>;
    cashFreezeAmount?: Record<string, unknown>;
    cashTotalAmount?: Record<string, unknown>;
    awardBalanceAmount?: Record<string, unknown>;
    awardFreezeAmount?: Record<string, unknown>;
    awardTotalAmount?: Record<string, unknown>;
    commissionBalanceAmount?: Record<string, unknown>;
    commissionFreezeAmount?: Record<string, unknown>;
    commissionTotalAmount?: Record<string, unknown>;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10909011002, 10909011004, 10909011003, 10909011006	, 10909011009	, 10909011008	, 10909011005, 10909011007, 10909019999	

// ============================================================
// 查询当前登录账号的广告投放账户信息  (getAdsAccount)
// JD method: GET.ads-billing.v0.ads-accounts.self   HTTP: GET
// 在查询广告业务接口时，对于外卖单门店账户或者KA账户查看其绑定的某个门店账户，需要先查询当前接口，获取投放账户ID。然后使用此ID作为其他接口入参传递查询次账号的广告投放账号信息
// ============================================================
export interface GetAdsAccountRequest {
  getAdsAccountRequest?: {
    queryBusinessId: string;
    josRemoteIp: string;
    josApiName: string;
    tenantCode: string;
    pin: string;
    queryBusinessType: number;
    siteId: number;
    appKey: string;
    requestFrom: string;
  };
}
export interface GetAdsAccountResponse {
  data?: {
    accountId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10909001005, 10909001004, 10909001003, 10909001002, 10909011011, 10909011010, 10909009999, 10909001009, 10909001008, 10909001007, 10909001006