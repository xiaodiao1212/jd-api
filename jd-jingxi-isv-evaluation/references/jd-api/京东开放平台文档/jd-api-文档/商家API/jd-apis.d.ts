// ============================================================
// 京东开放平台 - 商家API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 7 个接口
// ============================================================
// ============================================================
// 分页查询商家基本信息列表  (listVenders)
// JD method: GET.sp-seller.v0.venders   HTTP: GET
// 分页查询商家基本信息列表
// ============================================================
export interface ListVendersRequest {
  listVendersRequest: {
    accountType: number;
    pageSize: number;
    page: number;
    scopeSet: {
      scopeSetItem?: string;
    };
    account: string;
  };
}
export interface ListVendersResponse {
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    venderId?: number;
    venderBaseInfo?: {
      venderStatus?: number;
      colType?: number;
      companyId?: number;
      companyName?: string;
    };
    shopBaseInfo?: {
      shopId?: number;
      shopName?: string;
      mainFirstCategoryId?: number;
      mainFirstCategoryName?: string;
      type?: number;
    };
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1041040005, 10401001001, 1041040006, 1041040009, 1041040008

// ============================================================
// 获取商家基本信息  (getVender)
// JD method: GET.sp-seller.v0.venderinfo   HTTP: GET
// 查询商家基本信息，主要包含：店铺名称，商家状态，店铺编号，商家入驻类型
// ============================================================
export interface GetVenderRequest {
  getVenderRequest: {
    scopeSet: {
      scopeSetItem?: string;
    };
    venderId: number;
  };
}
export interface GetVenderResponse {
  data?: {
    venderId?: number;
    venderBaseInfo?: {
      companyId?: number;
      venderName?: string;
      companyType?: number;
      companyName?: string;
      venderStatus?: number;
      colType?: number;
    };
    shopBaseInfo?: {
      shopId?: number;
      shopName?: string;
      openTime?: number;
      logoUrl?: string;
      introduction?: string;
      mainFirstCategoryId?: number;
      mainFirstCategoryName?: string;
      mainSecondCategoryId?: number;
      mainSecondCategoryName?: string;
      validPeriodStartTime?: number;
      validPeriodEndTime?: number;
      principal?: string;
      saleDeptId?: number;
      vendorCode?: string;
      type?: number;
      status?: number;
    };
    venderBusinessInfo?: {
      businessModelKey?: string;
      businessModelName?: string;
      businessExtAttribute?: Record<string, unknown>;
      businessIdMap?: Record<string, unknown>;
    };
    venderExtInfo?: {
      productCount?: number;
      afsStatus?: number;
      businessGroupCode?: string;
    };
    venderBindRelationInfo?: {
      bindRelationType?: number;
      bindRelationId?: string;
    };
    venderPayTimeLimitRuleList?: {
      venderPayTimeLimitRuleListItem?: {
        ruleType?: number;
        timeLimit?: string;
        startTime?: number;
        endTime?: number;
      };
    }[];
    venderBelongInfo?: {
      venderBelongType?: number;
      venderBelongValue?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10401001001, 1041040002

// ============================================================
// 获取商家地址  (listVenderAddresses)
// JD method: GET.sp-seller.v0.venders.self.addresses   HTTP: GET
// 获取商家地址信息，包括发货地址、售后地址
// ============================================================
export interface ListVenderAddressesRequest {
  request?: {
    addressType: number;
    venderId?: number;
  };
}
export interface ListVenderAddressesResponse {
  success?: boolean;
  data?: {
    addressType?: number;
    addressId?: number;
    contact?: string;
    mobile?: string;
    zipCode?: string;
    fullAddress?: string;
    defaultAddressFlag?: boolean;
    createdTime?: number;
    modifiedTime?: number;
    fullAreaIdList?: number[];
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10405001001

// ============================================================
// 获取商家经营类目  (listVenderCategories)
// JD method: GET.sp-seller.v0.vender-categories   HTTP: GET
// 获取POP/自营商家发品时经营类目，包括可申请经营类目（仅支持POP）和可经营类目。
// ============================================================
export interface ListVenderCategoriesRequest {
  param1?: {
    pin?: string;
    venderId?: number;
    categoryIdList?: number[];
    sceneType: number;
  };
}
export interface ListVenderCategoriesResponse {
  success?: boolean;
  data?: {
    categoryId?: number;
    parentCategoryId?: number;
    categoryName?: string;
    categoryLevel?: number;
    leafFlag?: boolean;
    selectableFlag?: boolean;
    nonSelectableCode?: string;
    nonSelectableCodeDesc?: string;
    subCategories?: {
      categoryId?: number;
      parentCategoryId?: number;
      categoryName?: string;
      categoryLevel?: number;
      leafFlag?: boolean;
      selectableFlag?: boolean;
      nonSelectableCode?: string;
      nonSelectableCodeDesc?: string;
      subCategories?: {
        categoryId?: number;
        categoryName?: string;
        categoryLevel?: number;
        leafFlag?: boolean;
        selectableFlag?: boolean;
        nonSelectableCode?: string;
        nonSelectableCodeDesc?: string;
        subCategories?: {
          categoryId?: number;
          categoryName?: string;
          categoryLevel?: number;
          leafFlag?: boolean;
          selectableFlag?: boolean;
          nonSelectableCode?: string;
          nonSelectableCodeDesc?: string;
          subCategories?: {
            categoryId?: number;
            categoryName?: string;
            categoryLevel?: number;
            leafFlag?: boolean;
            selectableFlag?: boolean;
            nonSelectableCode?: string;
            nonSelectableCodeDesc?: string;
          }[];
        }[];
      }[];
    }[];
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10402001001

// ============================================================
// 获取商家经营品牌  (listVenderBrands)
// JD method: GET.sp-seller.v0.vender-brands   HTTP: GET
// 获取商家品牌列表，由于品牌归一调整建议使用调用可选品牌进行发品，入参queryType=2
// ============================================================
export interface ListVenderBrandsRequest {
  param1: {
    venderId: number;
    pin: string;
    categoryId?: number;
    queryType: number;
    page: number;
    pageSize: number;
    brandName?: string;
    authStatus?: number;
  };
}
export interface ListVenderBrandsResponse {
  success?: boolean;
  data?: {
    brandName?: string;
    brandId?: number;
    brandEnName?: string;
    brandZhName?: string;
    authStatus?: number;
  }[];
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10403002501, 10403003001, 10403001001, 10403009999

// ============================================================
// 批量校验品牌类目发品权限  (postBrandCategoryValidation)
// JD method: POST.sp-seller.v0.brand-categories.validations   HTTP: POST
// 批量校验品牌类目信息，校验商家传入的类目品牌是否具有发品权限。
// ============================================================
export interface PostBrandCategoryValidationRequest {
  param1: {
    venderId: number;
    appKey: string;
    brandCategoryValidationList: {
      categoryId?: number;
      brandId?: number;
    }[];
  };
}
export interface PostBrandCategoryValidationResponse {
  success?: boolean;
  data?: {
    categoryId?: number;
    brandId?: number;
    passed?: boolean;
    reason?: string;
  }[];
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
}
  // 错误码: 10404001002, 10404001001, 10404003001, 1041030003, 10404009999

// ============================================================
// 获取运费模版详情  (getShippingTemplate)
// JD method: GET.sp-seller.v0.shipping-templates._templateId   HTTP: GET
// 根据模板Id获取模板规则（货到付款和在线支付）
// ============================================================
export interface GetShippingTemplateRequest {
  templateId: number;
  request: {
    pin?: string;
  };
}
export interface GetShippingTemplateResponse {
  data?: {
    types?: {
      typesItem?: {
        typeCode?: number;
        typeDesc?: string;
        rules?: {
          rulesItem?: {
            id?: number;
            defaultFlag?: boolean;
            areas?: string;
            firstNum?: Record<string, unknown>;
            firstPrice?: Record<string, unknown>;
            addNum?: Record<string, unknown>;
            addPrice?: Record<string, unknown>;
          };
        }[];
      };
    }[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10407001002, 10407001001, 10407001003, 10407001008