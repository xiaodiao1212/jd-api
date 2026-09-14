// ============================================================
// 京东开放平台 - 门店API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 5 个接口
// ============================================================
// ============================================================
// 获取门店信息  (getStore)
// JD method: GET.sp-store.v0.stores._storeId   HTTP: GET
// 获取指定门店的详细信息，已创建的门店，包含从京麦端或API开放创建的门店，通过该接口进行门店信息查询。
// ============================================================
export interface GetStoreRequest {
  storeId: string;
  request?: {
    venderId?: number;
    type?: number;
    categoryName?: string;
  };
}
export interface GetStoreResponse {
  data?: {
    storeId?: string;
    extStoreId?: string;
    storeName?: string;
    status?: number;
    addressInfo?: {
      coordinate?: string;
      addName?: string;
      addCode?: number;
      addCode4?: number;
      sameCity?: boolean;
      fullAddress?: string;
    };
    contactInfo?: {
      phone?: string;
      mobile?: string;
    };
    categoryInfo?: {
      categoryId2?: string;
      categoryName?: string;
    };
    displayInfo?: {
      imageFile?: {
        image?: string;
      }[];
    };
    extendInfo?: {
      storeOpenTimeDaySt?: string;
      storeOpenTimeDayJSONArrayString?: string;
      groupIdList?: number[];
    };
    qualificationInfo?: {
      qualificationId?: number;
      imgUrl?: string;
    };
    auditInfo?: {
      auditStatus?: number;
      reason?: string;
    };
    storeStatus?: number;
    operateStatus?: number;
    created?: number;
    modified?: number;
    testType?: number;
    bizType?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 50000

// ============================================================
// 门店创建  (createStore)
// JD method: POST.sp-store.v0.stores   HTTP: POST
// 商家在POP店铺基础上，开展门店业务（门店发货、门店自提，LOC）时，需要进行门店信息的维护。
// ============================================================
export interface CreateStoreRequest {
  request?: {
    addressInfo?: {
      coordinate?: string;
      address?: string;
      fullAddress?: string;
      addName?: string;
      addCode?: number;
      addCode4?: number;
    };
    contactInfo?: {
      phone?: string;
      mobile?: string;
    };
    extStoreId?: string;
    venderId?: number;
    extendInfo?: {
      storeOpenTimeDaySt?: string;
      groupIdList?: number[];
      extendJson?: string;
      storeOpenTimeDayJSONArrayString?: string;
    };
    categoryInfo?: {
      categoryId2?: number;
      categoryName?: string;
    };
    qualificationInfo?: {
      imgUrl?: string;
      isPermanent?: boolean;
      qualificationId?: number;
      qualificationBusType?: number;
      startingTime?: number;
      qualificationBusName?: string;
      endingTime?: number;
      qualificationName?: string;
      qualificationNo?: string;
    }[];
    displayInfo?: {
      imageFile?: string[];
      slogan?: string;
      logoUrl?: string;
    };
    storeName?: string;
    storeSource?: string;
  };
}
export interface CreateStoreResponse {
  data?: {
    storeId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11901001001, 11901001000, 11901001003

// ============================================================
// 更新门店信息  (updateStore)
// JD method: PATCH.sp-store.v0.stores._storeId   HTTP: PATCH
// 已创建的门店，通过该接口进行门店信息修改，包含基本信息，门店状态。
// ============================================================
export interface UpdateStoreRequest {
  storeId: string;
  storeUpdateRequest?: {
    addressInfo?: {
      coordinate?: string;
      address?: string;
      fullAddress?: string;
      addName?: string;
      addCode?: number;
      addCode4?: number;
    };
    contactInfo?: {
      phone?: string;
      mobile?: string;
    };
    extStoreId?: string;
    venderId?: number;
    type?: number;
    extendInfo?: {
      storeOpenTimeDaySt?: string;
      groupIdList?: number[];
      extendJson?: string;
      storeOpenTimeDayJSONArrayString?: string;
    };
    storeStatus?: number;
    categoryInfo?: {
      categoryId2?: number;
      categoryName?: string;
    };
    qualificationInfo?: {
      imgUrl?: string;
      isPermanent?: boolean;
      qualificationId?: number;
      startingTime?: number;
      endingTime?: number;
    }[];
    displayInfo?: {
      imageFile?: string[];
      slogan?: string;
      logoUrl?: string;
    };
    storeName?: string;
    storeSource?: string;
  };
}
export interface UpdateStoreResponse {
  data?: {
    storeId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11901001002, 11901001000

// ============================================================
// 修改门店围栏  (patchStoreFence)
// JD method: PATCH.sp-store.v0.stores._storeId.fences   HTTP: PATCH
// POP、自营商家，在开展门店/仓业务时，可以通过该接口配置围栏信息，该接口支持一店发全国的快递运输围栏配置、同城配送的围栏配置，及类自营业务的围栏。参见接口字段描述入参调用。
// ============================================================
export interface PatchStoreFenceRequest {
  storeId: string;
  patchStoreFenceRequest: {
    type?: number;
    pin?: string;
    venderId?: number;
    fenceDTO: {
      fenceType: number;
      deliveryFenceDTO?: {
        deliveryFenceType?: number;
        deliveryFenceAreaDTOList?: {
          deliveryFenceAreaDTOListItem?: {
            countyId?: number;
            cityId?: number;
            provinceId?: number;
          };
        }[];
      };
      instantDeliveryFenceDTO?: {
        instantDeliveryFenceType?: number;
        instantDeliveryFenceCoordinates?: string;
        instantDeliveryFenceRadius?: number;
      };
      cityFenceDTO?: {
        authKey?: string;
        authVenderAccount?: string;
        scopeType?: string;
        storeToCAddressList?: {
          storeToCAddressListItem?: {
            provinceId?: number;
            provinceName?: string;
            cityId?: number;
            cityName?: string;
            countyId?: number;
            countyName?: string;
            storeAddress?: string;
          };
        }[];
        storeToBAddressList?: {
          storeToBAddressListItem?: {
            provinceId?: number;
            provinceName?: string;
            cityId?: number;
            cityName?: string;
            countyId?: number;
            countyName?: string;
            storeAddress?: string;
          };
        }[];
      };
    };
  };
}
export interface PatchStoreFenceResponse {
  data?: {
    deliveryFenceDTO?: {
      deliveryFenceType?: number;
      deliveryFenceAreaDTOList?: {
        deliveryFenceAreaDTOListItem?: {
          countyId?: number;
          cityId?: number;
          provinceId?: number;
        };
      }[];
    };
    fenceType?: number;
    instantDeliveryFenceDTO?: {
      instantDeliveryFenceType?: number;
      instantDeliveryFenceCoordinates?: string;
      instantDeliveryFenceRadius?: number;
    };
    cityFenceDTO?: {
      authKey?: string;
      authVenderAccount?: string;
      scopeType?: string;
      storeToCAddressList?: {
        storeToCAddressListItem?: {
          provinceId?: number;
          provinceName?: string;
          cityId?: number;
          cityName?: string;
          countyId?: number;
          countyName?: string;
          storeAddress?: string;
        };
      }[];
      storeToBAddressList?: {
        storeToBAddressListItem?: {
          provinceId?: number;
          provinceName?: string;
          cityId?: number;
          cityName?: string;
          countyId?: number;
          countyName?: string;
          storeAddress?: string;
        };
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
  // 错误码: 11901012506, 11901012503, 11901012502, 11901012505, 11901012504, 11901011003, 11901012004, 11901011002, 11901012003, 11901012501, 11901011005, 11901012005, 11901011004, 11901011001, 11901012002, 11901013001, 11901012001

// ============================================================
// 查询门店围栏  (getStoreFence)
// JD method: GET.sp-store.v0.stores._storeId.fences   HTTP: GET
// 通过京东门店ID或外部商家门店，查询已配置的门店/仓的围栏数据，支持POP、自营业务。
围栏类型覆盖快递运输围栏，同城配送的围烂，类自营业务的围栏。
// ============================================================
export interface GetStoreFenceRequest {
  storeId: string;
  getStoreFenceRequest: {
    type?: number;
    fenceType: number;
    authVenderAccount?: string;
    authKey?: string;
    venderId?: number;
    pin?: string;
  };
}
export interface GetStoreFenceResponse {
  data?: {
    fenceType?: number;
    deliveryFenceDTO?: {
      deliveryFenceType?: number;
      deliveryFenceAreaDTOList?: {
        deliveryFenceAreaDTOListItem?: {
          countyId?: number;
          cityId?: number;
          provinceId?: number;
        };
      }[];
    };
    instantDeliveryFenceDTO?: {
      instantDeliveryFenceType?: number;
      instantDeliveryFenceCoordinates?: string;
      instantDeliveryFenceRadius?: number;
    };
    cityFenceDTO?: {
      authKey?: string;
      authVenderAccount?: string;
      scopeType?: string;
      storeToCAddressList?: {
        storeToCAddressListItem?: {
          provinceId?: number;
          provinceName?: string;
          cityId?: number;
          cityName?: string;
          countyId?: number;
          countyName?: string;
          storeAddress?: string;
        };
      }[];
      storeToBAddressList?: {
        storeToBAddressListItem?: {
          provinceId?: number;
          provinceName?: string;
          cityId?: number;
          cityName?: string;
          countyId?: number;
          countyName?: string;
          storeAddress?: string;
        };
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
  // 错误码: 11901012008, 11901012502, 11901012007, 11901012009, 11901011003, 11901011002, 11901012501, 11901011005, 11901011004, 11901012005, 11901011001, 11901012002, 11901013001