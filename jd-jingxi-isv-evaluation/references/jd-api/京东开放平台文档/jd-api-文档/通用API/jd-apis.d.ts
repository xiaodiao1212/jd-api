// ============================================================
// 京东开放平台 - 通用API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 8 个接口
// ============================================================
// ============================================================
// 获取京标四级地域信息  (listAreas)
// JD method: GET.sp-address.v0.areas   HTTP: GET
// 查询京东四级地域名称及id
// ============================================================
export interface ListAreasRequest {
  listAreasRequest: {
    level: number;
    parentId: number;
    venderId?: number;
  };
}
export interface ListAreasResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    id?: number;
    name?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11101001002, 11101001001

// ============================================================
// 查询服务市场订购记录  (listFwmarketPurchaseRecords)
// JD method: GET.open-service.v0.fwmarket-purchase-records   HTTP: GET
// 用于获取指定用户指定应用的订购记录信息，由服务市场服务商使用，查询其某些服务的历史订购记录
// ============================================================
export interface ListFwmarketPurchaseRecordsRequest {
  listFwmarketPurchaseRecordsRequest?: {
    requestType?: number;
    itemCode?: string;
    appKey?: string;
    pin?: string;
  };
}
export interface ListFwmarketPurchaseRecordsResponse {
  data?: {
    pin?: string;
    xidBuyer?: string;
    moduleFlag?: number;
    endDate?: number;
    itemCode?: string;
    versionNo?: number;
    appKey?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 11001001010, 11001001032, 11001001014, 11001001013, 11001001034, 11001002001

// ============================================================
// 查询服务市场订单  (listFwmarketOrders)
// JD method: GET.open-service.v0.fwmarket-orders   HTTP: GET
// 用于获取服务订单，由服务商使用，根据条件分页查询其对应服务的服务市场订单详情，返回订单列表
// ============================================================
export interface ListFwmarketOrdersRequest {
  listFwmarketOrdersRequest?: {
    transactionPriceLeast?: Record<string, unknown>;
    orderType?: number;
    accountRequestAccountType?: number;
    orderId?: number;
    endDate?: number;
    ownPin?: string;
    freeOrder?: boolean;
    pageSize: number;
    payType?: number;
    clientType?: number;
    erpOrderId?: number;
    sortBy?: string;
    thirdLevelCategory?: number;
    synFinishedTime?: number;
    tpOrderId?: number;
    adjustZeroOrder?: boolean;
    itemId?: number;
    sortOrder?: string;
    orderTradeType?: number;
    effectiveFlag?: number;
    firstLevelCategory?: number;
    endModifiedTime?: number;
    accountRequestLangTag?: string;
    beforeEndDate?: number;
    orderPurchaseType?: number;
    serviceCode: string;
    totalPrice?: Record<string, unknown>;
    settleStatus?: number;
    accountRequestAccountRole?: number;
    summationField?: string;
    forAudit?: number;
    accountRequestLoginPin?: string;
    billStatus?: number;
    erpOrderStatus?: number;
    refundPurchaseEndTime?: number;
    sortMode?: number;
    parentId?: number;
    createStartTime?: number;
    clientIp?: number;
    includeFields?: Record<string, unknown>;
    beforeStartDate?: number;
    secondLevelCategory?: number;
    serviceType?: number;
    itemCode?: string;
    uuid?: string;
    completeEndTime?: number;
    activityId?: number;
    pin?: string;
    mainPin?: string;
    startModifiedTime?: number;
    appId?: string;
    afterStartDate?: number;
    limit?: number;
    hasSubOrders?: number;
    skuId?: number;
    accountInfoAccountType?: number;
    nickName?: string;
    fwsId?: number;
    groupField?: string;
    orderCycle?: number;
    createEndTime?: number;
    outOrderId?: number;
    jdPrice?: Record<string, unknown>;
    page?: number;
    orderDate?: number;
    cursor?: string;
    advanceOrderId?: number;
    accountInfoBelongType?: number;
    discountPrice?: Record<string, unknown>;
    orderStatus?: number;
    orderNum?: number;
    mainSubSwitch?: boolean;
    deductionPrice?: Record<string, unknown>;
    countField?: string;
    afterEndDate?: number;
    accountRequestLoginCpin?: string;
    orderPaymentType?: number;
    scrollId?: string;
    effective?: boolean;
    childBuyer?: string;
    serviceId?: string;
    returnUrl?: number;
    orderColumn?: string;
    orderSource?: string;
    manualSettleFlag?: number;
    transactionPriceMax?: Record<string, unknown>;
    requestSource?: string;
    excludeFields?: Record<string, unknown>;
    completeStartTime?: number;
    virtualServiceId?: number;
    accountRequestBelongType?: number;
    accountInfoBusinessId?: string;
    accountInfoAccountExtension?: string;
    realpayPrice?: Record<string, unknown>;
    fwsPin: string;
    xidIsv?: string;
  };
}
export interface ListFwmarketOrdersResponse {
  data?: {
    serviceType?: number;
    invoiceApplyStatus?: number;
    orderType?: number;
    modifiedTime?: number;
    orderId?: number;
    endDate?: number;
    itemCode?: string;
    type?: string;
    uuid?: string;
    activityId?: number;
    itemName?: string;
    clientType?: number;
    limitedDiscountPrice?: Record<string, unknown>;
    articleType?: number;
    appId?: string;
    createdTime?: number;
    combinationType?: number;
    erpOrderId?: number;
    hasSubOrders?: number;
    totalRealpayPrice?: Record<string, unknown>;
    refundPrice?: Record<string, unknown>;
    skuId?: number;
    invoiceFlag?: number;
    fwsPin?: string;
    xidIsv?: string;
    directionalSalesPrice?: Record<string, unknown>;
    extensionInfo?: string;
    tpOrderId?: number;
    nickName?: string;
    fwsId?: number;
    orderNoteDTO?: {
      note?: string;
      orderId?: number;
      phone?: string;
      buyerName?: string;
    };
    extendInfo?: string;
    buyer?: string;
    xidBuyer?: string;
    itemId?: number;
    orderCycle?: number;
    outOrderId?: number;
    finishedTime?: number;
    orderTradeType?: number;
    jdPrice?: Record<string, unknown>;
    orderDate?: number;
    startDate?: number;
    cid?: number;
    status?: number;
    itemType?: number;
    flag?: number;
    advanceOrderId?: number;
    totalPrice?: Record<string, unknown>;
    serviceCode?: string;
    settleStatus?: number;
    discountPrice?: Record<string, unknown>;
    orderStatus?: number;
    orderNum?: number;
    totalDiscountPrice?: Record<string, unknown>;
    forAudit?: number;
    deductionPrice?: Record<string, unknown>;
    platform?: string;
    orderPaymentType?: number;
    couponTotalPrice?: Record<string, unknown>;
    couponDTOList?: {
      couponDTOListItem?: {
        manualSettleFlag?: number;
        couponType?: number;
        couponKind?: number;
        couponPrice?: Record<string, unknown>;
        couponId?: string;
      };
    };
    combinationName?: string;
    billStatus?: number;
    erpOrderStatus?: number;
    childBuyer?: string;
    commission?: string;
    returnUrl?: string;
    serviceId?: number;
    officialFlag?: boolean;
    orderSource?: string;
    manualSettleFlag?: number;
    appName?: string;
    combinationId?: number;
    discountWay?: number;
    evaluatedFlag?: number;
    businessOwnership?: string;
    serviceName?: string;
    parentId?: number;
    virtualServiceId?: number;
    clientIp?: string;
    erpChargeDTO?: {
      modifiedTime?: number;
      erpChargeItemDTO?: {
        implementPrice?: Record<string, unknown>;
        servicePriceString?: string;
        secondDevPriceString?: string;
        secondDevDescription?: string;
        itemCode?: string;
        serviceTotalPrice?: Record<string, unknown>;
        itemName?: string;
        otherPrice?: Record<string, unknown>;
        otherPriceDescription?: string;
        implementPriceString?: string;
        pageDisplayFlag?: boolean;
        id?: number;
        implementNum?: number;
        implementTotalPrice?: Record<string, unknown>;
        productPriceString?: string;
        secondDevPrice?: Record<string, unknown>;
        secondDevNum?: number;
        productPriceDescription?: string;
        implementPriceDescription?: string;
        serviceMonthNum?: number;
        servicePrice?: Record<string, unknown>;
        secondDevTotalPrice?: Record<string, unknown>;
        servicePriceDescription?: string;
        productPrice?: Record<string, unknown>;
        otherPriceString?: string;
      };
      firstPaymentStr?: string;
      serviceCode?: string;
      totalPrice?: Record<string, unknown>;
      promotionPrice?: Record<string, unknown>;
      description?: string;
      forAudit?: boolean;
      finalPaymentStr?: string;
      firstPayment?: Record<string, unknown>;
      finalPayment?: Record<string, unknown>;
      itemStatus?: number;
      createdTime?: number;
      confirmStatus?: number;
      id?: number;
      serviceId?: number;
      totalPriceStr?: string;
      confirmSecDevDate?: number;
      fwsPin?: string;
      defaultFlag?: boolean;
      fwsId?: number;
      buyer?: string;
      confirmServiceDate?: number;
      confirmFirstPaymentDate?: number;
      confirmFinalPaymentDate?: number;
      promotionSkuId?: number;
    };
    totalDeductionPrice?: Record<string, unknown>;
    realpayPrice?: Record<string, unknown>;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
  totalPage?: number;
  pageSize?: number;
  currentPage?: number;
  totalCount?: number;
}
  // 错误码: 11002001014, 11002001027, 11002001010, 11002001013, 11002001035, 11002002001

// ============================================================
// 获取凭证  (listCredentials)
// JD method: GET.open-security.v0.credentials   HTTP: GET
// 根据用户id获取当前app的凭证
// ============================================================
export interface ListCredentialsRequest {
  voucherRequestByJosToken?: {
    customerUserId?: number;
    appKey?: string;
    accessToken?: string;
    scopeSet?: {
      element?: string;
    };
  };
}
export interface ListCredentialsResponse {
  data?: {
    credential?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11502000004, 11502000003, 11502000002, 11502000001

// ============================================================
// 生成密钥  (postSecretKey)
// JD method: POST.open-security.v0.secret-keys   HTTP: POST
// 对宙斯上的接口加密传输字段，如用户需解密使用的，需要提前根据解密凭证获取密钥。

// ============================================================
export interface PostSecretKeyRequest {
  postSecretKeyRequest?: {
    sig?: string;
    tid?: string;
    ts?: number;
  };
}
export interface PostSecretKeyResponse {
  data?: {
    tid?: string;
    encServiceName?: string;
    serviceKeyList?: {
      service?: string;
      currentKeyVersion?: number;
      grantUsage?: string;
      keys?: {
        id?: string;
        keyString?: string;
        keyType?: string;
        keyExp?: number;
        keyEffective?: number;
        version?: number;
        keyStatus?: number;
        keyDigest?: string;
      }[];
    }[];
    keyCacheDisabled?: number;
    keyBackupDisabled?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11501000003, 11501000002, 11501000001

// ============================================================
// 更新虚拟号  (updateVirtualNumber)
// JD method: PATCH.open-security.v0.virtual-numbers._virtualNumber   HTTP: PATCH
// 更新虚拟号绑定的主叫号码组（号码组追加更新）
// ============================================================
export interface UpdateVirtualNumberRequest {
  virtualNumber: string;
  patchVirtualNumberRequest: {
    operateType: string;
    orderId: number;
    telG: string;
    venderId?: string;
  };
}
export interface UpdateVirtualNumberResponse {
  success?: boolean;
  data?: {
    orderId?: number;
    virtualNumber?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
  requestId?: string;
}
  // 错误码: 11503001003, 11503001004, 11503001001, 11503001012, 11503001002, 11503001007, 11503001008, 11503001005, 11503001006, 11503004001

// ============================================================
// 查询虚拟号  (queryVirtualNumber)
// JD method: GET.open-security.v0.virtual-numbers._virtualNumber   HTTP: GET
// 支持查询虚拟号已报备的主叫号码组，用于判断手机号是否已经报备到虚拟号主叫号码组
// ============================================================
export interface QueryVirtualNumberRequest {
  virtualNumber: string;
  getVirtualNumberRequest: {
    orderId: number;
    phoneNumbers: string;
    venderId?: string;
  };
}
export interface QueryVirtualNumberResponse {
  success?: boolean;
  data?: {
    orderId?: number;
    virtualNumber?: string;
    telG?: string;
  };
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
  requestId?: string;
}
  // 错误码: 11503001003, 11503001001, 11503001012, 11503001002, 11503001009, 11503001010, 11503001011, 11503004001

// ============================================================
// 红盾检测对外开放接口  (redLineDetect)
// JD method: PUT.open-security.v0.redline-detects.batch   HTTP: PUT
// 本接口承接内容中内容安全方面的识别，旨在识别涉黄涉政敏感词等红线类违规的精准识别，为下游提供红线违规识别
// ============================================================
export interface RedLineDetectRequest {
  request: {
    detectType: string;
    requestId: string;
    detectDTO: {
      textDetectDTO: {
        detectValue: string[];
        permissionCode: string;
        contextInfo?: {
          pkVersion?: string;
          pkId?: string;
          businessType?: number;
        };
      };
      audioDetectDTO: {
        detectValue: string;
        permissionCode: string;
      };
      videoDetectDTO: {
        detectValue: string;
        permissionCode: string;
      };
      imageDetectDTO: {
        detectValue: string[];
        contextInfo?: {
          pkVersion?: string;
          pkId?: string;
          businessType?: number;
        };
        permissionCode: string;
      };
    };
    pin?: string;
  };
}
export interface RedLineDetectResponse {
  data?: {
    redLineDetectResultDTO?: {
      imageDetectResultList?: {
        detectValue?: string;
        detectResult?: number;
        resultDetails?: {
          detectSense?: string;
          detectResult?: number;
          score?: number;
          lightThreshold?: number;
          heavyThreshold?: number;
          location?: Record<string, unknown>;
          identifyContent?: string;
          detectSenseId?: number;
        }[];
      }[];
      textDetectResultList?: {
        detectValue?: string;
        detectResult?: number;
        resultDetails?: {
          detectSense?: string;
          detectResult?: number;
          score?: number;
          lightThreshold?: number;
          heavyThreshold?: number;
          location?: Record<string, unknown>;
          identifyContent?: string;
          detectSenseId?: number;
        }[];
      }[];
      audioDetectResult?: {
        detectId?: string;
        detectValue?: string;
      };
      videoDetectResult?: {
        detectId?: string;
        detectValue?: string;
      };
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11504001001