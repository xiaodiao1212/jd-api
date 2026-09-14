// ============================================================
// 京东开放平台 - C2M API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 11 个接口
// ============================================================
// ============================================================
// 撤回已提交的礼品定制信息审核申请  (deleteGiftCustomApplies)
// JD method: DELETE.sp-c2m.v0.gift-custom-applies   HTTP: DELETE
// 用于服务绑定申请撤销
// ============================================================
export interface DeleteGiftCustomAppliesRequest {
  param?: {
    supplierId?: string;
    systemCode?: string;
    identityId?: string;
    auditType?: number;
  };
}
export interface DeleteGiftCustomAppliesResponse {
  code?: number;
  identityId?: string;
  requestId?: string;
  message?: string;
  success?: string;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 0

// ============================================================
// 获取定制价格等关键礼品定制信息用于定制器页面渲染   (getCustomDetail)
// JD method: GET.sp-c2m.v0.custom-detail   HTTP: GET
// 获取定制价格等关键礼品定制信息用于定制器页面渲染 
// ============================================================
export interface GetCustomDetailRequest {
  param1?: {
    venderId?: string;
    businessId?: string;
    skuId?: string;
  };
}
export interface GetCustomDetailResponse {
  code?: string;
  data?: {
    customServiceInfo?: {
      serviceDetailList?: {
        firstServiceName?: string;
        salePrice?: Record<string, unknown>;
        indexName?: string;
        techName?: string;
        secondServiceId?: string;
        secondServiceName?: string;
        required?: boolean;
        indexId?: string;
        firstServiceId?: string;
        techId?: number;
      };
      serviceName?: string;
      configId?: number;
      supplier?: string;
      serviceId?: number;
      skuId?: number;
      customExt?: string;
      productType?: number;
    };
    transparency?: {
      configId?: number;
      customServiceVersion?: number;
    };
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
  success?: boolean;
  message?: string;
}
  // 错误码: 0

// ============================================================
// 获取提交定制信息必要的定制凭证ID  (getCustomInstances)
// JD method: GET.sp-c2m.v0.custom-instances   HTTP: GET
// 定制业务三方定制模式下，三方研发的定制器接入时，通过用户设备身份+sku获取唯一定制凭证ID接口
// ============================================================
export interface GetCustomInstancesRequest {
  param?: {
    rawUserKey?: string;
    skuId?: string;
  };
}
export interface GetCustomInstancesResponse {
  total?: number;
  code?: string;
  data?: {
    customInstanceId?: string;
    rawUserKey?: string;
    userId?: string;
    skuId?: string;
  };
  success?: boolean;
  message?: string;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 0

// ============================================================
// 获取礼品定制项目信息  (listCustomProjects)
// JD method: GET.sp-c2m.v0.custom-projects   HTTP: GET
// 用于获取礼品定制项目信息
// ============================================================
export interface ListCustomProjectsRequest {
  listCustomProjectsRequest?: {
    firstCategoryId?: number;
    secondCategoryId?: number;
    thirdCategoryId?: number;
    skuId?: string;
  };
}
export interface ListCustomProjectsResponse {
  result?: {
    modifiedTime?: number;
    thirdCategoryName?: string;
    serviceCdInfos?: {
      parent?: number;
      level?: number;
      children?: {
        parent?: number;
        level?: number;
        serviceCdId?: number;
        serviceCdName?: string;
        children?: {
          parent?: number;
          level?: number;
          serviceCdId?: number;
          serviceCdName?: string;
          children?: {
            parent?: number;
            level?: number;
            serviceCdId?: number;
            serviceCdName?: string;
          };
        };
      };
      serviceCdId?: number;
      serviceCdName?: string;
    };
    firstCategoryId?: number;
    thirdCategoryId?: number;
    serviceProjectName?: string;
    firstCategoryName?: string;
    serviceTechInfos?: {
      techCommonPrice?: number;
      techName?: string;
      techId?: number;
    };
    secondCategoryName?: string;
    serviceProjectId?: number;
    secondCategoryId?: number;
  };
  total?: number;
  code?: number;
  success?: boolean;
  message?: string;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 0

// ============================================================
// 获取被授权的礼品定制SKU  (listCustomSkus)
// JD method: GET.sp-c2m.v0.custom-skus   HTTP: GET
// 用于服务定制的商家，拉取采销在定制系统配置的，商家可售卖服务范围内的商品列表和商品详情，比如礼品定制商品，售卖过程中需要刻字工艺服务，采销提前签署的刻字合同由“服务商1”履行服务，则会在定制系统提前配
// ============================================================
export interface ListCustomSkusRequest {
  param?: {
    skuList?: string[];
    pageSize?: number;
    page?: number;
    type?: string;
    supplier?: string;
  };
}
export interface ListCustomSkusResponse {
  result?: Record<string, unknown>;
  total?: number;
  code?: number;
  message?: string;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
  requestId?: string;
}
  // 错误码: 0

// ============================================================
// 提交礼品定制配置信息审核  (batchPostGiftCustomApplies)
// JD method: POST.sp-c2m.v0.gift-custom-applies   HTTP: POST
// 用于个性定制批量提交定制服务申请
// ============================================================
export interface BatchPostGiftCustomAppliesRequest {
  batchPostGiftCustomAppliesRequest?: {
    skuServiceApplyListDTO?: {
      supplierId?: string;
      firstCategoryId?: number;
      secondCategoryId?: number;
      thirdCategoryId?: number;
      skuName?: string;
      venderCode?: string;
      systemCode?: string;
      identityId?: string;
      serviceProjectId?: number;
      skuId?: string;
      customExt?: string;
      previewImageList?: string[];
      serviceDetailList?: {
        customContents?: string;
        indexType?: number;
        salePrice?: Record<string, unknown>;
        indexName?: string;
        indexId?: string;
        firstServiceId?: number;
        secondServiceId?: number;
        purchasePrice?: Record<string, unknown>;
        techId?: number;
        required?: boolean;
        serviceCate1Remark?: string;
        serviceCate2Remark?: string;
      }[];
      customShortImageUrl?: string;
      showServicePrice?: number;
      giftServiceOrder?: number;
      custom7ToReturn?: number;
      customSampleImage?: string;
      userCustomText?: {
        customTitle1?: string;
        customTitle2?: string;
        customTitle2Remark?: string;
      };
    }[];
  };
}
export interface BatchPostGiftCustomAppliesResponse {
  code?: number;
  skuValidErrorMap?: Record<string, unknown>;
  message?: string;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  applyRespListDTO?: {
    code?: number;
    message?: string;
    requestId?: string;
    identityId?: string;
    skuValidErrorMap?: Record<string, unknown>;
  }[];
}
  // 错误码: 0

// ============================================================
// 获取提交礼品定制信息审核的申请进度状态  (batchGiftCustomApplies)
// JD method: PATCH.sp-c2m.v0.gift-custom-applies   HTTP: PATCH
// 用于和京东签订过个性定制商品的定制商品服务协议的定制商品服务商，查询已经提交过的定制商品服务申请的审核结果和服务状态
// ============================================================
export interface BatchGiftCustomAppliesRequest {
  request: {
    skuServiceApplyResultList: string[];
  };
}
export interface BatchGiftCustomAppliesResponse {
  skuServiceApplyResultList?: {
    auditStatusDesc?: string;
    rejectReason?: string;
    identityId?: string;
    auditStatus?: number;
    auditTaskName?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11803005032

// ============================================================
// 添加用户的定制信息提交给定制平台  (postCustomCart)
// JD method: POST.sp-c2m.v0.custom-cart   HTTP: POST
// 添加用户的定制信息提交给定制平台
// ============================================================
export interface PostCustomCartRequest {
  postCustomCartRequest?: {
    displayMultimediaInfo?: {
      displayName?: string;
      type?: string;
      url?: string;
    }[];
    customServiceInfo?: {
      customContent?: {
        displayValue?: string;
        displayName?: string;
        indexName?: string;
        indexId?: string;
        url?: string;
      };
      serviceCd2Id?: string;
      positionId?: string;
      serviceCd1Id?: string;
      serviceCd1Name?: string;
      serviceCd2Name?: string;
      techName?: string;
      serviceId?: string;
      serviceName?: string;
      techId?: string;
      salePrice?: Record<string, unknown>;
      customServiceType?: number;
      required?: boolean;
    }[];
    orderId?: number;
    totalPrice?: Record<string, unknown>;
    businessId?: string;
    suitInfo?: {
      skuName?: string;
      skuNumRule?: number;
      suitSkuType?: number;
      skuId?: number;
      skuNum?: number;
      skuCount?: number;
    }[];
    customInstanceId?: string;
    rawJson?: string;
    customize?: string;
    displayPictureInfo?: {
      displayName?: string;
      type?: string;
      url?: string;
    }[];
    displayCustomInfo?: Record<string, unknown>;
    skuId?: number;
    productType?: string;
    unitPrice?: Record<string, unknown>;
    customParams?: Record<string, unknown>;
    count?: number;
    autoProductInfo?: Record<string, unknown>;
    userId?: string;
    actionType?: number;
    customType?: string;
    transparency?: {
      configId?: string;
      customServiceVersion?: string;
    };
    rawCustomInfo?: string;
    customDetailPageUrl?: string;
    audioDetectIds?: string[];
    attrValueNumRule?: boolean;
  };
}
export interface PostCustomCartResponse {
  data?: {
    skuId?: number;
    num?: number;
    actionType?: number;
    newCustomInfoId?: string;
    newSuitInfoId?: string;
    packSkuId?: number;
    packNum?: number;
    skuUuid?: string;
    customInfoId?: string;
    oldPackSkuId?: number;
    oldPackSkuNum?: number;
    suitInfoId?: string;
    ycServiceId?: string;
    ybServiceId?: string;
    homeServiceId?: string;
    url?: string;
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  success?: boolean;
}
  // 错误码: 1180600128

// ============================================================
// 查询定制购物车详情  (getCartByCustomInfoIdJos)
// JD method: GET.sp-c2m.v0.custom-cart._customCartId   HTTP: GET
// 通过定制id获取定制购物车详情
// ============================================================
export interface GetCartByCustomInfoIdJosRequest {
  customCartId: string;
  request?: {
    cartType?: number;
  };
}
export interface GetCartByCustomInfoIdJosResponse {
  data?: {
    displayMultimediaInfo?: {
      displayMultimediaInfoItem?: {
        displayName?: string;
        type?: number;
        url?: string;
      };
    };
    customServiceInfo?: {
      customServiceInfoItem?: {
        customContent?: {
          displayValue?: string;
          displayName?: string;
          indexName?: string;
          indexId?: string;
          url?: string;
        };
        serviceCd2Id?: string;
        positionId?: string;
        serviceCd1Id?: string;
        serviceCd1Name?: string;
        serviceCd2Name?: string;
        techName?: string;
        serviceId?: string;
        serviceName?: string;
        techId?: string;
        salePrice?: Record<string, unknown>;
        customServiceType?: number;
        required?: boolean;
      };
    };
    totalPrice?: Record<string, unknown>;
    businessId?: string;
    suitInfo?: {
      suitInfoItem?: {
        skuName?: string;
        skuNumRule?: number;
        suitSkuType?: number;
        skuId?: number;
        skuNum?: number;
        skuCount?: number;
      };
    };
    customInstanceId?: string;
    rawJson?: string;
    customize?: string;
    displayPictureInfo?: {
      displayPictureInfoItem?: {
        displayName?: string;
        type?: number;
        url?: string;
      };
    };
    displayCustomInfo?: Record<string, unknown>;
    skuId?: number;
    productType?: string;
    unitPrice?: Record<string, unknown>;
    customParams?: Record<string, unknown>;
    count?: number;
    autoProductInfo?: Record<string, unknown>;
    userId?: string;
    actionType?: number;
    customType?: string;
    transparency?: {
      configId?: string;
      customServiceVersion?: string;
    };
    rawCustomInfo?: string;
    audioDetectIds?: {
      element?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 11806002160

// ============================================================
// 定制订单查询定制内容详情  (getOrderCustomInfos)
// JD method: GET.sp-c2m.v0.custom-order-details._orderId   HTTP: GET
// 查询客户的定制订单的定制内容详情
// ============================================================
export interface GetOrderCustomInfosRequest {
  orderId: number;
  request?: {
    skuId?: number;
    pin?: string;
  };
}
export interface GetOrderCustomInfosResponse {
  data?: {
    orderId?: number;
    skuId?: number;
    customInfoId?: string;
    thirdPartyCartInfo?: {
      actionType?: number;
      customInstanceId?: string;
      userId?: string;
      customize?: string;
      orderId?: number;
      skuId?: number;
      count?: number;
      customParams?: Record<string, unknown>;
      totalPrice?: Record<string, unknown>;
      unitPrice?: Record<string, unknown>;
      customType?: string;
      displayMultimediaInfo?: {
        displayMultimediaInfoItem?: {
          displayName?: string;
          type?: number;
          url?: string;
        };
      }[];
      displayPictureInfo?: {
        displayPictureInfoItem?: {
          displayName?: string;
          type?: number;
          url?: string;
        };
      }[];
      displayCustomInfo?: Record<string, unknown>;
      suitInfo?: {
        suitInfoItem?: {
          skuName?: string;
          skuNumRule?: number;
          suitSkuType?: number;
          skuId?: number;
          skuNum?: number;
          skuCount?: number;
        };
      }[];
      rawCustomInfo?: string;
      rawJson?: string;
      businessId?: string;
      productType?: string;
      transparency?: {
        configId?: string;
        customServiceVersion?: string;
      };
      customServiceInfo?: {
        customServiceInfoItem?: {
          customContent?: {
            displayValue?: string;
            displayName?: string;
            indexName?: string;
            indexId?: string;
            url?: string;
          };
          positionId?: string;
          serviceCd1Id?: string;
          serviceCd1Name?: string;
          serviceCd2Id?: string;
          serviceCd2Name?: string;
          techId?: string;
          techName?: string;
          serviceId?: string;
          serviceName?: string;
          salePrice?: Record<string, unknown>;
          customServiceType?: number;
          required?: boolean;
        };
      }[];
    };
    customerAudioResults?: {
      customerAudioResultsItem?: {
        detectId?: string;
        detectResult?: number;
        detectDetails?: string;
      };
    }[];
    skuUuids?: string[];
    masterSkuId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11806003000, 11806003001

// ============================================================
// 礼品定制批量启用/禁用  (updateGiftCustomStatus)
// JD method: PATCH.sp-c2m.v0.custom-skus.batch   HTTP: PATCH
// 当需要对一批SKU启用或禁用礼品定制功能时，商家可使用此接口，批量更新SKU礼品定制的状态。
// ============================================================
export interface UpdateGiftCustomStatusRequest {
  request?: {
    supplierId?: string;
    validStatus?: number;
    skuIds?: number[];
  };
}
export interface UpdateGiftCustomStatusResponse {
  data?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  success?: boolean;
}
  // 错误码: 118030050305