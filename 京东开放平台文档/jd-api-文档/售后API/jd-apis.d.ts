// ============================================================
// 京东开放平台 - 售后API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 10 个接口
// ============================================================
// ============================================================
// 分页查询赔付单记录  (listCompensationForms)
// JD method: GET.sp-aftercare.v0.compensation-forms   HTTP: GET
// 分页查询赔付单记录
// ============================================================
export interface ListCompensationFormsRequest {
  listCompensationFormsRequest: {
    compensationFormId?: number;
    compensationFormChildId?: number;
    refId?: number;
    refType?: number;
    modifiedStartTime?: number;
    modifiedEndTime?: number;
    sortOrder?: string;
    sortBy?: string;
    page: number;
    pageSize: number;
    scopeSet?: {
      element?: string;
    };
    venderId: number;
  };
}
export interface ListCompensationFormsResponse {
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    compensationFormId?: number;
    compensationFormChildId?: number;
    realCompensationPrice?: Record<string, unknown>;
    shouldCompensationPrice?: Record<string, unknown>;
    refType?: number;
    refId?: number;
    type?: number;
    compensationType?: number;
    venderId?: number;
    createdTime?: number;
    modifiedTime?: number;
    venderAuditStatus?: number;
    erpAuditStatus?: number;
    compensationReason?: string;
    canSecondApplyStatus?: number;
    orderInfo?: {
      orderId?: number;
      orderType?: number;
    };
    compensationShareInfoList?: {
      skuId?: number;
      skuName?: string;
      skuNum?: number;
      sharePrice?: Record<string, unknown>;
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1030010004, 1030010005, 1030010006

// ============================================================
// 保存服务单备注  (postAfsOrderNote)
// JD method: POST.sp-aftercare.v0.afs-orders._afsOrderId.notes   HTTP: POST
// 保存服务单备注，一个服务单可保存多条备注，服务单备注仅客服和商家能够查看
// ============================================================
export interface PostAfsOrderNoteRequest {
  afsOrderId: number;
  postAfsOrderNoteRequest?: {
    afsOrderNoteDTO?: {
      reverseType?: number;
      pin?: string;
      remarkLevel?: number;
      venderId?: number;
      trackContext?: string;
      title?: string;
    };
  };
}
export interface PostAfsOrderNoteResponse {
  data?: {
    reverseType?: number;
    remarkLevel?: number;
    venderId?: number;
    trackContext?: string;
    title?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10301011002, 10301011001

// ============================================================
// 查询服务单日志列表  (listAfsOrderLogs)
// JD method: GET.sp-aftercare.v0.afs-orders._afsOrderId.logs   HTTP: GET
// 查询服务单日志列表，用于展示某服务单下的操作日志信息
// ============================================================
export interface ListAfsOrderLogsRequest {
  afsOrderId: number;
  listAfsOrderLogsRequest: {
    pin: string;
    venderId: number;
    page: number;
    pageSize: number;
  };
}
export interface ListAfsOrderLogsResponse {
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    operateTime?: number;
    operateName?: string;
    operatePin?: string;
    xidSeller?: string;
    relationTypeDesc?: string;
    relationType?: number;
    afsOrderLogId?: number;
    afsOrderId?: number;
    operateRemark?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1030010019, 1030010012

// ============================================================
// 售后服务单操作  (patchAfsOrder)
// JD method: PATCH.sp-aftercare.v0.afs-orders._afsOrderId   HTTP: PATCH
// 售后服务单操作，包含商家审核操作-退款审核、拒绝服务单、审核为不退货补发新品、审核为线下补发商品、客户发货、客户送货到站点、上门取件、待客户反馈、审核驳回等；厂直的取消单审核等
// ============================================================
export interface PatchAfsOrderRequest {
  afsOrderId: number;
  patchAfsOrderRequest?: {
    afsApproveRejectInfo?: {
      reasonType?: number;
    };
    onlyRefundInfo?: {
      refundSkuCount?: number;
      submitRefundAmount?: Record<string, unknown>;
      freightMoneyFlag?: number;
    };
    operateType?: number;
    negotiationRejectInfo?: {
      negotiationProgrammeDesc?: string;
      communicationFlag?: number;
      communicateChannelList?: {
        element?: number;
      };
      rejectReasonType?: number;
      negotiationProgramme?: number;
      negotiationReason?: string;
    };
    afsOrderDTO?: {
      sellerPin?: string;
      xidSeller?: string;
      identityType?: number;
      approveNotes?: string;
      venderId?: number;
      afsOrderId?: number;
    };
    createRebackInfo?: {
      reasonName?: string;
      originRefundType?: number;
      consigneeTel?: string;
      productCount?: number;
      returnWareAddressInfo?: {
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        detailAddress?: string;
      };
      consigneeName?: string;
      applyRemark?: string;
      reasonId?: number;
      providerId?: string;
      waybillCode?: string;
    };
    submitRefundInfo?: {
      refundSkuCount?: number;
      submitRefundAmount?: Record<string, unknown>;
      freightMoneyFlag?: number;
    };
    confirmReceiveInfo?: {
      partQuality?: number;
      partAppearance?: number;
      partPacking?: number;
      receiverPin?: string;
      xidBuyer?: string;
    };
    saveFreightInfo?: {
      freightMoney?: Record<string, unknown>;
      providerId?: string;
      waybillCode?: string;
      providerName?: string;
    };
    negotiationCloseInfo?: {
      reasonType?: number;
    };
    negotiationReturnRefundInfo?: {
      refundReverseReasonType?: number;
      addressId?: number;
    };
    modifyOutWarehouseStatusInfo?: {
      orderId?: number;
      outWarehouseStatus?: number;
    };
    approvePassInfo?: {
      afsContactsInfo?: {
        contactsTel?: string;
        contactsZipCode?: string;
        contactsName?: string;
        contactsPhone?: string;
      };
      afsAddressInfo?: {
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        detailAddress?: string;
        returnAddressType?: number;
      };
    };
    onlineRenewInfo?: {
      renewSkuInfoList?: {
        renewSkuInfoListItem?: {
          skuId?: number;
          skuNum?: number;
          skuName?: string;
        };
      };
      customerContactsInfo?: {
        contactsTel?: string;
        contactsZipCode?: string;
        contactsName?: string;
        contactsPhone?: string;
      };
      afsAddressInfo?: {
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        detailAddress?: string;
      };
    };
    offlineRenewInfo?: {
      waybillCode?: string;
      alphaProviderId?: number;
      providerName?: string;
      skuNum?: number;
    };
    negotiationModifyInfo?: {
      negotiationReason?: string;
      newCustomerExpect?: number;
      newAfsReasonId?: number;
      newRefundMoney?: Record<string, unknown>;
      returnWareContactsInfo?: {
        contactsTel?: string;
        contactsZipCode?: string;
        contactsName?: string;
        contactsPhone?: string;
      };
      returnWareAddressInfo?: {
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        detailAddress?: string;
        returnAddressType?: number;
      };
    };
    afsCloseInfo?: {
      reasonType?: number;
    };
    approveRejectInfo?: {
      rejectType?: number;
    };
    afsSupplierAuditInfo?: {
      questionTypeFirstCid?: number;
      questionTypeSecondCid?: number;
      auditBasisId?: number;
      auditNum?: number;
    };
    vcConfirmReceiveInfo?: {
      partQuality?: number;
      partAppearance?: number;
      partPacking?: number;
      invoiceRecord?: number;
      accessoryOrGift?: number;
      skuNum?: number;
      providerId?: number;
      waybillCode?: string;
      providerName?: string;
      receiverPin?: string;
      xidSeller?: string;
    };
  };
}
export interface PatchAfsOrderResponse {
  data?: {
    afsOrderId?: number;
    orderId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10301001002, 10301001001

// ============================================================
// 查询售后服务单预填信息  (getAfsOrderPreFillInfo)
// JD method: GET.sp-aftercare.v0.afs-orders._afsOrderId.afs-order-pre-fill-infoes   HTTP: GET
// 商家审核/收货/处理售后服务单前，查询退货地址、审核原因、申请原因等前置核心信息
// ============================================================
export interface GetAfsOrderPreFillInfoRequest {
  afsOrderId: number;
  request?: {
    type?: number;
    customerExpect?: number;
    questionTypeFirstCid?: number;
    questionTypeSecondCid?: number;
    auditBasisType?: number;
    venderId?: number;
    pin?: string;
  };
}
export interface GetAfsOrderPreFillInfoResponse {
  data?: {
    questionInfolist?: {
      questionInfolistItem?: {
        questionType?: number;
        questionDesc?: string;
      };
    };
    auditBasisInfolist?: {
      auditBasisInfolistItem?: {
        auditBasisId?: number;
        auditBasisDesc?: string;
      };
    };
    applyReasonInfolist?: {
      applyReasonInfolistItem?: {
        applyReasonFirstCid?: number;
        applyReasonFirstCidDesc?: string;
      };
    };
    venderAddressesInfolist?: {
      venderAddressesInfolistItem?: {
        contactName?: string;
        contactTel?: string;
        contactZipcode?: string;
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        detailAddress?: string;
        defaultAddressFlag?: boolean;
      };
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10301031002, 10301031001

// ============================================================
// 分页查询售后服务单列表  (listAfsOrders)
// JD method: GET.sp-aftercare.v0.afs-orders   HTTP: GET
// 按不同条件查询京东售后服务单列表，包含取消订单和自主售后两种单据，支持POP、厂直等模式
// ============================================================
export interface ListAfsOrdersRequest {
  request?: {
    venderId?: number;
    afsOrderId?: number;
    orderType?: number;
    applyStartTime?: number;
    applyEndTime?: number;
    afsOrderTag?: {
      element?: string;
    };
    timeoutFlag?: number;
    resolvedFlag?: boolean;
    upgradeFlag?: boolean;
    skuId?: number;
    refundStatus?: number;
    overStartTime?: number;
    overEndTime?: number;
    processResult?: number;
    approveStartTime?: number;
    approveEndTime?: number;
    customerExpect?: number;
    customerName?: string;
    mainStatus?: number;
    subStatus?: number;
    updateStartTime?: number;
    updateEndTime?: number;
    customerPin?: string;
    xidBuyer?: string;
    ouid?: string;
    waybillCode?: string;
    customerTel?: string;
    transferFeedbackReasonIdList?: {
      transferFeedbackReasonId?: number;
    };
    page: number;
    pageSize: number;
    orderId?: number;
    pin?: string;
  };
}
export interface ListAfsOrdersResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    orderId?: number;
    afsOrderId?: number;
    orderInfo?: {
      orderId?: number;
      orderType?: number;
      orderTypeName?: string;
      orderWarehouseStatus?: number;
      orderWarehouseStatusDesc?: string;
    };
    skuInfoList?: {
      skuInfoListItem?: {
        skuName?: string;
        skuUuid?: string;
        skuId?: number;
        skuNum?: number;
        skuType?: number;
        skuTypeDesc?: string;
      };
    };
    afsOrderBaseInfo?: {
      buId?: string;
      applyPin?: string;
      xidBuyer?: string;
      ouid?: string;
      applyTime?: number;
      applyName?: string;
      createTime?: number;
      modifiedTime?: number;
      afsOrderFinishTime?: number;
    };
    afsOrderStatusInfo?: {
      mainStatus?: number;
      mainStatusDesc?: string;
      subStatus?: number;
      subStatusDesc?: string;
    };
    customerApplyInfo?: {
      customerExpect?: number;
      customerExpectDesc?: string;
      applyReasonFirstCid?: number;
      applyReasonFirstCidDesc?: string;
      applyReasonSecondCid?: number;
      applyReasonSecondCidDesc?: string;
    };
    customerInfo?: {
      customerPin?: string;
      xidBuyer?: string;
      ouid?: string;
      customerTel?: string;
    };
    pickInfo?: {
      pickType?: number;
      pickTypeDesc?: string;
      pickMethod?: number;
      pickStatus?: number;
      pickStatusDesc?: string;
    };
    approveInfo?: {
      approvedTime?: number;
      approveResult?: number;
      approveResultDesc?: string;
      approveName?: string;
      approvePin?: string;
      xidSeller?: string;
    };
    receiveInfo?: {
      receiveTime?: number;
      receivePin?: string;
      xidSeller?: string;
    };
    processInfo?: {
      processedTime?: number;
      processResult?: number;
      processResultDesc?: string;
      processName?: string;
      processPin?: string;
      xidSeller?: string;
    };
    refundInfo?: {
      refundStatus?: number;
      refundStatusDesc?: string;
      refundType?: number;
      refundTypeDesc?: string;
      applyRefundAmount?: Record<string, unknown>;
      actualRefundAmount?: Record<string, unknown>;
    };
    afsOrderOvertimeInfo?: {
      overTime?: number;
    };
    afsOrderFlagInfo?: {
      sevenDaysNoReasonFlag?: boolean;
      partRefundFlag?: boolean;
      zeroSecondRefundFlag?: boolean;
      userAdjustmentFlag?: boolean;
      brandSendThFlag?: boolean;
      rejectToApproveFlag?: boolean;
      abnormalReceiveRfpFlag?: boolean;
      vmiFlag?: boolean;
      selfForBrandVendorFlag?: boolean;
    };
    waybillInfoList?: {
      waybillInfoListItem?: {
        waybillType?: number;
        waybillTypeDesc?: string;
        waybillCode?: string;
        providerId?: number;
        providerName?: string;
      };
    };
    afsOrderRejectInfo?: {
      transferFeedbackTime?: number;
      transferFeedbackReasonName?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10301001002, 10301001001

// ============================================================
// 查询售后服务单详情  (getAfsOrder)
// JD method: GET.sp-aftercare.v0.afs-orders._afsOrderId   HTTP: GET
// 根据服务单号查询服务单，包含取消订单和自主售后两种单据
// ============================================================
export interface GetAfsOrderRequest {
  afsOrderId: number;
  getAfsOrderRequest: {
    pin: string;
    venderId: number;
    scopeSet?: {
      fieldName?: string;
    };
  };
}
export interface GetAfsOrderResponse {
  data?: {
    afsOrderId?: number;
    afsOrderBaseInfo?: {
      applyPin?: string;
      xidBuyer?: string;
      ouid?: string;
      applyTime?: number;
      applyName?: string;
      createTime?: number;
      modifiedTime?: number;
      afsCount?: number;
      afsOrderFinishTime?: number;
    };
    orderInfo?: {
      orderId?: number;
      orderType?: number;
      orderTypeDesc?: string;
      orderWarehouseStatus?: number;
      orderWarehouseStatusDesc?: string;
    };
    afsOrderStatusInfo?: {
      mainStatus?: number;
      mainStatusDesc?: string;
      subStatus?: number;
      subStatusDesc?: string;
    };
    skuInfoList?: {
      skuInfoListItem?: {
        skuName?: string;
        skuUuid?: string;
        skuId?: number;
        skuNum?: number;
        skuType?: number;
        skuTypeDesc?: string;
        partCode?: string;
      };
    };
    refundInfo?: {
      refundStatus?: number;
      refundStatusDesc?: string;
      refundType?: number;
      refundTypeDesc?: string;
      applyRefundAmount?: Record<string, unknown>;
      actualRefundAmount?: Record<string, unknown>;
      applyRefundDetail?: {
        refundAmount?: Record<string, unknown>;
        estimatedRefundInfo?: {
          sumAmount?: Record<string, unknown>;
          refundApplyDetailList?: {
            refundApplyDetailListItem?: {
              refundableAmount?: Record<string, unknown>;
              payTypeDesc?: string;
            };
          };
        };
        noRefundInfo?: {
          sumAmount?: Record<string, unknown>;
          refundApplyDetailList?: {
            refundApplyDetailListItem?: {
              refundableAmount?: Record<string, unknown>;
              payTypeDesc?: string;
            };
          };
        };
      };
      estimateRefundDetail?: {
        maxRefundAmount?: Record<string, unknown>;
        maxAdjustmentAmount?: Record<string, unknown>;
        payAmount?: Record<string, unknown>;
        cutAmount?: Record<string, unknown>;
        payFeeDetailList?: {
          payFeeDetailListItem?: {
            venderDeductionType?: number;
            amount?: Record<string, unknown>;
            supportAdjustType?: number;
            feeTypeDesc?: string;
            bearRate?: Record<string, unknown>;
          };
        };
        cutFeeDetailList?: {
          cutFeeDetailListItem?: {
            venderDeductionType?: number;
            amount?: Record<string, unknown>;
            supportAdjustType?: number;
            feeTypeDesc?: string;
            bearRate?: Record<string, unknown>;
          };
        };
      };
      actualRefundDetail?: {
        actualRefundAmount?: Record<string, unknown>;
        refundMethod?: string;
        refundReason?: string;
        actualRefundFeeDetailList?: {
          actualRefundFeeDetailListItem?: {
            venderDeductionType?: number;
            amount?: Record<string, unknown>;
            feeTypeDesc?: string;
            bearRate?: Record<string, unknown>;
            supportAdjustType?: number;
          };
        };
        actualRefundCutFeeDetailList?: {
          actualRefundCutFeeDetailListItem?: {
            venderDeductionType?: number;
            amount?: Record<string, unknown>;
            feeTypeDesc?: string;
            bearRate?: Record<string, unknown>;
            supportAdjustType?: number;
          };
        };
      };
    };
    customerApplyInfo?: {
      customerExpect?: number;
      customerExpectDesc?: string;
      applyReasonFirstCid?: number;
      applyReasonFirstCidDesc?: string;
      applyReasonSecondCid?: number;
      applyReasonSecondCidDesc?: string;
      expectPickType?: number;
      expectPickTypeDesc?: string;
      originCustomerExpect?: number;
      originCustomerExpectDesc?: string;
    };
    customerInfo?: {
      customerTel?: string;
      customerName?: string;
      customerContactName?: string;
      customerMobilePhone?: string;
      customerZipCode?: string;
      customerGrade?: number;
      customerPin?: string;
      xidBuyer?: string;
      ouid?: string;
    };
    pickInfo?: {
      pickType?: number;
      pickTypeDesc?: string;
      pickMethod?: number;
      pickStatus?: number;
      pickStatusDesc?: string;
      appointmentInfo?: {
        appointStartTime?: number;
        appointEndTime?: number;
        appointTimeDesc?: string;
        appointTimeType?: number;
        reserveTime?: number;
      };
      addressInfo?: {
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        provinceName?: string;
        cityName?: string;
        countyName?: string;
        townName?: string;
        detailAddress?: string;
        oaid?: string;
      };
      pickLogisticsList?: {
        pickLogisticsListItem?: {
          waybillCode?: string;
          pickStatus?: number;
          pickStatusDesc?: string;
          deliveryTime?: number;
          providerName?: string;
          freightMoney?: Record<string, unknown>;
          repeatFreightFlag?: boolean;
          modifiedMoney?: Record<string, unknown>;
          providerId?: number;
        };
      };
    };
    returnInfo?: {
      returnType?: number;
      returnTypeDesc?: string;
      businessType?: number;
      businessTypeDesc?: string;
      addressInfo?: {
        provinceId?: number;
        cityId?: number;
        countyId?: number;
        townId?: number;
        provinceName?: string;
        cityName?: string;
        countyName?: string;
        townName?: string;
        detailAddress?: string;
        oaid?: string;
      };
    };
    approveInfo?: {
      approvedTime?: number;
      approveResult?: number;
      approveResultDesc?: string;
      approveName?: string;
      approvePin?: string;
      xidSeller?: string;
      approveNotes?: string;
    };
    receiveInfo?: {
      receiveTime?: number;
      receivePin?: string;
      xidSeller?: string;
    };
    processInfo?: {
      processedTime?: number;
      processResult?: number;
      processResultDesc?: string;
      processName?: string;
      processPin?: string;
      xidSeller?: string;
      processNotes?: string;
    };
    collectionInfo?: {
      collectionStatus?: number;
      collectionStatusDesc?: string;
    };
    invoiceInfo?: {
      invoiceCode?: string;
      invoiceStatus?: number;
      invoiceStatusDesc?: string;
    };
    changeInfo?: {
      skuId?: number;
      skuName?: string;
      skuNum?: number;
      jdPrice?: Record<string, unknown>;
      lockStockStatus?: number;
      lockStockId?: number;
    };
    questionInfo?: {
      questionTypeFirstCid?: number;
      questionTypeFirstCidDesc?: string;
      questionDesc?: string;
      questionPic?: string;
      questionTypeSecondCid?: number;
      questionTypeSecondCidDesc?: string;
      questionVideo?: string;
      questionVideoImage?: string;
    };
    afsOrderContactInfo?: {
      contactName?: string;
      contactTel?: string;
      contactMobile?: string;
      contactZipcode?: string;
      provinceId?: number;
      cityId?: number;
      countyId?: number;
      townId?: number;
      provinceName?: string;
      cityName?: string;
      countyName?: string;
      townName?: string;
      detailAddress?: string;
    };
    upgradeInfo?: {
      reasonName?: string;
      upgradeStatus?: number;
      upgradeStatusDesc?: string;
      upgradeSuggestion?: string;
    };
    relationInfo?: {
      orderId?: number;
      srcOrderId?: number;
      newOrderId?: number;
      serviceIdList?: {
        element?: number;
      };
      bAfsServiceInfo?: {
        bAfsServiceId?: number;
        actualRefundAmount?: Record<string, unknown>;
      };
      returnOrderId?: string;
      parentAfsServiceId?: number;
    };
    afsOrderTrackInfoList?: {
      afsOrderTrackInfoListItem?: {
        trackCreateTime?: number;
        title?: string;
        trackContext?: string;
        operatorPin?: string;
        xidSeller?: string;
        operatorName?: string;
      };
    };
    afsOrderOvertimeInfo?: {
      overTime?: number;
    };
    afsOrderFlagInfo?: {
      partRefundFlag?: boolean;
      sevenDaysNoReasonFlag?: boolean;
      zeroSecondRefundFlag?: boolean;
      userAdjustmentFlag?: boolean;
      jdDisputeFlag?: boolean;
      alreadySmartRefundFlag?: boolean;
      brandSendThFlag?: boolean;
      rejectToApproveFlag?: boolean;
      abnormalReceiveRfpFlag?: boolean;
      vmiFlag?: boolean;
      selfForBrandVendorFlag?: boolean;
      renewOrderCancelFlag?: boolean;
      renewOrderFlag?: boolean;
    };
    waybillInfoList?: {
      waybillInfoListItem?: {
        waybillType?: number;
        waybillTypeDesc?: string;
        waybillCode?: string;
        providerId?: number;
        providerName?: string;
      };
    };
    negotiationInfo?: {
      refType?: number;
      refTypeDesc?: string;
      negotiationStatus?: number;
      negotiationStatusDesc?: string;
      negotiationPurpose?: number;
      negotiationPurposeDesc?: string;
    };
    deliveryWareInfo?: {
      interceptStatus?: number;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10301001001

// ============================================================
// 分页查询小额打款列表  (listPaymentForms)
// JD method: GET.sp-aftercare.v0.payment-forms   HTTP: GET
// 查询商家小额打款列表记录
// ============================================================
export interface ListPaymentFormsRequest {
  listPaymentFormsRequest: {
    paymentFormId?: number;
    orderId?: number;
    venderId?: number;
    pageSize: number;
    buyerPin?: string;
    xidBuyer?: string;
    applyStartTime?: number;
    applyEndTime?: number;
    page: number;
    reason?: number;
    status?: number;
  };
}
export interface ListPaymentFormsResponse {
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    paymentFormId?: number;
    orderId?: number;
    payAmount?: Record<string, unknown>;
    status?: number;
    statusDesc?: string;
    reason?: number;
    reasonDesc?: string;
    buyerPin?: string;
    xidBuyer?: string;
    applyTime?: number;
    applicantPin?: string;
    xidSeller?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 1030050004, 1030050008

// ============================================================
// 分页查询价保服务单列表  (listPriceProtectOrders)
// JD method: GET.sp-aftercare.v0.price-protect-orders   HTTP: GET
// 分页查询价保服务单列表
// ============================================================
export interface ListPriceProtectOrdersRequest {
  listPriceProtectOrdersRequest: {
    applyStartTime: number;
    applyEndTime: number;
    orderId?: number;
    pageSize: number;
    priceProtectType?: number;
    customerPin?: string;
    xidBuyer?: string;
    page: number;
    applyStatus?: number;
    scopeSet?: {
      element: string;
    };
    skuId?: number;
    venderId?: number;
  };
}
export interface ListPriceProtectOrdersResponse {
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    priceProtectApplyId?: number;
    priceProtectRealChildApplyId?: number;
    uuid?: string;
    customerPin?: string;
    xidBuyer?: string;
    venderId?: number;
    purchasePrice?: Record<string, unknown>;
    applyPrice?: Record<string, unknown>;
    applySuccessPrice?: Record<string, unknown>;
    venderUndertakeAmount?: Record<string, unknown>;
    subsidyRateAmount?: Record<string, unknown>;
    platformCouponRateAmount?: Record<string, unknown>;
    plusDiscountRateAmount?: Record<string, unknown>;
    applyTime?: number;
    priceProtectTypeDesc?: string;
    priceProtectStatusDesc?: string;
    skuInfo?: {
      skuId?: number;
      skuName?: string;
      skuNum?: number;
      skuPhotoUrl?: string;
    };
    orderInfo?: {
      orderId?: number;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 1030030001, 1030030009, 1030030002, 1030030010

// ============================================================
// 查询价保详情  (getPriceProtectOrder)
// JD method: GET.sp-aftercare.v0.price-protect-orders._priceProtectOrderId   HTTP: GET
// 通过价保uuid和价保类型，获取价保详情
// ============================================================
export interface GetPriceProtectOrderRequest {
  priceProtectOrderId: number;
  getPriceProtectOrderRequest?: {
    priceProtectType?: number;
    venderId: number;
  };
}
export interface GetPriceProtectOrderResponse {
  data?: {
    realApplyId?: number;
    purchaseTaxPrice?: Record<string, unknown>;
    purchasePromotionPrice?: Record<string, unknown>;
    purchaseOriginalPrice?: Record<string, unknown>;
    purchasePrice?: Record<string, unknown>;
    applyJdPrice?: Record<string, unknown>;
    applyTaxPrice?: Record<string, unknown>;
    applyPromotionPrice?: Record<string, unknown>;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 1030030006, 1030030004