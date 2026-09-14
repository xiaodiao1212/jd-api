// ============================================================
// 京东开放平台 - 订单API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 27 个接口
// ============================================================
// ============================================================
// 国补订单序列号上传  (postOrderSerialCode)
// JD method: POST.sp-order.v0.orders._orderId.serial-codes   HTTP: POST
// 国补订单序列号（SN码）校验并上传接口
// ============================================================
export interface PostOrderSerialCodeRequest {
  orderId: number;
  postOrderSerialCodeRequest: {
    orderSerialCode?: {
      venderId: number;
      skuId?: number;
      sceneType?: number;
      codeItemList: {
        type: string;
        value: string;
      }[];
    };
  };
}
export interface PostOrderSerialCodeResponse {
  data?: {
    orderId?: number;
    skuId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10201051005, 10201051006, 10201051001, 10201051003, 10201052004, 10201051002

// ============================================================
// 批量解密订单收件人信息  (listOrderOaidAddresses)
// JD method: GET.sp-order.v0.order-oaid-addresses   HTTP: GET
// POP、厂直用户，可通过调用该接口，对oaid进行解密，获取明文信息。
// ============================================================
export interface ListOrderOaidAddressesRequest {
  listOrderOaidAddressesRequest: {
    receiptType: string;
    sceneType: string;
    expiration: number;
    appName: string;
    dcryptOrderOaidList: string[];
    venderId?: number;
  };
}
export interface ListOrderOaidAddressesResponse {
  success?: boolean;
  data?: {
    orderId?: number;
    oaid?: string;
    customerName?: string;
    customerMobilePhone?: string;
    privacyProtection?: boolean;
    address?: string;
    customerPhone?: string;
    expiration?: number;
    customerMobilePhoneFuzzy?: string;
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10212001001, 10212002505, 10212002503, 10212002504, 10212002501, 10212002502

// ============================================================
// 合单条件校验  (batchPostMergeDeliveryGroup)
// JD method: POST.sp-order.v0.merge-delivery-groups   HTTP: POST
// 合单条件校验，对同一收货人相同收货地址在同一店铺内的待发货订单，进行合并运单发货。
// ============================================================
export interface BatchPostMergeDeliveryGroupRequest {
  batchPostMergeDeliveryGroupRequest: {
    venderId?: number;
    mergeDeliveryGroupList: {
      orderId?: number;
      oaid?: string;
    }[];
  };
}
export interface BatchPostMergeDeliveryGroupResponse {
  data?: {
    mergeOrderIdList?: number[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10211001001

// ============================================================
// 订单详情查询  (getOrder)
// JD method: GET.sp-order.v0.orders._orderId   HTTP: GET
// 本API提供多渠道订单详情查询功能，支持SOP/FBP/FCS/预售/厂直等多种订单类型。采用字段可选机制，调用方需明确指定需要返回的字段名。
// ============================================================
export interface GetOrderRequest {
  orderId: number;
  getOrderRequest: {
    venderId?: number;
    scopeSet?: {
      fieldName?: string;
    };
  };
}
export interface GetOrderResponse {
  data?: {
    venderId?: number;
    orderId?: number;
    parentOrderId?: number;
    rootOrderId?: number;
    orderSource?: string;
    orderSourceDesc?: string;
    orderType?: number;
    orderTypeDesc?: string;
    orderStatus?: string;
    orderStatusDesc?: string;
    createdTime?: number;
    modifiedTime?: number;
    outboundTime?: number;
    finishedTime?: number;
    buyerPin?: string;
    xidBuyer?: string;
    orderExt?: string;
    appointmentCalendar?: {
      opPickTime?: number;
      opDeliveredTime?: number;
    };
    buyerRemark?: {
      remark?: string;
    };
    consigneeInfo?: {
      fullName?: string;
      telephone?: string;
      mobile?: string;
      fullAddress?: string;
      provinceName?: string;
      cityName?: string;
      countyName?: string;
      townName?: string;
      provinceId?: number;
      cityId?: number;
      countyId?: number;
      townId?: number;
      oaid?: string;
    };
    outPlatformOrder?: {
      orderId?: string;
      parentOrderId?: string;
      shopId?: string;
      fullAddress?: string;
      name?: string;
      mobile?: string;
    };
    finalConsigneeInfo?: {
      fullName?: string;
      telephone?: string;
      mobile?: string;
      fullAddress?: string;
      provinceName?: string;
      cityName?: string;
      countyName?: string;
      townName?: string;
      provinceId?: number;
      cityId?: number;
      countyId?: number;
      townId?: number;
      oaid?: string;
    };
    globalInfo?: {
      customsCode?: string;
      customsDesc?: string;
      customsModel?: string;
      customsModelDesc?: string;
      declarationStatus?: string;
      declarationStatusDesc?: string;
    };
    invoiceInfo?: {
      invoiceType?: string;
      invoiceTypeDesc?: string;
      invoiceTitle?: string;
      invoiceContentId?: number;
      invoiceContentDesc?: string;
      invoiceCode?: string;
      invoiceConsigneeEmail?: string;
      invoiceConsigneePhone?: string;
      addressRegistered?: string;
      phoneRegistered?: string;
      depositBank?: string;
      bankAccount?: string;
      userAddress?: string;
      userName?: string;
      userPhone?: string;
      invoicePersonalName?: string;
      invoiceStatus?: number;
      invoiceStatusDesc?: string;
    };
    jdFulfillmentInfo?: {
      rdcId?: number;
      rdcDesc?: string;
      jdStoreId?: number;
    };
    physicalStore?: {
      storeId?: number;
      salesStoreId?: number;
      salesPin?: string;
    };
    paymentDetailList?: {
      paymentDetailListItem?: {
        skuUuid?: string;
        skuId?: number;
        skuType?: number;
        skuTypeDesc?: string;
        skuNum?: number;
        amountExpandList?: {
          amountExpandListItem?: {
            type?: number;
            typeName?: string;
            amount?: Record<string, unknown>;
            orderCostAmountList?: {
              orderCostAmountListItem?: {
                bearer?: number;
                bearRate?: Record<string, unknown>;
                bearAmount?: Record<string, unknown>;
              };
            };
            activityId?: string;
            activityName?: string;
          };
        };
      };
    };
    paymentInfo?: {
      paymentType?: number;
      paymentTypeDesc?: string;
      paymentConfirmTime?: number;
      shouldPayAmount?: Record<string, unknown>;
      actualPayAmount?: Record<string, unknown>;
      payDiscountAmount?: Record<string, unknown>;
      freightFee?: Record<string, unknown>;
      serviceFeeInfo?: {
        serviceFee?: Record<string, unknown>;
      };
      taxInfo?: {
        taxFee?: Record<string, unknown>;
      };
    };
    promiseCalendarInfo?: {
      promisePickTime?: number;
    };
    sellerTradePriceInfo?: {
      totalOriginalPriceAmount?: Record<string, unknown>;
      totalSellerDiscountAmount?: Record<string, unknown>;
      totalSellerReceivableAmount?: Record<string, unknown>;
    };
    skuItemInfoList?: {
      skuItemInfoListItem?: {
        skuId?: number;
        outerSkuId?: string;
        skuUuid?: string;
        skuName?: string;
        productId?: number;
        thirdCategoryId?: number;
        skuType?: number;
        num?: number;
        jdPrice?: Record<string, unknown>;
        giftPoint?: number;
        productNo?: string;
        storeId?: number;
        skuSpec?: string;
        skuImg?: string;
        giftRefUuid?: string;
        itemExt?: string;
        afsInfoList?: {
          afsInfoListItem?: {
            afsOrderId?: number;
            afsOrderStatus?: number;
            afsOrderStatusDesc?: string;
            refundStatus?: number;
            refundStatusDesc?: string;
          };
        };
        serviceInfoList?: {
          serviceInfoListItem?: {
            serviceId?: number;
            serviceName?: string;
          };
        };
      };
    };
    stepPaymentInfo?: {
      stepOrderStatus?: number;
      subStepOrderStatus?: number;
      presaleId?: number;
      presalePrice?: Record<string, unknown>;
      payBargainPlan?: Record<string, unknown>;
      payBargainReal?: Record<string, unknown>;
      payBalancePlan?: Record<string, unknown>;
      payBalanceReal?: Record<string, unknown>;
      amountDeposit?: Record<string, unknown>;
      bargainTime?: number;
      balanceTime?: number;
      balanceStartTime?: number;
      balanceEndTime?: number;
      presaleType?: number;
      discountType?: number;
    };
    transportInfo?: {
      deliveryType?: number;
      deliveryTypeDesc?: string;
      logisticsId?: string;
      waybillCode?: string;
      partialShipmentList?: {
        partialShipmentListItem?: {
          shipmentId?: number;
          logisticsId?: string;
          waybillCode?: string;
          packageNum?: number;
          shipmentTime?: number;
          shipmentModifyTime?: number;
          skuList?: {
            skuListItem?: {
              skuUuid?: string;
              skuId?: number;
              num?: number;
              virtualGoodsFulfilmentList?: {
                virtualGoodsFulfilmentListItem?: {
                  goodsType?: string;
                  cardInfoList?: {
                    cardInfoListItem?: {
                      cardNumber?: string;
                      cardPassword?: string;
                    };
                  };
                  activateContextList?: {
                    element?: string;
                  };
                  otherList?: {
                    element?: string;
                  };
                };
              };
            };
          };
        };
      };
    };
    venderRemarkInfo?: {
      flagId?: number;
      flagDesc?: string;
      remark?: string;
      createdTime?: number;
      modifiedTime?: number;
    };
    nonStandardInfo?: {
      agreeProjectId?: string;
      storeId?: string;
      salesId?: string;
    };
    orderFlag?: {
      preSaleOrder?: boolean;
      popOrder?: boolean;
      returnOrder?: boolean;
      indexOrder?: boolean;
      zpjdOrder?: boolean;
      partialShipment?: boolean;
      globalOrder?: boolean;
      eclpOrder?: boolean;
      clpsOrder?: boolean;
      consolidatorOrder?: boolean;
      xinJiangConsolidatorOrder?: boolean;
      jdShipment?: boolean;
      tuiHuoWuYou?: boolean;
      tryBeforePayLater?: boolean;
      homeDelivery?: string;
      flagExtMap?: string;
    };
    socializedStoreInfo?: {
      storeId?: string;
      storeName?: string;
      storePhone?: string;
      storeAddress?: string;
    };
    venderStoreInfo?: {
      venderStoreId?: number;
      venderStoreName?: string;
    };
    tradeVenderInfo?: {
      tradeVenderId?: number;
      venderName?: string;
      shopId?: number;
      shopName?: string;
      tradeOrderId?: number;
    };
    specialStatusReasonInfo?: {
      reason?: string;
      suggestion?: string;
      cancelType?: number;
      cancelTypeDesc?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10201001018, 10201001001, 10201001017

// ============================================================
// 订单列表查询  (listOrders)
// JD method: GET.sp-order.v0.orders   HTTP: GET
// 本API提供多渠道订单列表查询功能，支持SOP/FBP/FCS/预售/厂直等多种订单类型。采用字段可选机制，调用方需明确指定需要返回的字段名。
// ============================================================
export interface ListOrdersRequest {
  listOrdersRequest: {
    orderType?: number;
    bizType?: number;
    startTime?: number;
    endTime?: number;
    orderStatus: string;
    buyerPin?: string;
    xidBuyer?: string;
    venderId?: number;
    page: number;
    pageSize: number;
    sortBy: string;
    sortOrder: string;
    scopeSet?: {
      fieldName?: string;
    };
  };
}
export interface ListOrdersResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    venderId?: number;
    orderId?: number;
    parentOrderId?: number;
    rootOrderId?: number;
    orderSource?: string;
    orderSourceDesc?: string;
    orderType?: number;
    orderTypeDesc?: string;
    orderStatus?: string;
    orderStatusDesc?: string;
    createdTime?: number;
    modifiedTime?: number;
    outboundTime?: number;
    finishedTime?: number;
    buyerPin?: string;
    xidBuyer?: string;
    orderExt?: string;
    appointmentCalendar?: {
      opPickTime?: number;
      opDeliveredTime?: number;
    };
    buyerRemark?: {
      remark?: string;
    };
    consigneeInfo?: {
      fullName?: string;
      telephone?: string;
      mobile?: string;
      fullAddress?: string;
      provinceName?: string;
      cityName?: string;
      countyName?: string;
      townName?: string;
      provinceId?: number;
      cityId?: number;
      countyId?: number;
      townId?: number;
      oaid?: string;
    };
    outPlatformOrder?: {
      orderId?: string;
      parentOrderId?: string;
      shopId?: string;
      fullAddress?: string;
      name?: string;
      mobile?: string;
    };
    finalConsigneeInfo?: {
      fullName?: string;
      telephone?: string;
      mobile?: string;
      fullAddress?: string;
      provinceName?: string;
      cityName?: string;
      countyName?: string;
      townName?: string;
      provinceId?: number;
      cityId?: number;
      countyId?: number;
      townId?: number;
      oaid?: string;
    };
    globalInfo?: {
      customsCode?: string;
      customsDesc?: string;
      customsModel?: string;
      customsModelDesc?: string;
      declarationStatus?: string;
      declarationStatusDesc?: string;
    };
    invoiceInfo?: {
      invoiceType?: string;
      invoiceTypeDesc?: string;
      invoiceTitle?: string;
      invoiceContentId?: number;
      invoiceContentDesc?: string;
      invoiceCode?: string;
      invoiceConsigneeEmail?: string;
      invoiceConsigneePhone?: string;
      addressRegistered?: string;
      phoneRegistered?: string;
      depositBank?: string;
      bankAccount?: string;
      userAddress?: string;
      userName?: string;
      userPhone?: string;
      invoicePersonalName?: string;
      invoiceStatus?: number;
      invoiceStatusDesc?: string;
    };
    jdFulfillmentInfo?: {
      rdcId?: number;
      rdcDesc?: string;
      jdStoreId?: number;
    };
    physicalStore?: {
      storeId?: number;
      salesStoreId?: number;
      salesPin?: string;
    };
    paymentInfo?: {
      paymentType?: number;
      paymentTypeDesc?: string;
      paymentConfirmTime?: number;
      shouldPayAmount?: Record<string, unknown>;
      actualPayAmount?: Record<string, unknown>;
      payDiscountAmount?: Record<string, unknown>;
      freightFee?: Record<string, unknown>;
      serviceFeeInfo?: {
        serviceFee?: Record<string, unknown>;
      };
      taxInfo?: {
        taxFee?: Record<string, unknown>;
      };
    };
    promiseCalendarInfo?: {
      promisePickTime?: number;
    };
    sellerTradePriceInfo?: {
      totalOriginalPriceAmount?: Record<string, unknown>;
      totalSellerDiscountAmount?: Record<string, unknown>;
      totalSellerReceivableAmount?: Record<string, unknown>;
    };
    skuItemInfoList?: {
      skuItemInfoListItem?: {
        skuId?: number;
        outerSkuId?: string;
        skuUuid?: string;
        skuName?: string;
        productId?: number;
        thirdCategoryId?: number;
        skuType?: number;
        num?: number;
        jdPrice?: Record<string, unknown>;
        giftPoint?: number;
        productNo?: string;
        storeId?: number;
        skuSpec?: string;
        skuImg?: string;
        giftRefUuid?: string;
        itemExt?: string;
        afsInfoList?: {
          afsInfoListItem?: {
            afsOrderId?: number;
            afsOrderStatus?: number;
            afsOrderStatusDesc?: string;
            refundStatus?: number;
            refundStatusDesc?: string;
          };
        };
        serviceInfoList?: {
          serviceInfoListItem?: {
            serviceId?: number;
            serviceName?: string;
          };
        };
      };
    };
    stepPaymentInfo?: {
      stepOrderStatus?: number;
      subStepOrderStatus?: number;
      presaleId?: number;
      presalePrice?: Record<string, unknown>;
      payBargainPlan?: Record<string, unknown>;
      payBargainReal?: Record<string, unknown>;
      payBalancePlan?: Record<string, unknown>;
      payBalanceReal?: Record<string, unknown>;
      amountDeposit?: Record<string, unknown>;
      bargainTime?: number;
      balanceTime?: number;
    };
    transportInfo?: {
      deliveryType?: number;
      deliveryTypeDesc?: string;
      logisticsId?: string;
      waybillCode?: string;
      partialShipmentList?: {
        partialShipmentListItem?: {
          shipmentId?: number;
          logisticsId?: string;
          waybillCode?: string;
          packageNum?: number;
          shipmentTime?: number;
          shipmentModifyTime?: number;
          skuList?: {
            skuListItem?: {
              skuUuid?: string;
              skuId?: number;
              num?: number;
              virtualGoodsFulfilmentList?: {
                virtualGoodsFulfilmentListItem?: {
                  goodsType?: string;
                  cardInfoList?: {
                    cardInfoListItem?: {
                      cardNumber?: string;
                      cardPassword?: string;
                    };
                  };
                  activateContextList?: {
                    element?: string;
                  };
                  otherList?: {
                    element?: string;
                  };
                };
              };
            };
          };
        };
      };
    };
    venderRemarkInfo?: {
      flagId?: number;
      flagDesc?: string;
      remark?: string;
      createdTime?: number;
      modifiedTime?: number;
    };
    nonStandardInfo?: {
      agreeProjectId?: string;
      storeId?: string;
      salesId?: string;
    };
    orderFlag?: {
      preSaleOrder?: boolean;
      popOrder?: boolean;
      returnOrder?: boolean;
      indexOrder?: boolean;
      zpjdOrder?: boolean;
      partialShipment?: boolean;
      globalOrder?: boolean;
      eclpOrder?: boolean;
      clpsOrder?: boolean;
      consolidatorOrder?: boolean;
      xinJiangConsolidatorOrder?: boolean;
      jdShipment?: boolean;
      tuiHuoWuYou?: boolean;
      tryBeforePayLater?: boolean;
      homeDelivery?: string;
      flagExtMap?: string;
    };
    socializedStoreInfo?: {
      storeId?: string;
      storeName?: string;
      storePhone?: string;
      storeAddress?: string;
    };
    venderStoreInfo?: {
      venderStoreId?: number;
      venderStoreName?: string;
    };
    tradeVenderInfo?: {
      tradeVenderId?: number;
      venderName?: string;
      shopId?: number;
      shopName?: string;
      tradeOrderId?: number;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10201001003, 10201001004, 10201001012, 10201001002, 10201001010, 10201001011, 10201001009, 10201001007, 10201001008, 10201001005, 10201001006, 10201001017

// ============================================================
// 获取全量承运商  (listCarriers)
// JD method: GET.sp-order.v0.carriers   HTTP: GET
// 获得在京东Alpha平台签约并且状态正常的所有承运商列表
// ============================================================
export interface ListCarriersRequest {
  listCarriersRequest?: {
    venderId?: number;
    scopeSet?: {
      element?: string;
    };
  };
}
export interface ListCarriersResponse {
  data?: {
    id?: number;
    providerCode?: string;
    providerName?: string;
    providerType?: number;
    operationType?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10203003001, 10203001001, 10203009999

// ============================================================
// 获取签约网点信息  (listContractCarrierOutlets)
// JD method: GET.sp-order.v0.contract-carrier-outlets   HTTP: GET
// 获取签约网点信息
// ============================================================
export interface ListContractCarrierOutletsRequest {
  request?: {
    pin?: string;
    venderId?: number;
    scopeSet?: {
      element?: string;
    };
  };
}
export interface ListContractCarrierOutletsResponse {
  data?: {
    providerId?: number;
    providerCode?: string;
    providerName?: string;
    providerType?: number;
    branchCode?: string;
    branchName?: string;
    operationType?: number;
    settlementCode?: string;
    cashOnDelivery?: boolean;
    availableWaybillCount?: number;
    address?: {
      provinceId?: number;
      provinceName?: string;
      cityId?: number;
      cityName?: string;
      countyId?: number;
      countyName?: string;
      townId?: number;
      townName?: string;
      address?: string;
    };
    valueAddedServices?: {
      serviceCode?: string;
      serviceName?: string;
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10204001001, 10204009999, 10204003001

// ============================================================
// 下运单前置校验  (postWaybillValidation)
// JD method: POST.sp-order.v0.waybills.validations   HTTP: POST
// 下运单前置校验，校验地址是否可达。
// ============================================================
export interface PostWaybillValidationRequest {
  request?: {
    waybillValidationDTO: {
      venderId?: number;
      providerCode: string;
      settlementCode?: string;
      fromAddress?: {
        address?: string;
        provinceId?: number;
        provinceName?: string;
        cityId?: number;
        cityName?: string;
        countyId?: number;
        countyName?: string;
        townId?: number;
        townName?: string;
      };
      toAddress: {
        address?: string;
        provinceId?: number;
        provinceName?: string;
        cityId?: number;
        cityName?: string;
        countyId?: number;
        countyName?: string;
        townId?: number;
        townName?: string;
      };
    };
  };
}
export interface PostWaybillValidationResponse {
  success?: boolean;
  data?: {
    statusMessage?: string;
    statusCode?: number;
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码:  10205009999, 10205003001, 10205001001

// ============================================================
// 查询运单大头笔信息  (listSortingCodes)
// JD method: GET.sp-order.v0.sorting-codes   HTTP: GET
// 根据运单号，查询运单大头笔信息
// ============================================================
export interface ListSortingCodesRequest {
  request: {
    pin: string;
    providerCode: string;
    waybillCode: string;
  };
}
export interface ListSortingCodesResponse {
  success?: boolean;
  data?: {
    waybillCode?: string;
    sortingCodeName?: string;
    sortingCodeId?: string;
    gatherCenterName?: string;
    gatherCenterCode?: string;
    toBranchName?: string;
    toBranchCode?: string;
    fromBranchName?: string;
    fromBranchCode?: string;
    secondSectionCode?: string;
    thirdSectionCode?: string;
    toTabletrolleyCode?: string;
    fromTabletrolleyCode?: string;
    toCrossCode?: string;
    fromCrossCode?: string;
    deliveryZone?: string;
    orderSign?: string;
    packageNo?: string;
    sfRoutingTag?: {
      qrCode?: string;
      codingMapping?: string;
      deliveryTimeCode?: string;
    };
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10213001001, 10213009999, 10213003001

// ============================================================
// 更新运单  (patchWaybill)
// JD method: PATCH.sp-order.v0.waybills._waybillCode   HTTP: PATCH
// 京东无界电子面单运单状态更新接口，提供运单取消功能。
// ============================================================
export interface PatchWaybillRequest {
  waybillCode: string;
  request: {
    pin: string;
    appKey: string;
    venderId: number;
    sceneType: number;
    cancelReason?: string;
    waybillDTO: {
      providerCode: string;
      waybillCount?: number;
    };
  };
}
export interface PatchWaybillResponse {
  data?: {
    waybillCode?: string;
    providerCode?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10206009999, 10206003001, 10206002501, 10206002506, 10206002507, 10206001001

// ============================================================
// 获取打印模板列表  (listPrintTemplates)
// JD method: GET.sp-order.v0.print-templates   HTTP: GET
// 通过接口可以获取京东官方标准面单模板和用户创建的自定义模板
// ============================================================
export interface ListPrintTemplatesRequest {
  request: {
    appKey?: string;
    pin?: string;
    providerCode: string;
    templateType?: number;
  };
}
export interface ListPrintTemplatesResponse {
  success?: boolean;
  data?: {
    standardTemplateList?: {
      providerCode?: string;
      templateList?: {
        templateCode?: string;
        templateName?: string;
        templateUrl?: string;
      }[];
    }[];
    userTemplateList?: {
      customAreaList?: {
        providerCode?: string;
        templateList?: {
          customAreaCode?: string;
          customAreaName?: string;
          customAreaUrl?: string;
          standardTemplateCode?: string;
          standardTemplateName?: string;
          standardTemplateUrl?: string;
        }[];
      }[];
      customTemplateList?: {
        type?: string;
        templateList?: {
          customTemplateCode?: string;
          customTemplateName?: string;
          customTemplateUrl?: string;
        }[];
      }[];
    };
    isvTemplateList?: {
      customAreaList?: {
        providerCode?: string;
        templateList?: {
          standardTemplateCode?: string;
          standardTemplateName?: string;
          standardTemplateUrl?: string;
          customAreaCode?: string;
          customAreaName?: string;
          customAreaUrl?: string;
        }[];
      }[];
      customTemplateList?: {
        type?: string;
        templates?: {
          customTemplateCode?: string;
          customTemplateName?: string;
          customTemplateUrl?: string;
        }[];
      }[];
    };
    devUserTemplateList?: {
      customAreaList?: {
        providerCode?: string;
        templateList?: {
          standardTemplateCode?: string;
          standardTemplateName?: string;
          standardTemplateUrl?: string;
          customAreaCode?: string;
          customAreaName?: string;
          customAreaUrl?: string;
        }[];
      }[];
      customTemplateList?: {
        type?: string;
        templateList?: {
          customTemplateCode?: string;
          customTemplateName?: string;
          customTemplateUrl?: string;
        }[];
      }[];
    };
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10208001001, 10208009999, 10208003001

// ============================================================
// 获取运单号  (postWaybill)
// JD method: POST.sp-order.v0.waybills   HTTP: POST
// 京东无界电子面单创建运单接口，支持POP、厂直订单，支持承运商列表：https://joyspace.jd.com/pages/kWMtdT1tap1Y4sMd4BeM。
// ============================================================
export interface PostWaybillRequest {
  request: {
    pin?: string;
    venderId?: number;
    appKey?: string;
    waybillDTO: {
      providerCode?: string;
      settlementCode?: string;
      branchCode?: string;
      expressType?: string;
      waybillCount: number;
      childMotherOrder?: boolean;
      needGuarantee: boolean;
      guaranteeMoney: Record<string, unknown>;
      remark?: string;
      collectRemark?: string;
      receiveTimeType: number;
      docall?: number;
      shouldPayMoney?: Record<string, unknown>;
      expressPayMethod?: string;
      payType: number;
      orderType?: number;
      salePlatform: string;
      venderOrderNo: string;
      platformOrderNo?: string;
      customBusinessNo?: string;
      orderFulfillmentMode?: number;
      outboundStoreCode?: string;
      multiPackageMode?: number;
      shipmentOrigin?: number;
      goodsName: string;
      weight: Record<string, unknown>;
      volume: Record<string, unknown>;
      expectedFulfillmentProviderCode?: string;
      goodsList?: {
        goodsListItem?: {
          name?: string;
          quantity?: number;
          price?: Record<string, unknown>;
          weight?: Record<string, unknown>;
          volume?: Record<string, unknown>;
        };
      };
      serviceList?: {
        serviceListItem?: {
          name?: string;
          value?: string;
          attributeList?: {
            attributeListItem?: {
              code?: string;
              name?: string;
              value?: string;
            };
          };
          productCodeList?: {
            productCode?: string;
          };
        };
      };
      productList?: {
        productListItem?: {
          productCode?: string;
          productName?: string;
          productAttributes?: {
            productAttributesItem?: {
              code?: string;
              name?: string;
              value?: string;
            };
          };
        };
      };
      fromAddress: {
        address: string;
        provinceId?: number;
        provinceName?: string;
        cityId?: number;
        cityName?: string;
        countyId?: number;
        countyName?: string;
        townId?: number;
        townName?: string;
        contact: string;
        phone: string;
        mobile: string;
      };
      toAddress: {
        address?: string;
        provinceId?: number;
        provinceName?: string;
        cityId?: number;
        cityName?: string;
        countyId?: number;
        countyName?: string;
        townId?: number;
        townName?: string;
        contact?: string;
        phone?: string;
        mobile?: string;
        oaid?: string;
      };
      waybillCodeTypeInfoList?: {
        waybillCodeTypeInfoListItem?: {
          waybillCode?: string;
          associationType?: number;
        };
      };
      bondedInfo?: {
        customsCode?: string;
      };
    };
  };
}
export interface PostWaybillResponse {
  success?: boolean;
  platformOrderNo?: string;
  data?: {
    waybillCode?: string;
    waybillPackageNoList?: {
      waybillPackageNoListItem?: {
        serialNumber?: number;
        packageNo?: string;
      };
    };
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10206009999, 10206003001, 10206002508, 10206002501, 10206002509, 10206001001

// ============================================================
// 批量获取京配明文面单数据  (batchPostPlaintextWaybillPrintData)
// JD method: POST.sp-order.v0.waybill-plaintext-datas.batch   HTTP: POST
// 批量获取京东物流明文面单数据接口，支持下单后获取明文面单数据，建议下单后等待3秒再调用本接口。
// ============================================================
export interface BatchPostPlaintextWaybillPrintDataRequest {
  param1: {
    pin?: string;
    providerCode: string;
    parameters: {
      value: string;
    };
    waybillPrintDataList: {
      jdWaybillCode: string;
    };
  };
}
export interface BatchPostPlaintextWaybillPrintDataResponse {
  data?: {
    waybillCode?: string;
    jdShipmentPrintDataDTO?: {
      jdInfo?: string;
      transportType?: string;
      packageCode?: string;
      packageCodeSuffix?: string;
      waybillCode?: string;
      waybillCodeLast?: string;
      waybillCodeFirst?: string;
      specialMarks?: {
        param?: string;
      };
      sourceSortCenterName?: string;
      sourceCrossCode?: string;
      targetSortCenterName?: string;
      targetCrossCode?: string;
      targetTabletrolleyCode?: string;
      targetSiteId?: string;
      qrcodeUrl?: string;
      examineFlag?: string;
      receiverName?: string;
      receiverMobile?: string;
      receiverTel?: string;
      receiverAddress?: string;
      senderName?: string;
      senderMobile?: string;
      senderTel?: string;
      senderAddress?: string;
      sourceTabletrolleyCode?: string;
      roadCode?: string;
      aoiCode?: string;
      preSortSiteName?: string;
      qrHint?: string;
      freshType?: string;
      transportMode?: string;
      addedServicesList?: {
        param?: string;
      };
      waterMark?: string;
      settleType?: string;
      ka?: string;
      routerNode1?: string;
      routerNode2?: string;
      routerNode3?: string;
      routerNode4?: string;
      routerNode5?: string;
      routerNode6?: string;
      routerNode7?: string;
      routerNode8?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10209009999, 10214002501, 10209003001, 10214001001

// ============================================================
// 获取运单打印数据  (batchPostWaybillPrintData)
// JD method: POST.sp-order.v0.waybill-print-datas.batch   HTTP: POST
// 使用该接口可获取京东物流（京东快递、京东快运、京东大件）、众邮、德邦、跨越、顺丰、三通一达等物流服务商运单对应的密文面单信息。
// ============================================================
export interface BatchPostWaybillPrintDataRequest {
  request: {
    pin: string;
    appKey: string;
    providerCode: string;
    requestId: string;
    waybillPrintDataList: {
      waybillPrintDataListItem?: {
        popFlag: number;
        orderId?: number;
        waybillCode?: string;
        jdWaybillCode?: string;
        jdPackageCode?: string;
      };
    };
    parameters: {
      key: string;
      value: string;
    };
  };
}
export interface BatchPostWaybillPrintDataResponse {
  success?: boolean;
  requestId?: string;
  data?: {
    dataItem?: {
      waybillCode?: string;
      packageCode?: string;
      perPrintData?: string;
    };
  };
  errorList?: {
    errorListItem?: {
      code?: string;
      details?: string;
      message?: string;
    };
  };
}
  // 错误码: 10209009999, 10209003001, 10209001001, 10209001002, 10209002502, 10209002501, 10209002504, 10209002503

// ============================================================
// 获取面单PDF或蓝牙打印指令  (batchPostWaybillPrintCommand)
// JD method: POST.sp-order.v0.waybill-print-commands.batch   HTTP: POST
// ISV或商家使用京东物流进行配送时，可通过本接口获取面单PDF或蓝牙打印指令。
// ============================================================
export interface BatchPostWaybillPrintCommandRequest {
  request: {
    pin: string;
    appKey: string;
    customerCode: string;
    templateCode: string;
    operater: string;
    taskId: string;
    outputConfigList: {
      outputConfigListItem?: {
        dataFormat: number;
        outputType: number;
        fileFormat: number;
      };
    };
    waybillPrintCommandList: {
      waybillPrintCommandListItem?: {
        orderId: number;
        providerCode?: string;
        billCodeValue?: string;
        billCodeType?: string;
        sceneType?: number;
      };
    };
  };
}
export interface BatchPostWaybillPrintCommandResponse {
  success?: boolean;
  data?: {
    dataItem?: {
      dataFormat?: number;
      fileFormat?: number;
      url?: string;
      base64?: string;
      successfulOrderIdList?: {
        element?: string;
      };
      failedOrderIdList?: {
        element?: string;
      };
    };
  };
  errorList?: {
    errorListItem?: {
      code?: string;
      details?: string;
      message?: string;
    };
  };
}
  // 错误码: 10210003001, 10210001001, 10210002501, 10210002502, 10210009999, 10210002505, 10210002503, 10210002504

// ============================================================
// 订单发货信息回传  (postOrderShipment)
// JD method: POST.sp-order.v0.orders._orderId.shipments   HTTP: POST
// 本接口适用于SOP类型订单，厂直类型订单的出库。SOP支持整单出库，分批次出库，整单出库补发，虚拟商品出库。厂直订单支持整单出库，和整单出库补发。
// ============================================================
export interface PostOrderShipmentRequest {
  orderId: number;
  postOrderShipmentRequest?: {
    orderShipmentDTO?: {
      venderId?: number;
      shipmentType?: number;
      packageInfoList?: {
        companyId?: string;
        waybillCode?: string;
        selfDeliveryFacetDTO?: {
          selfWaybillCode?: string;
          selfCompanyPhone?: string;
          selfCompanyName?: string;
          selfDelivererName?: string;
          selfDelivererPhone?: string;
        };
        outboundGoodsFacetDTOList?: {
          virtualGoodsFacetDTOList?: {
            cardParamList?: {
              cardPassword?: string;
              cardNumber?: string;
            }[];
            activateList?: string[];
            others?: string[];
            goodsType?: string;
          }[];
          skuUuid?: string;
          skuId?: number;
          skuNum?: number;
        }[];
      }[];
      pin?: string;
      mergeShipmentFlag?: number;
      vcSource?: string;
      deliveryAddressId?: number;
    };
  };
}
export interface PostOrderShipmentResponse {
  data?: {
    venderId?: number;
    orderId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10202011005, 10202011004, 10202011003, 10202011009, 10202011002, 10202011001, 10202011010

// ============================================================
// 更新发货物流信息  (putOrderShipment)
// JD method: PUT.sp-order.v0.orders._orderId.shipments   HTTP: PUT
// 本接口适用于SOP类型订单，厂直类型订单的物流信息修改。sop支持整单出库，分批次出库的修改。厂直订单仅支持整单出库的修改
// ============================================================
export interface PutOrderShipmentRequest {
  orderId: number;
  putOrderShipmentRequest?: {
    orderShipmentDTO?: {
      venderId?: number;
      shipmentType: number;
      packageInfoList?: {
        shipmentId?: number;
        companyId: string;
        waybillCode?: string;
        outboundGoodsFacetDTOList: {
          skuUuid?: string;
          skuId?: number;
          skuNum?: number;
        }[];
        companyScope?: number;
      }[];
      pin?: string;
    };
  };
}
export interface PutOrderShipmentResponse {
  data?: {
    venderId?: number;
    orderId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10202011006, 1020010002, 10202011008, 10202011007

// ============================================================
// 物流轨迹查询  (listWaybillTraces)
// JD method: GET.sp-order.v0.waybill-traces   HTTP: GET
// 物流轨迹查询，根据订单号或运单号，查询物流轨迹。
// ============================================================
export interface ListWaybillTracesRequest {
  param1: {
    pin: string;
    venderId: number;
    providerCode?: string;
    orderId?: number;
    waybillCode?: string;
  };
}
export interface ListWaybillTracesResponse {
  data?: {
    providerId?: number;
    providerName?: string;
    waybillCode?: string;
    traceDataList?: {
      groupType?: string;
      content?: string;
      msgTime?: number;
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10207001001

// ============================================================
// 订单拆分  (postOrderChildOrder)
// JD method: POST.sp-order.v0.orders._orderId.child-orders   HTTP: POST
// 商家自主拆分订单接口，商品的出仓不同、部分商品没有库存，通过订单拆分优先处理可生产的订单，支持POP、厂直订单。
// ============================================================
export interface PostOrderChildOrderRequest {
  orderId: number;
  postOrderChildOrderRequest: {
    orderChildOrder: {
      reason?: string;
      venderId: number;
      groupList: {
        groupId: number;
        skuList: {
          skuId: number;
          num: number;
          skuUuid?: string;
        }[];
      }[];
    };
  };
}
export interface PostOrderChildOrderResponse {
  data?: {
    parentOrderId?: number;
    groupList?: {
      groupId?: number;
      orderId?: number;
    }[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10201031003, 10201031002, 10201031005, 10201031004, 10201031001

// ============================================================
// 修改订单收货地址  (putOrderConsignee)
// JD method: PUT.sp-order.v0.orders._orderId.consignees   HTTP: PUT
// 修改订单收货地址，仅可修改SOP类型，且状态为等待出库的有效订单。
// ============================================================
export interface PutOrderConsigneeRequest {
  orderId: number;
  putOrderConsigneeRequest?: {
    orderConsigneeDTO?: {
      venderId?: number;
      customerName: string;
      customerPhone: string;
      provinceId: number;
      cityId: number;
      countyId: number;
      townId?: number;
      detailAddress: string;
    };
  };
}
export interface PutOrderConsigneeResponse {
  data?: {
    venderId?: number;
    customerName?: string;
    customerPhone?: string;
    provinceId?: number;
    cityId?: number;
    countyId?: number;
    townId?: number;
    detailAddress?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10201022502, 10201022501, 10201021002, 10201021001, 10201022503

// ============================================================
// 添加订单备注  (putOrderVenderRemark)
// JD method: PUT.sp-order.v0.orders._orderId.vender-remarks   HTTP: PUT
// 商家备注订单接口，用于对订单添加商家备注信息。
// ============================================================
export interface PutOrderVenderRemarkRequest {
  orderId: number;
  putOrderVenderRemarkRequest?: {
    orderVenderRemarkDTO?: {
      venderId?: number;
      remark: string;
      flagId?: number;
    };
  };
}
export interface PutOrderVenderRemarkResponse {
  data?: {
    venderId?: number;
    orderId?: number;
    remark?: string;
    flagId?: number;
  };
  success?: boolean;
  errorList?: {
    errorListItem?: {
      code?: string;
      message?: string;
      details?: string;
    };
  };
}
  // 错误码: 10201011001, 10201011002, 10201011003, 10201012505, 10201012504, 10201011004, 10201012501, 10201012503, 10201012502

// ============================================================
// 回传核销码  (postOrderVerificationCode)
// JD method: POST.sp-order.v0.orders._orderId.verification-codes   HTTP: POST
// LOC订单回传核销码给京东
// ============================================================
export interface PostOrderVerificationCodeRequest {
  orderId: number;
  postOrderVerificationCodeRequest: {
    orderVerificationCode?: {
      venderCustomQrCode?: string;
      cardNumber?: string;
      pwdNumber: string;
      venderId: number;
    };
  };
}
export interface PostOrderVerificationCodeResponse {
  data?: {
    cardNumber?: string;
    pwdNumber?: string;
    venderCustomQrCode?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1020020013

// ============================================================
// 根据订单号查询核销码  (getVerificationCode)
// JD method: GET.sp-order.v0.orders._orderId.verification-codes   HTTP: GET
// 根据京东平台订单号或卡号和卡密查询核销码详细信息，多用于码状态查询或码核销前的确认信息使用。
// ============================================================
export interface GetVerificationCodeRequest {
  orderId: string;
  request: {
    codeType: number;
    venderId: number;
    type?: string;
    cardNumber?: string;
    pwdNumber?: string;
  };
}
export interface GetVerificationCodeResponse {
  data?: {
    orderId?: number;
    orderInfo?: {
      orderCreateTime?: number;
    };
    skuInfo?: {
      skuId?: number;
      skuname?: string;
      skuType?: string;
      outerSkuId?: string;
    };
    codeInfo?: {
      status?: number;
      statusModifiedTime?: number;
      expiryStartTime?: number;
      expiryEndTime?: number;
      sendCount?: number;
      consumedTime?: number;
      cardNumber?: string;
      pwdNumber?: string;
      couponsAmount?: Record<string, unknown>;
      minConsumption?: Record<string, unknown>;
      price?: Record<string, unknown>;
      payment?: Record<string, unknown>;
      commission?: Record<string, unknown>;
      paymentOnline?: Record<string, unknown>;
      marketPrice?: Record<string, unknown>;
      lineationPrice?: Record<string, unknown>;
    };
    buyerInfo?: {
      buyerPin?: string;
      xidBuyer?: string;
      buyerPhone?: string;
    };
    shopInfo?: {
      consumeShopId?: number;
      consumeShopName?: string;
      bookShopId?: number;
      bookShopName?: string;
    };
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1020080002

// ============================================================
// 核销码列表查询  (listOrderVerificationCode)
// JD method: GET.sp-order.v0.order-verification-codes   HTTP: GET
// 批量查询商家的码信息
// ============================================================
export interface ListOrderVerificationCodeRequest {
  request: {
    codeType?: number;
    venderId?: number;
    timeType: number;
    pageSize?: number;
    type?: number;
    codeStatus?: number;
    startTime?: number;
    endTime?: number;
    page?: number;
  };
}
export interface ListOrderVerificationCodeResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    orderInfo?: {
      orderCreateTime?: number;
      orderId?: number;
    };
    skuInfo?: {
      skuId?: number;
    };
    codeInfo?: {
      status?: number;
      statusModifiedTime?: number;
      expiryStartTime?: number;
      expiryEndTime?: number;
      sendCount?: number;
      consumedTime?: number;
      cardNumber?: string;
      pwdNumber?: string;
      couponsAmount?: Record<string, unknown>;
      minConsumption?: Record<string, unknown>;
      price?: Record<string, unknown>;
      payment?: Record<string, unknown>;
      commission?: Record<string, unknown>;
      paymentOnline?: Record<string, unknown>;
      marketPrice?: Record<string, unknown>;
      lineationPrice?: Record<string, unknown>;
    };
    shopInfo?: {
      consumeShopId?: number;
      bookShopId?: number;
      consumeShopName?: string;
      bookShopName?: string;
    };
    buyerInfo?: {
      buyerPin?: string;
      xidBuyer?: string;
      buyerPhone?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10201071001, 10201071003, 10201070001, 10201071002

// ============================================================
// 更新核销码  (patchOrderVerificationCode)
// JD method: PUT.sp-order.v0.orders._orderId.verification-codes   HTTP: PUT
// 订单服务完成，商家可以调用该接口，进行核销码核销、冲正
// ============================================================
export interface PatchOrderVerificationCodeRequest {
  orderId: number;
  request: {
    consumeCodeDTO: {
      requestId?: string;
      codeNumber?: string;
      shopId?: number;
      pwdNumber: string;
      consumeCount?: number;
      venderId?: number;
    };
    venderId?: number;
    operateType: string;
    requestId?: string;
    type: number;
    consumeList?: {
      consumeListItem?: {
        cardNumber?: string;
        pwdNumber?: string;
        shopId?: number;
        shopName?: string;
        codeType?: number;
        consumeCount?: number;
      };
    };
    reversalList?: {
      reversalListItem?: {
        cardNumber?: string;
        pwdNumber?: string;
        shopId?: number;
        shopName?: string;
        codeType?: number;
        consumeCount?: number;
      };
    };
  };
}
export interface PatchOrderVerificationCodeResponse {
  data?: {
    requestId?: string;
    codeNumber?: string;
    pwdNumber?: string;
    shopId?: number;
    consumeCount?: number;
    totalCount?: number;
    successCount?: number;
    result?: boolean;
    codeList?: {
      codeListItem?: {
        result?: boolean;
        pwdNumber?: string;
        consumeCount?: number;
      };
    };
  };
  success?: boolean;
  errorList?: {
    errorListItem?: {
      code?: string;
      details?: string;
      message?: string;
    };
  };
}
  // 错误码: 1020080003, 1020080007, 1020080005

// ============================================================
// 订单列表查询  (listBasicOrders)
// JD method: GET.sp-order.v0.crm-orders   HTTP: GET
// 本API提供多渠道订单列表查询功能，支持SOP/FBP/FCS/预售/厂直等多种订单类型。采用字段可选机制，调用方需明确指定需要返回的字段名。
// ============================================================
export interface ListBasicOrdersRequest {
  listOrdersRequest: {
    orderType?: number;
    bizType?: number;
    startTime?: number;
    endTime?: number;
    orderStatus: string;
    venderId?: number;
    page: number;
    pageSize: number;
    sortBy: string;
    sortOrder: string;
    scopeSet?: {
      fieldName?: string;
    };
    buyerPin?: string;
    ouid?: string;
  };
}
export interface ListBasicOrdersResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    venderId?: number;
    orderId?: number;
    parentOrderId?: number;
    rootOrderId?: number;
    orderSource?: string;
    orderSourceDesc?: string;
    orderType?: number;
    orderTypeDesc?: string;
    orderStatus?: string;
    orderStatusDesc?: string;
    createdTime?: number;
    modifiedTime?: number;
    outboundTime?: number;
    finishedTime?: number;
    orderExt?: string;
    paymentInfo?: {
      paymentType?: number;
      paymentTypeDesc?: string;
      paymentConfirmTime?: number;
      shouldPayAmount?: Record<string, unknown>;
      actualPayAmount?: Record<string, unknown>;
      payDiscountAmount?: Record<string, unknown>;
      freightFee?: Record<string, unknown>;
      serviceFeeInfo?: {
        serviceFee?: Record<string, unknown>;
      };
      taxInfo?: {
        taxFee?: Record<string, unknown>;
      };
    };
    sellerTradePriceInfo?: {
      totalOriginalPriceAmount?: Record<string, unknown>;
      totalSellerDiscountAmount?: Record<string, unknown>;
      totalSellerReceivableAmount?: Record<string, unknown>;
    };
    skuItemInfoList?: {
      skuItemInfoListItem?: {
        skuId?: number;
        outerSkuId?: string;
        skuUuid?: string;
        skuName?: string;
        productId?: number;
        thirdCategoryId?: number;
        skuType?: number;
        num?: number;
        jdPrice?: Record<string, unknown>;
        giftPoint?: number;
        productNo?: string;
        storeId?: number;
        skuSpec?: string;
        skuImg?: string;
        giftRefUuid?: string;
        itemExt?: string;
        afsInfoList?: {
          afsInfoListItem?: {
            afsOrderId?: number;
            afsOrderStatus?: number;
            afsOrderStatusDesc?: string;
            refundStatus?: number;
            refundStatusDesc?: string;
          };
        };
        serviceInfoList?: {
          serviceInfoListItem?: {
            serviceId?: number;
            serviceName?: string;
          };
        };
      };
    };
    stepPaymentInfo?: {
      stepOrderStatus?: number;
      subStepOrderStatus?: number;
      presaleId?: number;
      presalePrice?: Record<string, unknown>;
      payBargainPlan?: Record<string, unknown>;
      payBargainReal?: Record<string, unknown>;
      payBalancePlan?: Record<string, unknown>;
      payBalanceReal?: Record<string, unknown>;
      amountDeposit?: Record<string, unknown>;
      bargainTime?: number;
      balanceTime?: number;
    };
    venderRemarkInfo?: {
      flagId?: number;
      flagDesc?: string;
      remark?: string;
      createdTime?: number;
      modifiedTime?: number;
    };
    orderFlag?: {
      preSaleOrder?: boolean;
      popOrder?: boolean;
      returnOrder?: boolean;
      indexOrder?: boolean;
      zpjdOrder?: boolean;
      partialShipment?: boolean;
      globalOrder?: boolean;
      eclpOrder?: boolean;
      clpsOrder?: boolean;
      consolidatorOrder?: boolean;
      xinJiangConsolidatorOrder?: boolean;
      jdShipment?: boolean;
      tuiHuoWuYou?: boolean;
      tryBeforePayLater?: boolean;
      homeDelivery?: string;
      flagExtMap?: string;
    };
    buyerPin?: string;
    ouid?: string;
    transportInfo?: {
      deliveryType?: number;
      deliveryTypeDesc?: string;
      logisticsId?: string;
      waybillCode?: string;
      partialShipmentList?: {
        shipmentId?: number;
        logisticsId?: string;
        waybillCode?: string;
        packageNum?: number;
        shipmentTime?: number;
        shipmentModifyTime?: number;
        skuList?: {
          skuUuid?: string;
          skuId?: number;
          num?: number;
        };
      };
    };
    buyerRemark?: {
      remark?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 50000

// ============================================================
// 订单详情查询  (getBasicOrder)
// JD method: GET.sp-order.v0.crm-orders._orderId   HTTP: GET
// 本API提供多渠道订单详情查询功能，支持SOP/FBP/FCS/预售/厂直等多种订单类型。采用字段可选机制，调用方需明确指定需要返回的字段名。
// ============================================================
export interface GetBasicOrderRequest {
  orderId: number;
  getOrderRequest: {
    venderId?: number;
    scopeSet?: {
      fieldName?: string;
    };
  };
}
export interface GetBasicOrderResponse {
  data?: {
    venderId?: number;
    orderId?: number;
    parentOrderId?: number;
    rootOrderId?: number;
    orderSource?: string;
    orderSourceDesc?: string;
    orderType?: number;
    orderTypeDesc?: string;
    orderStatus?: string;
    orderStatusDesc?: string;
    createdTime?: number;
    modifiedTime?: number;
    outboundTime?: number;
    finishedTime?: number;
    orderExt?: string;
    paymentDetailList?: {
      paymentDetailListItem?: {
        skuUuid?: string;
        skuId?: number;
        skuType?: number;
        skuTypeDesc?: string;
        skuNum?: number;
        amountExpandList?: {
          amountExpandListItem?: {
            type?: number;
            typeName?: string;
            amount?: Record<string, unknown>;
            orderCostAmountList?: {
              orderCostAmountListItem?: {
                bearer?: number;
                bearRate?: Record<string, unknown>;
                bearAmount?: Record<string, unknown>;
              };
            };
            activityId?: string;
            activityName?: string;
          };
        };
      };
    };
    paymentInfo?: {
      paymentType?: number;
      paymentTypeDesc?: string;
      paymentConfirmTime?: number;
      shouldPayAmount?: Record<string, unknown>;
      actualPayAmount?: Record<string, unknown>;
      payDiscountAmount?: Record<string, unknown>;
      freightFee?: Record<string, unknown>;
      serviceFeeInfo?: {
        serviceFee?: Record<string, unknown>;
      };
      taxInfo?: {
        taxFee?: Record<string, unknown>;
      };
    };
    sellerTradePriceInfo?: {
      totalOriginalPriceAmount?: Record<string, unknown>;
      totalSellerDiscountAmount?: Record<string, unknown>;
      totalSellerReceivableAmount?: Record<string, unknown>;
    };
    skuItemInfoList?: {
      skuItemInfoListItem?: {
        skuId?: number;
        outerSkuId?: string;
        skuUuid?: string;
        skuName?: string;
        productId?: number;
        thirdCategoryId?: number;
        skuType?: number;
        num?: number;
        jdPrice?: Record<string, unknown>;
        giftPoint?: number;
        productNo?: string;
        storeId?: number;
        skuSpec?: string;
        skuImg?: string;
        giftRefUuid?: string;
        itemExt?: string;
        afsInfoList?: {
          afsInfoListItem?: {
            afsOrderId?: number;
            afsOrderStatus?: number;
            afsOrderStatusDesc?: string;
            refundStatus?: number;
            refundStatusDesc?: string;
          };
        };
        serviceInfoList?: {
          serviceInfoListItem?: {
            serviceId?: number;
            serviceName?: string;
          };
        };
      };
    };
    stepPaymentInfo?: {
      stepOrderStatus?: number;
      subStepOrderStatus?: number;
      presaleId?: number;
      presalePrice?: Record<string, unknown>;
      payBargainPlan?: Record<string, unknown>;
      payBargainReal?: Record<string, unknown>;
      payBalancePlan?: Record<string, unknown>;
      payBalanceReal?: Record<string, unknown>;
      amountDeposit?: Record<string, unknown>;
      bargainTime?: number;
      balanceTime?: number;
      balanceStartTime?: number;
      balanceEndTime?: number;
      presaleType?: number;
      discountType?: number;
    };
    venderRemarkInfo?: {
      flagId?: number;
      flagDesc?: string;
      remark?: string;
      createdTime?: number;
      modifiedTime?: number;
    };
    orderFlag?: {
      preSaleOrder?: boolean;
      popOrder?: boolean;
      returnOrder?: boolean;
      indexOrder?: boolean;
      zpjdOrder?: boolean;
      partialShipment?: boolean;
      globalOrder?: boolean;
      eclpOrder?: boolean;
      clpsOrder?: boolean;
      consolidatorOrder?: boolean;
      xinJiangConsolidatorOrder?: boolean;
      jdShipment?: boolean;
      tuiHuoWuYou?: boolean;
      tryBeforePayLater?: boolean;
      homeDelivery?: string;
      flagExtMap?: string;
    };
    specialStatusReasonInfo?: {
      reason?: string;
      suggestion?: string;
      cancelType?: number;
      cancelTypeDesc?: string;
    };
    buyerPin?: string;
    ouid?: string;
    transportInfo?: {
      deliveryType?: number;
      deliveryTypeDesc?: string;
      logisticsId?: string;
      waybillCode?: string;
      partialShipmentList?: {
        shipmentId?: number;
        logisticsId?: string;
        waybillCode?: string;
        packageNum?: number;
        shipmentTime?: number;
        shipmentModifyTime?: number;
        skuList?: {
          skuUuid?: string;
          skuId?: number;
          num?: number;
        };
      };
    };
    buyerRemark?: {
      remark?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10201001018, 10201001001, 10201001017