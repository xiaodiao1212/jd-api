// ============================================================
// 京东开放平台 - 商品API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 94 个接口
// ============================================================
// ============================================================
// SKU列表查询  (listSkus)
// JD method: GET.sp-product.v0.skus   HTTP: GET
// 查询商品的SKU列表信息，支持分页和筛选。
// ============================================================
export interface ListSkusRequest {
  listSkusRequest: {
    pageSize: number;
    productIdList?: number[];
    minStockNum?: number;
    venderId?: number;
    productName?: string;
    validSet?: {
      validSetItem?: number;
    };
    skuName?: string;
    itemNum?: string;
    skuStatusList?: number[];
    brandIdList?: number[];
    colType?: number;
    sortBy?: string;
    categoryIdList?: number[];
    skuIdList?: number[];
    scopeSet: {
      scopeSetItem?: string;
    };
    createStartTime?: number;
    sortType?: string;
    createEndTime?: number;
    outerIdList?: string[];
    page: number;
    modifiedStartTime?: number;
    modifiedEndTime?: number;
    maxStockNum?: number;
  };
}
export interface ListSkusResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    skuId?: number;
    productId?: number;
    skuName?: string;
    productName?: string;
    skuImage?: string;
    createTime?: number;
    modifiedTime?: number;
    onlineTime?: number;
    offlineTime?: number;
    skuStatus?: number;
    outerId?: string;
    upc?: string;
    enable?: number;
    standardId?: number;
    itemNum?: string;
    salerCode?: string;
    saleAttributeDTOList?: {
      saleAttributeDTOListItem?: {
        attributeId?: string;
        attributeValues?: Record<string, unknown>;
        attributeValueAlias?: Record<string, unknown>;
        index?: number;
        attributeValuesSeqNo?: Record<string, unknown>;
      };
    }[];
    featureList?: {
      featureListItem?: {
        key?: string;
        value?: string;
      };
    }[];
    categoryDTO?: {
      thirdCategoryId?: number;
      lastCategoryId?: number;
    };
    brandDTO?: {
      brandId?: number;
    };
    stockNum?: number;
    jdPrice?: Record<string, unknown>;
    inclusiveArrivalPrice?: Record<string, unknown>;
    commentSummaryDTO?: {
      goodRate?: Record<string, unknown>;
      initiativeCommentCount?: number;
      commentCount?: number;
    };
    healthScoreDTO?: {
      score?: number;
      itemNum?: number;
      scoreExistFlag?: boolean;
      inBlackCateFlag?: boolean;
    };
    reserveDTO?: {
      advanceType?: number;
      reserveTypeName?: string;
      advancePromiseString?: string;
    };
    gaeaFlag?: boolean;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001002, 10106004000, 10102004000

// ============================================================
// 商品列表查询  (listProducts)
// JD method: GET.sp-product.v0.products   HTTP: GET
// 查询商品列表信息，支持分页和筛选。
// ============================================================
export interface ListProductsRequest {
  listProductsRequest: {
    scopeSet: {
      scopeSetItem?: string;
    };
    productIdList?: number[];
    modifiedStartTime?: number;
    transportId?: number;
    maxSalesVolume?: number;
    minStockNum?: number;
    venderId?: number;
    offlineEndTime?: number;
    pageSize: number;
    templateId?: number;
    productName?: string;
    shopCategoryIdList?: number[];
    itemNum?: string;
    promiseId?: number;
    brandIdList?: number[];
    colType?: number;
    sortBy?: string;
    minJdPrice?: Record<string, unknown>;
    skuIdList?: number[];
    upcCode?: string;
    productType?: number;
    onlineEndTime?: number;
    offlineStartTime?: number;
    salerCodeList?: string[];
    onlineStartTime?: number;
    maxJdPrice?: Record<string, unknown>;
    productStatusList?: number[];
    categoryIdList?: number[];
    createStartTime?: number;
    sortType?: string;
    createEndTime?: number;
    minSalesVolume?: number;
    page: number;
    modifiedEndTime?: number;
    maxStockNum?: number;
  };
}
export interface ListProductsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    productId?: number;
    productName?: string;
    logo?: string;
    productStatus?: number;
    itemNum?: string;
    createTime?: number;
    modifiedTime?: number;
    onlineTime?: number;
    offlineTime?: number;
    salesVolume?: number;
    colType?: number;
    model?: string;
    outerId?: string;
    upcCode?: string;
    weight?: Record<string, unknown>;
    width?: number;
    height?: number;
    length?: number;
    placeOfProduction?: string;
    standardId?: number;
    templateId?: string;
    shopCategoryIdSet?: {
      shopCategoryIdSetItem?: number;
    };
    shopCategoryPathList?: string[];
    specialServicesList?: string[];
    categoryDTO?: {
      thirdCategoryId?: number;
      lastCategoryId?: number;
      lastCategoryName?: string;
    };
    brandDTO?: {
      brandId?: number;
      brandName?: string;
    };
    priceDTO?: {
      jdPrice?: Record<string, unknown>;
      minJdPrice?: Record<string, unknown>;
      maxJdPrice?: Record<string, unknown>;
      marketPrice?: Record<string, unknown>;
      costPrice?: Record<string, unknown>;
    };
    stockNum?: number;
    logisticsDTO?: {
      transportId?: number;
      delivery?: string;
      packListing?: string;
      promiseId?: number;
    };
    adWordsDTO?: {
      words?: string;
      url?: string;
      urlWords?: string;
    };
    afterSaleServiceDTO?: {
      afterSaleService?: string;
      afterSaleServiceDesc?: string;
      designConcept?: string;
    };
    productRateDTO?: {
      taxCode?: string;
      taxRate?: Record<string, unknown>;
      taxCheapFlag?: number;
      taxCheapContent?: string;
      zeroTaxRate?: number;
    };
    productFrontDetailDTO?: {
      introductions?: string;
      appIntroductions?: string;
      zhuangBaId?: string;
      appZhuangBaId?: string;
      zhuangBaIntroduction?: string;
      appZhuangBaIntroduction?: string;
      introductionUseFlag?: string;
      appIntroductionUseFlag?: string;
      fitCaseHtmlPc?: string;
      fitCaseHtmlApp?: string;
    };
    imageDTOList?: {
      imageDTOListItem?: {
        imageId?: number;
        colorId?: string;
        imgUrl?: string;
        imgRectangleUrl?: string;
        index?: number;
        mainFlag?: number;
      };
    }[];
    features?: {
      featuresItem?: {
        key?: string;
        value?: string;
      };
    }[];
    presaleInfoDTO?: {
      id?: number;
      type?: number;
      presalePrice?: Record<string, unknown>;
      presaleStartTime?: number;
      presaleEndTime?: number;
      shipTime?: number;
      yn?: number;
    };
    promotionDTOList?: {
      promotionDTOListItem?: {
        promotionTypeName?: string;
        promotionDetailDTOList?: {
          promotionDetailDTOListItem?: {
            name?: string;
            promotionId?: number;
          };
        }[];
      };
    }[];
    healthScoreDTO?: {
      score?: number;
      itemNum?: number;
      scoreExist?: boolean;
      inBlackCate?: boolean;
    };
    commentSummaryDTO?: {
      goodRate?: Record<string, unknown>;
      initiativeCommentCount?: number;
      commentCount?: number;
    };
    priceStarSkuNum?: number;
    salerCode?: string;
    gaeaFlag?: boolean;
    areaRestrictionProductTemplateDTOList?: {
      areaRestrictionProductTemplateDTOListItem?: {
        templateId?: number;
        type?: number;
        bindTime?: number;
      };
    }[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10101004000, 10101001002

// ============================================================
// 获取商品详情  (getProduct)
// JD method: GET.sp-product.v0.products._productId   HTTP: GET
// 获取商品详细信息接口，用于查询商品的详细数据。
// ============================================================
export interface GetProductRequest {
  id: number;
  request: {
    pin: string;
    venderId?: number;
    scene: string;
    spuSkuApplyGray?: boolean;
  };
}
export interface GetProductResponse {
  data?: {
    productInfo?: {
      productTitle?: {
        title?: string;
        titleBrandName?: string;
        recommendWords?: {
          recommendWord?: string;
        };
      };
      productId?: number;
      productName?: string;
      length?: Record<string, unknown>;
      width?: Record<string, unknown>;
      height?: Record<string, unknown>;
      weight?: Record<string, unknown>;
      createdTime?: number;
      modifiedTime?: number;
      model?: string;
      itemNum?: string;
      upcCode?: string;
      productStatus?: {
        yn?: number;
        productStatus?: number;
        onlineTime?: number;
        offlineTime?: number;
        productStatusNew?: number;
      };
      brandInfo?: {
        brandId?: number;
        brandName?: string;
        enBrand?: string;
        zhBrand?: string;
        titleBrandName?: string;
        localName?: string;
        mainBrandId?: number;
      };
      categoryDetail?: {
        thirdCategoryId?: number;
        lastCategoryId?: number;
        firstCategoryId?: number;
        secondCategoryId?: number;
        firstCategoryName?: string;
        secondCategoryName?: string;
        thirdCategoryName?: string;
        lastCategoryName?: string;
      };
      priceInfo?: {
        marketPrice?: Record<string, unknown>;
        jdPrice?: Record<string, unknown>;
        costPrice?: Record<string, unknown>;
        agreementPrice?: Record<string, unknown>;
        agreementPriceVersion?: string;
        vouchersPrice?: string;
        limitPrice?: string;
        referencePrice?: string;
        referencePriceUnit?: string;
        ouId?: string;
        lineationPriceInfo?: {
          lineationPrice?: Record<string, unknown>;
          lineationPriceUrl?: string;
          lineationPriceType?: number;
          lineationPriceAppReason?: string;
          priceVersion?: number;
        };
        maxSalePrice?: Record<string, unknown>;
        minSalePrice?: Record<string, unknown>;
        salePriceRangeErrorTips?: string;
        priceRef?: string;
        kaPrice?: Record<string, unknown>;
      };
      operationStaffs?: {
        operationStaffsItem?: {
          postType?: string;
          name?: string;
          pin?: string;
          pinType?: string;
        };
      };
      productTax?: {
        taxCode?: string;
        taxRate?: Record<string, unknown>;
        taxCheapFlag?: boolean;
        taxCheapContent?: string;
        zeroTaxRate?: number;
        operateInvoiceFlag?: boolean;
      };
      vehicleInfo?: {
        carGroupName?: string;
      };
      afterServiceInfo?: {
        warranty?: string;
        shelfLife?: number;
        service?: string;
        serviceDesc?: string;
        serviceFeeId?: number;
        tel?: string;
        webSite?: string;
        aftersales?: string;
        owner?: number;
        productTaxInfo?: {
          taxCode?: string;
          taxRate?: Record<string, unknown>;
          taxCheapFlag?: boolean;
          taxCheapContent?: string;
          zeroTaxRate?: number;
          operateInvoiceFlag?: boolean;
        };
        designConcept?: string;
        wreadme?: string;
      };
      goodsAttrInfos?: {
        goodsAttrInfosItem?: {
          key?: string;
          attrId?: number;
          attrName?: string;
          level?: number;
          type?: number;
          orderSort?: number;
          inputType?: number;
          countryArea?: number;
          cascadeGroupId?: number;
          cascadeGroupName?: string;
          cascadeGroupLevel?: number;
          cascadeGroups?: {
            cascadeGroupsItem?: {
              attrId?: number;
              attrName?: string;
              values?: {
                valuesItem?: {
                  attrValue?: string;
                  attrValueAlias?: string;
                  expand?: string;
                  unit?: string;
                };
              };
            };
          };
          comGroupId?: number;
          scope?: number;
          valueUnit?: string;
          valCount?: number;
          comAttrId?: number;
          graphic?: string;
          search?: number;
          groupId?: number;
          attributeLock?: number;
          inputPercentFlag?: boolean;
          lockStatus?: number;
          values?: {
            valuesItem?: {
              attrValue?: string;
              attrValueAlias?: string;
              existSubAttrValue?: boolean;
              expand?: string;
              unit?: string;
              remark?: string;
              subAttributeValueList?: {
                subAttributeValueListItem?: {
                  attrValue?: string;
                  attrValueAlias?: string;
                  existSubAttrValue?: boolean;
                  expand?: string;
                  unit?: string;
                  remark?: string;
                };
              };
            };
          };
        };
      };
      productDetailDesc?: {
        desc?: string;
        zhuangBaId?: string;
        zhuangBaUseFlag?: string;
        zhuangBaDesc?: string;
        fitmentNote?: string;
        modelUseFlag?: string;
        mobileDesc?: string;
        mobileZhuangBaId?: string;
        mobileZhuangBaUseFlag?: boolean;
        mobileZhuangBaDesc?: string;
        mobileFitmentNote?: string;
        packListing?: string;
        wreadme?: string;
        mpDesc?: string;
      };
      features?: {
        featuresItem?: {
          key?: string;
          value?: string;
        };
      };
      customAttrInfos?: {
        customAttrInfosItem?: {
          attrId?: string;
          name?: string;
          unit?: string;
          fatherAttrId?: string;
          index?: number;
          customPropsMode?: string;
          customAttrValues?: {
            customAttrValuesItem?: {
              value?: string;
              index?: number;
              prefix?: string;
              suffix?: string;
              complexExpands?: {
                complexExpandsItem?: {
                  index?: number;
                  prefix?: string;
                  suffix?: string;
                  expand?: string;
                };
              };
            };
          };
          features?: {
            featuresItem?: {
              key?: string;
              value?: string;
            };
          };
        };
      };
      logisticsInfo?: {
        packListing?: string;
        packSpecification?: number;
        transportId?: number;
        promiseId?: number;
        delivery?: string;
        boxRegulations?: number;
        unit?: string;
        stores?: {
          storesItem?: {
            dcid?: number;
            sid?: number;
          };
        };
        promiseBindType?: string;
      };
      wareLocation?: string;
      specialServices?: {
        element?: string;
      };
      outerId?: string;
      gaeaProductFlag?: boolean;
      kaFlag?: boolean;
      colType?: number;
      wareStatus?: number;
      snRuleInfoList?: {
        snRuleInfoListItem?: {
          digit?: string;
          preVal?: string;
          id?: number;
        };
      };
      productOil?: {
        productOilNumber?: Record<string, unknown>;
        productOilUnit?: string;
      };
      snFlag?: boolean;
      jxSpuId?: string;
      jxppSource?: number;
      adword?: string;
      spuAttrLockedFlag?: boolean;
      lockFieldList?: {
        element?: string;
      };
      showUpcFlag?: boolean;
      ocrUrl?: string;
      hasSkuDown?: boolean;
      industrialStandardProductCode?: string;
      wanzhentongFlag?: boolean;
      saleState?: number;
      saleStateName?: string;
      batchNumbers?: string;
      itemType?: number;
      stockNum?: number;
      shopCategoryIdList?: {
        element?: number;
      };
      to7ReturnFlag?: boolean;
      lockCorrectProps?: {
        lockCorrectPropsItem?: {
          correctAttrValue?: Record<string, unknown>;
          lockStatus?: number;
          correctAttributeValues?: {
            correctAttributeValuesItem?: {
              attrValueId?: string;
              attrValueName?: string;
              attrValueAuditStatus?: number;
              attrValueAuditReason?: string;
            };
          };
          attrValues?: Record<string, unknown>;
          attrId?: string;
          attrValueAlias?: Record<string, unknown>;
          index?: number;
          units?: Record<string, unknown>;
        };
      };
      specialServiceCode?: string;
      locMatchInfo?: {
        venderId?: number;
        wareId?: number;
        activityBegin?: string;
        activityEnd?: string;
        addressList?: {
          addressListItem?: {
            label?: string;
            value?: string;
          };
        };
        detailAddress?: string;
        coordinate?: string;
        activitiesIllustration?: string;
        activityAgreement?: number;
        registrationField?: number;
      };
    };
    skuList?: {
      skuListItem?: {
        skuId?: number;
        productId?: number;
        outerId?: string;
        skuName?: string;
        length?: Record<string, unknown>;
        width?: Record<string, unknown>;
        height?: Record<string, unknown>;
        weight?: Record<string, unknown>;
        logo?: string;
        upcCode?: string;
        createdTime?: number;
        modifiedTime?: number;
        valid?: number;
        skuEnableStatus?: number;
        stockNum?: number;
        currencySpuId?: number;
        imgGroupId?: string;
        imgTag?: number;
        priceInfo?: {
          marketPrice?: Record<string, unknown>;
          jdPrice?: Record<string, unknown>;
          costPrice?: Record<string, unknown>;
          agreementPrice?: Record<string, unknown>;
          agreementPriceVersion?: string;
          vouchersPrice?: string;
          limitPrice?: string;
          referencePrice?: string;
          referencePriceUnit?: string;
          ouId?: string;
          lineationPriceInfo?: {
            lineationPrice?: Record<string, unknown>;
            lineationPriceUrl?: string;
            lineationPriceType?: number;
            lineationPriceAppReason?: string;
            priceVersion?: number;
          };
          maxSalePrice?: Record<string, unknown>;
          minSalePrice?: Record<string, unknown>;
          priceRef?: string;
        };
        saleAttrs?: {
          saleAttrsItem?: {
            attrId?: string;
            attrName?: string;
            attrValues?: string;
            attrValueAlias?: string;
            attrValuesSeqNo?: number;
            dim?: number;
            mappingId?: string;
            templateSkuProps?: {
              templateSkuPropsItem?: {
                id?: number;
                value?: string;
                unit?: string;
                valueId?: number;
              };
            };
            indexId?: number;
            attrKey?: string;
            categoryId?: number;
            originCategoryId?: number;
            color?: boolean;
          };
        };
        customAttribute?: {
          customAttributeItem?: {
            attrId?: string;
            name?: string;
            unit?: string;
            fatherAttrId?: string;
            index?: number;
            customPropsMode?: string;
            customAttrValues?: {
              customAttrValuesItem?: {
                value?: string;
                index?: number;
                prefix?: string;
                suffix?: string;
                complexExpands?: {
                  complexExpandsItem?: {
                    index?: number;
                    prefix?: string;
                    suffix?: string;
                    expand?: string;
                  };
                };
              };
            };
            features?: {
              featuresItem?: {
                key?: string;
                value?: string;
              };
            };
          };
        };
        features?: {
          featuresItem?: {
            key?: string;
            value?: string;
          };
        };
        logistics?: {
          packListing?: string;
          packSpecification?: number;
          transportId?: number;
          promiseId?: number;
          delivery?: string;
          boxRegulations?: number;
          unit?: string;
          promiseBindType?: string;
        };
        suiteSkus?: {
          suiteSkusItem?: {
            skuId?: number;
            count?: number;
            showFlag?: number;
            orderSort?: number;
          };
        };
        vehicleInfo?: {
          carGroupName?: string;
        };
        skuStats?: {
          frontShieldStatus?: number;
          frontEnableStatus?: number;
          onOffShelfStatus?: number;
          onShelfTime?: number;
        };
        uuid?: string;
        itemNum?: string;
        incrementStockNum?: number;
        saleAttrTemplateId?: string;
        productDetailDesc?: {
          desc?: string;
          zhuangBaId?: string;
          zhuangBaUseFlag?: string;
          zhuangBaDesc?: string;
          fitmentNote?: string;
          modelUseFlag?: string;
          mobileDesc?: string;
          mobileZhuangBaId?: string;
          mobileZhuangBaUseFlag?: boolean;
          mobileZhuangBaDesc?: string;
          mobileFitmentNote?: string;
          packListing?: string;
          wreadme?: string;
        };
        goodsAttrInfos?: {
          goodsAttrInfosItem?: {
            key?: string;
            attrId?: number;
            attrName?: string;
            countryArea?: number;
            values?: {
              valuesItem?: {
                attrValue?: string;
                attrValueAlias?: string;
                existSubAttrValue?: boolean;
                expand?: string;
                unit?: string;
                remark?: string;
              };
            };
          };
        };
        skuSpuKeyAttrVal?: string;
      };
    };
    material?: {
      mainImages?: {
        mainImagesItem?: {
          uuid?: string;
          imageInfoList?: {
            imageInfoListItem?: {
              imgUrl?: string;
              orderSort?: number;
              colorId?: string;
              primaryFlag?: boolean;
              imgId?: string;
              imgDfsUrl?: string;
              status?: number;
              verifyDesc?: string;
              gptFlag?: boolean;
              imgName?: string;
              imgType?: string;
              imgWidth?: number;
              imgHeight?: number;
              imgSize?: number;
            };
          };
        };
      };
      rectangleImages?: {
        rectangleImagesItem?: {
          uuid?: string;
          imageInfoList?: {
            imageInfoListItem?: {
              imgUrl?: string;
              orderSort?: number;
              colorId?: string;
              gptFlag?: boolean;
            };
          };
        };
      };
      transparentImages?: {
        transparentImagesItem?: {
          uuid?: string;
          imageInfoList?: {
            imageInfoListItem?: {
              imgUrl?: string;
              orderSort?: number;
              colorId?: string;
            };
          };
        };
      };
      whiteBackGroundImages?: {
        whiteBackGroundImagesItem?: {
          uuid?: string;
          whiteBackGroundImage?: {
            skuId?: number;
            imageUrl?: string;
            imageUuid?: string;
            useAlgRec?: string;
            origalImageUrl?: string;
            status?: number;
            desc?: string;
            modified?: boolean;
            uuid?: string;
          };
        };
      };
      videos?: {
        videosItem?: {
          uuid?: number;
          videoIds?: {
            element?: number;
          };
        };
      };
      publishScheduleFlag?: boolean;
      multiVideo?: {
        skuVideoRelationList?: {
          skuVideoRelationListItem?: {
            tagId?: number;
            tagName?: string;
            tagRule?: {
              maxVideoNum?: number;
              salerVideoTag?: number;
            };
            sort?: number;
            skuVideoList?: {
              skuVideoListItem?: {
                id?: number;
                status?: number;
                indexImage?: string;
                title?: string;
                agentVideoId?: number;
                contentId?: string;
                videoFrom?: number;
                videoId?: number;
                statusName?: string;
                playUrl?: string;
                duration?: number;
              };
            };
          };
        };
        status?: boolean;
      };
      ggtImages?: {
        ggtImagesItem?: {
          uuid?: string;
          imageUrl?: string;
        };
      };
      shopGuideImages?: {
        shopGuideImagesItem?: {
          uuid?: string;
          imgUrl?: string;
        };
      };
    };
    extendInfoList?: {
      extendInfoListItem?: {
        key?: string;
        value?: string;
      };
    };
    quaInfoList?: {
      quaInfoListItem?: {
        skuId?: string;
        type?: number;
        quaName?: string;
        endDate?: number;
        qcCode?: string;
        applicant?: string;
        quaModelList?: {
          quaModelListItem?: {
            modelType?: number;
            modelValue?: string;
          };
        };
        quaFileList?: {
          quaFileListItem?: {
            fileName?: string;
            fileSize?: number;
            fileType?: string;
          };
        };
        quaFeatures?: {
          quaFeaturesItem?: {
            featureKey?: string;
            featureVal?: string;
            featureName?: string;
            featureType?: number;
          };
        };
        entCode?: string;
      };
    };
    targetSkuIdGroups?: {
      targetSkuIdGroupsItem?: {
        pSkuId?: number;
        skuIds?: {
          skuId?: number;
        };
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
  // 错误码: 10101001002

// ============================================================
// 商品通用选项接口  (listProductOptions)
// JD method: GET.sp-product.v0.product-options   HTTP: GET
// 商品通用选项接口
// ============================================================
export interface ListProductOptionsRequest {
  listProductOptionsRequest: {
    lastCategoryId: number;
    optionCode: string;
    pin?: string;
  };
}
export interface ListProductOptionsResponse {
  data?: {
    id?: string;
    name?: string;
    remark?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10159001003, 10159001004, 10159001001, 10159001002

// ============================================================
// 根据类目获取商品发布模板列表  (listProductPublishTemplates)
// JD method: GET.sp-product.v0.product-schemas   HTTP: GET
// 根据类目获取商品发布模板列表，目前该列表只返回类目下对应的唯一schema模板
// ============================================================
export interface ListProductPublishTemplatesRequest {
  param?: {
    lastCategoryId: number;
    productId?: number;
    pin?: string;
    venderId?: string;
    appKey?: string;
    remoteIp?: string;
    scene: string;
    spuSkuApplyGray?: boolean;
  };
}
export interface ListProductPublishTemplatesResponse {
  traceId?: string;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  data?: string[];
  success?: boolean;
}
  // 错误码: 10105003001, 10105001002

// ============================================================
// 组件列表类目规则模版查询  (listComponents)
// JD method: GET.sp-product.v0.category-rule-templates._templateId.components   HTTP: GET
// 查询类目规则模版组件列表接口，目前支持价格组件查询
// ============================================================
export interface ListComponentsRequest {
  templateId: number;
  param: {
    lastCategoryId: number;
    productModel?: string;
    componentCodeList: {
      componentCode?: string;
    };
    brandId?: number;
    venderId?: number;
    thirdCategoryId: number;
    scene: string;
  };
}
export interface ListComponentsResponse {
  data?: {
    componentCode?: string;
    validateRuleList?: {
      validateRuleListItem?: {
        validateType?: string;
        validateRule?: string;
        validateTips?: string;
        validateValueType?: string;
        distZhChar?: string;
      };
    };
    schemaRule?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10105011002, 10105014001

// ============================================================
// 提交商品申请单部分更新  (patchProductApply)
// JD method: PATCH.sp-product.v0.product-applies._applyId   HTTP: PATCH
// 提交商品申请单部分更新的接口，用于商品信息申请单的部分更新。入参格式参考：https://joyspace.jd.com/pages/i2E7MJzxS89mF4giIztD
// ============================================================
export interface PatchProductApplyRequest {
  id: string;
  request: {
    productApplyDTO: {
      version?: number;
      id: string;
      limitInfoSubmitMethod?: number;
    };
    opType: number;
    scene?: string;
    venderId?: number;
    productInfo?: {
      categoryDetail?: {
        firstCategoryId?: number;
        secondCategoryId?: number;
        thirdCategoryId?: number;
        lastCategoryId?: number;
      };
      productId?: number;
    };
    targetSkuIdGroups?: {
      targetSkuIdGroupsItem?: {
        pSkuId?: number;
        skuIds?: number[];
      };
    }[];
    patchOperationList?: {
      patchOperationListItem?: {
        path?: string;
        value?: string;
      };
    }[];
  };
}
export interface PatchProductApplyResponse {
  data?: {
    id?: string;
    version?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10103001002, 10103004000

// ============================================================
// 查询商品申请列表  (listProductApplies)
// JD method: GET.sp-product.v0.product-applies   HTTP: GET
// 查询商家提交的商品申请列表信息。
// ============================================================
export interface ListProductAppliesRequest {
  listProductAppliesRequest: {
    productIdList?: number[];
    keeperStatus?: number;
    statusList?: number[];
    modifiedStartTime?: number;
    venderId?: number;
    modifiedEndTime?: number;
    createStartTime?: number;
    productName?: string;
    createEndTime?: number;
    auditEndTime?: number;
    auditStartTime?: number;
    productApplyType?: number;
    page: number;
    pageSize: number;
    sortBy: string;
    sortType: string;
    scopeSet?: {
      scopeSetItem?: string;
    };
  };
}
export interface ListProductAppliesResponse {
  data?: {
    applyId?: string;
    productId?: number;
    productName?: string;
    productImage?: string;
    version?: number;
    createTime?: number;
    modifiedTime?: number;
    auditTime?: number;
    productApplyType?: number;
    status?: number;
    pushStatus?: number;
    keeperStatus?: number;
    pushReason?: string;
    auditReason?: string;
    source?: string;
    gaeaFlag?: boolean;
    categoryDTO?: {
      thirdCategoryId?: number;
      lastCategoryId?: number;
    };
    features?: {
      featuresItem?: {
        key?: string;
        value?: string;
      };
    }[];
    versionFlag?: string;
    sceneType?: string;
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
  };
}
  // 错误码: 10103001002, 10103004000

// ============================================================
// 查询商品schema发品样例  (listProductApplyDemos)
// JD method: GET.sp-product.v0.product-apply-demos   HTTP: GET
// 查询商品schema发品样例，可通过入参京麦中的商品“名称”查询对应的schema，发品时可作为参考
支持查询到近3天内通过当前账号发布的商品信息（接口加白后可查询到对应信息）
// ============================================================
export interface ListProductApplyDemosRequest {
  listProductApplyDemosRequest: {
    productName: string;
    pin: string;
  };
}
export interface ListProductApplyDemosResponse {
  data?: {
    productName?: string;
    schema?: string;
  }[];
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
  success?: boolean;
}
  // 错误码: 10112003001

// ============================================================
// 批量编辑sku状态  (batchPutSkuStatus)
// JD method: PUT.sp-product.v0.sku-states.batch   HTTP: PUT
// 批量编辑sku上下架状态的接口。
// ============================================================
export interface BatchPutSkuStatusRequest {
  request: {
    statusType: number;
    skuStatusList: {
      productId?: number;
      skuIdSet?: {
        skuId?: number;
      };
    }[];
    downReason?: string;
    venderId?: number;
  };
}
export interface BatchPutSkuStatusResponse {
  data?: {
    skuId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10102011002, 10102014000

// ============================================================
// 批量编辑商品状态  (batchPutProductStatus)
// JD method: PUT.sp-product.v0.product-states.batch   HTTP: PUT
// 批量编辑商品上下架状态的接口。
// ============================================================
export interface BatchPutProductStatusRequest {
  request: {
    statusType: number;
    productIdList: number[];
    downReason?: string;
    venderId?: number;
    updateTime?: number;
  };
}
export interface BatchPutProductStatusResponse {
  data?: {
    productId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001002, 10106004000

// ============================================================
// 提交商品创建或者整版编辑申请  (postProductApply)
// JD method: POST.sp-product.v0.product-applies   HTTP: POST
// 提交商品创建或者整版编辑申请，用于新增商品信息和整版修改商品。
// ============================================================
export interface PostProductApplyRequest {
  request: {
    schema: string;
    productApplyDTO: {
      productId?: number;
      spuSkuApplyGray?: boolean;
      saveActionType?: number;
      limitInfoSubmitMethod?: number;
      categoryDTO?: {
        lastCategoryId: number;
      };
    };
    pin?: string;
    venderId?: number;
    scene: string;
    recommendId?: string;
  };
}
export interface PostProductApplyResponse {
  data?: {
    applyId?: string;
    productId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10103001002, 10103004000, 10103004001, 1010300506

// ============================================================
// 查询申请单详情  (getProductApply)
// JD method: GET.sp-product.v0.product-apply._applyId   HTTP: GET
// 根据applyId查询申请单详情信息，支持自营和POP，主要用于获取具体申请信息以及审核进度
// ============================================================
export interface GetProductApplyRequest {
  applyId: string;
  request: {
    pin: string;
    venderId?: number;
    scene: string;
  };
}
export interface GetProductApplyResponse {
  data?: {
    applyInfo?: {
      applyId?: string;
      applyTime?: number;
      productType?: number;
      state?: number;
      autoWFPID?: string;
      lastApproveTime?: number;
      keeperState?: number;
      isvAppKey?: string;
      secretStateFlag?: number;
      remindVenderOrder?: number;
      remindPsControlOrder?: number;
      dataVersion?: number;
      secretFlag?: boolean;
      createSource?: number;
      createdBy?: string;
      modifiedBy?: string;
      bossAuditTime?: string;
      bossAuditStatus?: number;
      draftComputeStatus?: number;
      source?: number;
      auditRecords?: {
        auditRecordsItem?: {
          opinion?: string;
          approved?: boolean;
        };
      };
    };
    productInfo?: {
      productTitle?: {
        title?: string;
        titleBrandName?: string;
        recommendWords?: {
          recommendWord?: string;
        };
      };
      productId?: number;
      productName?: string;
      length?: Record<string, unknown>;
      width?: Record<string, unknown>;
      height?: Record<string, unknown>;
      weight?: Record<string, unknown>;
      createdTime?: number;
      modifiedTime?: number;
      model?: string;
      itemNum?: string;
      upcCode?: string;
      productStatus?: {
        yn?: number;
        productStatus?: number;
        onlineTime?: number;
        offlineTime?: number;
      };
      brandInfo?: {
        brandId?: number;
        brandName?: string;
        enBrand?: string;
        zhBrand?: string;
        titleBrandName?: string;
        localName?: string;
        mainBrandId?: number;
      };
      categoryDetail?: {
        firstCategoryId?: number;
        firstCategoryName?: string;
        secondCategoryId?: number;
        secondCategoryName?: string;
        thirdCategoryId?: number;
        thirdCategoryName?: string;
        lastCategoryId?: number;
        lastCategoryName?: string;
      };
      priceInfo?: {
        marketPrice?: Record<string, unknown>;
        jdPrice?: Record<string, unknown>;
        costPrice?: Record<string, unknown>;
        agreementPrice?: Record<string, unknown>;
        agreementPriceVersion?: string;
        vouchersPriceRef?: string;
        limitPriceRef?: string;
        referencePriceRef?: string;
        referencePriceUnit?: string;
        ouId?: string;
        lineationPriceInfo?: {
          lineationPrice?: Record<string, unknown>;
          lineationPriceUrl?: string;
          lineationPriceType?: number;
          lineationPriceAppReason?: string;
          priceVersion?: number;
        };
        maxSalePrice?: Record<string, unknown>;
        minSalePrice?: Record<string, unknown>;
        salePriceRangeErrorTips?: string;
        priceRef?: string;
        kaPrice?: string;
      };
      operationStaffs?: {
        operationStaffsItem?: {
          postType?: string;
          name?: string;
          pin?: string;
          pinType?: string;
        };
      };
      productTax?: {
        taxCode?: string;
        taxRate?: Record<string, unknown>;
        taxCheapFlag?: boolean;
        taxCheapContent?: string;
        zeroTaxRate?: number;
        operateInvoiceFlag?: boolean;
      };
      vehicleInfo?: {
        carGroupName?: string;
      };
      afterServiceInfo?: {
        warranty?: string;
        shelfLife?: number;
        service?: string;
        serviceDesc?: string;
        serviceFeeId?: number;
        tel?: string;
        webSite?: string;
        aftersales?: string;
        owner?: number;
        productTaxInfo?: {
          taxCode?: string;
          taxRate?: Record<string, unknown>;
          taxCheapFlag?: boolean;
          taxCheapContent?: string;
          zeroTaxRate?: number;
          operateInvoiceFlag?: boolean;
        };
        designConcept?: string;
        wreadme?: string;
      };
      goodsAttrInfos?: {
        goodsAttrInfosItem?: {
          key?: string;
          attrId?: number;
          attrName?: string;
          level?: number;
          type?: number;
          orderSort?: number;
          inputType?: number;
          countryArea?: number;
          cascadeGroupId?: number;
          cascadeGroupName?: string;
          cascadeGroupLevel?: number;
          cascadeGroups?: {
            cascadeGroupsItem?: {
              attrId?: number;
              attrName?: string;
              attrValues?: {
                attrValuesItem?: {
                  attrValue?: string;
                  attrValueAlias?: string;
                  expand?: string;
                  unit?: string;
                };
              };
              comGroupId?: number;
              scope?: number;
              valueUnit?: string;
              valCount?: number;
              comAttrId?: number;
              graphic?: string;
              search?: number;
              groupId?: number;
              attributeLock?: number;
              inputPercentFlag?: boolean;
              lockStatus?: number;
              values?: {
                valuesItem?: {
                  attrValue?: string;
                  attrValueAlias?: string;
                  existSubAttrValue?: boolean;
                  expand?: string;
                  unit?: string;
                  remark?: string;
                  subAttributeValueList?: {
                    subAttributeValueListItem?: {
                      attrValue?: string;
                      attrValueAlias?: string;
                      existSubAttrValue?: boolean;
                      expand?: string;
                      unit?: string;
                      remark?: string;
                    };
                  };
                };
              };
            };
          };
          comGroupId?: number;
          scope?: number;
          valueUnit?: string;
          valCount?: number;
          comAttrId?: number;
          graphic?: string;
          search?: number;
          groupId?: number;
          attributeLock?: number;
          inputPercentFlag?: boolean;
          lockStatus?: number;
          values?: {
            valuesItem?: {
              attrValue?: string;
              attrValueAlias?: string;
              existSubAttrValue?: boolean;
              expand?: string;
              unit?: string;
              remark?: string;
              subAttributeValueList?: {
                subAttributeValueListItem?: {
                  attrValue?: string;
                  attrValueAlias?: string;
                  existSubAttrValue?: boolean;
                  expand?: string;
                  unit?: string;
                  remark?: string;
                };
              };
            };
          };
        };
      };
      productDetailDesc?: {
        desc?: string;
        zhuangBaId?: string;
        zhuangBaUseFlag?: string;
        zhuangBaDesc?: string;
        fitmentNote?: string;
        modelUseFlag?: string;
        mobileDesc?: string;
        mobileZhuangBaId?: string;
        mobileZhuangBaUseFlag?: boolean;
        mobileZhuangBaDesc?: string;
        mobileFitmentNote?: string;
        packListing?: string;
        wreadme?: string;
        mpDesc?: string;
      };
      features?: {
        featuresItem?: {
          key?: string;
          value?: string;
        };
      };
      customAttrInfos?: {
        customAttrInfosItem?: {
          attrId?: string;
          name?: string;
          unit?: string;
          fatherAttrId?: string;
          index?: number;
          customPropsMode?: string;
          customAttrValues?: {
            customAttrValuesItem?: {
              value?: string;
              index?: number;
              prefix?: string;
              suffix?: string;
              complexExpands?: {
                complexExpandsItem?: {
                  index?: number;
                  prefix?: string;
                  suffix?: string;
                  expand?: string;
                };
              };
            };
          };
          features?: {
            featuresItem?: {
              key?: string;
              value?: string;
            };
          };
        };
      };
      logisticsInfo?: {
        packListing?: string;
        packSpecification?: number;
        transportId?: number;
        promiseId?: number;
        delivery?: string;
        boxRegulations?: number;
        unit?: string;
        stores?: {
          storesItem?: {
            dcid?: number;
            sid?: number;
          };
        };
        promiseBindType?: string;
      };
      wareLocation?: string;
      specialServices?: {
        element?: string;
      };
      outerId?: string;
      gaeaProductFlag?: boolean;
      kaFlag?: boolean;
      colType?: number;
      wareStatus?: number;
      snRuleInfoList?: {
        snRuleInfoListItem?: {
          digit?: string;
          preVal?: string;
          id?: number;
        };
      };
      productOil?: {
        productOilNumber?: Record<string, unknown>;
        productOilUnit?: string;
      };
      snFlag?: boolean;
      jxSpuId?: string;
      jxppSource?: number;
      adword?: string;
      spuAttrLockedFlag?: boolean;
      lockFieldList?: {
        element?: string;
      };
      showUpcFlag?: boolean;
      ocrUrl?: string;
      hasSkuDown?: boolean;
      industrialStandardProductCode?: string;
      wanzhentongFlag?: boolean;
      saleState?: number;
      saleStateName?: string;
      batchNumbers?: string;
      itemType?: number;
      stockNum?: number;
      shopCategoryIdList?: {
        element?: number;
      };
      to7ReturnFlag?: boolean;
      lockCorrectProps?: {
        lockCorrectPropsItem?: {
          correctAttrValue?: Record<string, unknown>;
          lockStatus?: number;
          correctAttributeValues?: {
            correctAttributeValuesItem?: {
              attrValueId?: string;
              attrValueName?: string;
              attrValueAuditStatus?: number;
              attrValueAuditReason?: string;
            };
          };
          attrValues?: Record<string, unknown>;
          attrId?: string;
          attrValueAlias?: Record<string, unknown>;
          index?: number;
          units?: Record<string, unknown>;
        };
      };
      specialServiceCode?: string;
      locMatchInfo?: {
        venderId?: number;
        wareId?: number;
        activityBegin?: string;
        activityEnd?: string;
        addressList?: {
          addressListItem?: {
            label?: string;
            value?: string;
          };
        };
        detailAddress?: string;
        coordinate?: string;
        activitiesIllustration?: string;
        activityAgreement?: number;
        registrationField?: number;
      };
    };
    skuList?: {
      skuListItem?: {
        skuId?: number;
        productId?: number;
        outerId?: string;
        skuName?: string;
        length?: Record<string, unknown>;
        width?: Record<string, unknown>;
        height?: Record<string, unknown>;
        weight?: Record<string, unknown>;
        logo?: string;
        upcCode?: string;
        createdTime?: number;
        modifiedTime?: number;
        valid?: number;
        skuEnableStatus?: number;
        stockNum?: number;
        currencySpuId?: number;
        imgGroupId?: string;
        imgTag?: number;
        priceInfo?: {
          marketPrice?: Record<string, unknown>;
          jdPrice?: Record<string, unknown>;
          costPrice?: Record<string, unknown>;
          agreementPrice?: Record<string, unknown>;
          agreementPriceVersion?: string;
          vouchersPriceRef?: string;
          limitPriceRef?: string;
          referencePriceRef?: string;
          referencePriceUnit?: string;
          ouId?: string;
          lineationPriceInfo?: {
            lineationPrice?: Record<string, unknown>;
            lineationPriceUrl?: string;
            lineationPriceType?: number;
            lineationPriceAppReason?: string;
            priceVersion?: number;
          };
          maxSalePrice?: Record<string, unknown>;
          minSalePrice?: Record<string, unknown>;
          priceRef?: string;
        };
        saleAttrs?: {
          saleAttrsItem?: {
            attrId?: string;
            attrName?: string;
            attrValues?: string;
            attrValueAlias?: string;
            attrValuesSeqNo?: number;
            dim?: number;
            mappingId?: string;
            templateSkuProps?: {
              templateSkuPropsItem?: {
                id?: number;
                value?: string;
                valueId?: number;
                unit?: string;
              };
            };
            indexId?: number;
            attrKey?: string;
            categoryId?: number;
            originCategoryId?: number;
            color?: boolean;
          };
        };
        goodsAttrInfos?: {
          goodsAttrInfosItem?: {
            key?: string;
            attrId?: number;
            attrName?: string;
            countryArea?: number;
            values?: {
              valuesItem?: {
                attrValue?: string;
                attrValueAlias?: string;
                existSubAttrValue?: boolean;
                expand?: string;
                unit?: string;
                remark?: string;
              };
            };
          };
        };
        customAttribute?: {
          customAttributeItem?: {
            attrId?: string;
            name?: string;
            unit?: string;
            fatherAttrId?: string;
            index?: number;
            customPropsMode?: string;
            customAttrValues?: {
              customAttrValuesItem?: {
                value?: string;
                index?: number;
                prefix?: string;
                suffix?: string;
                isChoose?: boolean;
                complexExpands?: {
                  complexExpandsItem?: {
                    index?: number;
                    prefix?: string;
                    suffix?: string;
                    expand?: string;
                  };
                };
              };
            };
            features?: {
              featuresItem?: {
                key?: string;
                value?: string;
              };
            };
          };
        };
        logistics?: {
          packListing?: string;
          packSpecification?: number;
          transportId?: number;
          promiseId?: number;
          delivery?: string;
          boxRegulations?: number;
          unit?: string;
          promiseBindType?: string;
        };
        suiteSkus?: {
          suiteSkusItem?: {
            skuId?: number;
            count?: number;
            showFlag?: number;
            orderSort?: number;
          };
        };
        vehicleInfo?: {
          carGroupName?: string;
        };
        skuStats?: {
          frontShieldStatus?: number;
          frontEnableStatus?: number;
          onOffShelfStatus?: number;
          onShelfTime?: number;
        };
        uuid?: string;
        itemNum?: string;
        incrementStockNum?: number;
        saleAttrTemplateId?: string;
        features?: {
          featuresItem?: {
            key?: string;
            value?: string;
          };
        };
        productDetailDesc?: {
          desc?: string;
          zhuangBaId?: string;
          zhuangBaUseFlag?: string;
          zhuangBaDesc?: string;
          fitmentNote?: string;
          modelUseFlag?: string;
          mobileDesc?: string;
          mobileZhuangBaId?: string;
          mobileZhuangBaUseFlag?: boolean;
          mobileZhuangBaDesc?: string;
          mobileFitmentNote?: string;
          packListing?: string;
          wreadme?: string;
        };
      };
    };
    material?: {
      mainImages?: {
        mainImagesItem?: {
          uuid?: string;
          imageInfoList?: {
            imageInfoListItem?: {
              imgUrl?: string;
              orderSort?: number;
              colorId?: string;
              primaryFlag?: boolean;
              imgId?: string;
              imgDfsUrl?: string;
              status?: number;
              verifyDesc?: string;
              gptFlag?: boolean;
              imgName?: string;
              imgType?: string;
              imgWidth?: number;
              imgHeight?: number;
              imgSize?: number;
            };
          };
        };
      };
      rectangleImages?: {
        rectangleImagesItem?: {
          uuid?: string;
          imageInfoList?: {
            imageInfoListItem?: {
              imgUrl?: string;
              orderSort?: number;
              colorId?: string;
            };
          };
        };
      };
      transparentImages?: {
        transparentImagesItem?: {
          uuid?: string;
          imageInfoList?: {
            imageInfoListItem?: {
              imgUrl?: string;
              orderSort?: number;
              colorId?: string;
            };
          };
        };
      };
      whiteBackGroundImages?: {
        whiteBackGroundImagesItem?: {
          uuid?: string;
          whiteBackGroundImage?: {
            skuId?: number;
            imageUrl?: string;
            imageUuid?: string;
            useAlgRec?: string;
            origalImageUrl?: string;
            status?: number;
            desc?: string;
            modified?: boolean;
            uuid?: string;
          };
        };
      };
      videos?: {
        videosItem?: {
          uuid?: number;
          videoIds?: {
            videoId?: number;
          };
        };
      };
      publishScheduleFlag?: boolean;
      multiVideo?: {
        skuVideoRelationList?: {
          skuVideoRelationListItem?: {
            tagId?: number;
            tagName?: string;
            tagRule?: {
              maxVideoNum?: number;
              salerVideoTag?: number;
            };
            sort?: number;
            skuVideoList?: {
              skuVideoListItem?: {
                id?: number;
                status?: number;
                indexImage?: string;
                title?: string;
                agentVideoId?: number;
                contentId?: string;
                videoFrom?: number;
                videoId?: number;
                statusName?: string;
                playUrl?: string;
                duration?: number;
              };
            };
          };
        };
        status?: boolean;
      };
    };
    extendInfoList?: {
      extendInfoListItem?: {
        key?: string;
        value?: string;
      };
    };
    quaInfoList?: {
      quaInfoListItem?: {
        skuId?: string;
        type?: number;
        quaName?: string;
        endDate?: number;
        qcCode?: string;
        applicant?: string;
        quaModelBOList?: {
          quaModelBOListItem?: {
            modelType?: number;
            modelValue?: string;
          };
        };
        quaFileList?: {
          quaFileListItem?: {
            fileName?: string;
            fileSize?: number;
            fileType?: string;
          };
        };
        quaFeatures?: {
          quaFeaturesItem?: {
            featureKey?: string;
            featureVal?: string;
            featureName?: string;
            featureType?: number;
            isCheck?: boolean;
          };
        };
        entCode?: string;
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
  // 错误码: 10101001002

// ============================================================
// 获取素材标签信息  (getSkuMaterialTag)
// JD method: GET.sp-product.v0.sku-material-tags   HTTP: GET
// 获取素材标签信息
// ============================================================
export interface GetSkuMaterialTagRequest {
  getSkuMaterialTagRequest?: {
    materialType?: number;
    secondCategoryId?: number;
    pin?: string;
  };
}
export interface GetSkuMaterialTagResponse {
  data?: {
    tagId?: number;
    tagName?: string;
    sort?: number;
    tagRule?: {
      maxVideoNum?: number;
      salerVideoFlag?: boolean;
    };
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10109014001, 10109011002

// ============================================================
// 绑定SKU素材信息  (batchCreateSkuMaterial)
// JD method: POST.sp-product.v0.sku-materials.batch   HTTP: POST
// 绑定SKU素材信息，包含图片素材（透图、白底图、场景图、卖点图、定时主图）等
// ============================================================
export interface BatchCreateSkuMaterialRequest {
  batchCreateSkuMaterialRequest: {
    pin?: string;
    skuMaterials: {
      skuMaterialsItem?: {
        productId: number;
        skuId: number;
        materials: {
          materialsItem?: {
            skuId?: number;
            textMaterial?: {
              content?: {
                element?: string;
              };
            };
            imageMaterial?: {
              skuImages?: {
                skuImagesItem?: {
                  imgUrl?: string;
                  index?: number;
                };
              };
              startTime?: number;
              endTime?: number;
              imgType?: number;
              desc?: string;
              replaceType?: number;
              activityId?: number;
              region?: {
                isRegion?: number;
                groupId?: number;
                regions?: {
                  regionsItem?: {
                    code?: string;
                    name?: string;
                  };
                };
              };
            };
            videoMaterial?: {
              videoId?: number;
              jdVideoId?: number;
              indexImage?: string;
              contentId?: string;
              title?: string;
              playUrl?: string;
              videoFrom?: number;
              duration?: number;
              tagId?: number;
              tagName?: string;
              tagOrder?: number;
            };
            materialType: number;
            order?: number;
          };
        };
      };
    };
  };
}
export interface BatchCreateSkuMaterialResponse {
  data?: {
    skuId?: number;
    productId?: number;
    materials?: {
      materialsItem?: {
        id?: number;
        materialType?: number;
        textMaterial?: {
          content?: {
            element?: string;
          };
        };
        imageMaterial?: {
          skuImages?: {
            skuImagesItem?: {
              imgUrl?: string;
              index?: number;
            };
          };
          startTime?: number;
          endTime?: number;
          imgType?: number;
        };
        videoMaterial?: {
          videoId?: number;
          jdVideoId?: number;
          indexImage?: string;
          contentId?: string;
          title?: string;
          playUrl?: string;
          duration?: number;
          videoFrom?: number;
          tagId?: number;
          tagName?: string;
          tagOrder?: number;
        };
      };
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  };
}
  // 错误码: 10109001002, 10109002102, 10109002103, 10109004001, 10109002001, 10109002101

// ============================================================
// 获取SKU素材  (listSkuMaterials)
// JD method: GET.sp-product.v0.sku-materials   HTTP: GET
// 获取指定SKU的素材信息接口。
// ============================================================
export interface ListSkuMaterialsRequest {
  listSkuMaterialsRequest?: {
    pin?: string;
    materialTypes: {
      materialTypesItem?: number;
    };
    skuIds: {
      skuIdsItem?: number;
    };
    scopeSet?: {
      scopeSetItem?: number;
    };
  };
}
export interface ListSkuMaterialsResponse {
  data?: {
    productId?: number;
    materials?: {
      materialsItem?: {
        textMaterial?: {
          content?: string[];
        };
        imageMaterial?: {
          skuImages?: {
            skuImagesItem?: {
              imgUrl?: string;
              index?: number;
            };
          }[];
          startTime?: number;
          endTime?: number;
          imgType?: number;
          desc?: string;
          replaceType?: number;
          activityId?: number;
          region?: {
            isRegion?: number;
            groupId?: number;
            regions?: {
              regionsItem?: {
                code?: string;
                name?: string;
              };
            }[];
          };
        };
        videoMaterial?: {
          videoId?: number;
          jdVideoId?: number;
          indexImage?: string;
          contentId?: string;
          title?: string;
          playUrl?: string;
          duration?: number;
          videoFrom?: number;
          tagId?: number;
          tagName?: string;
          tagOrder?: number;
          enable?: number;
          sourceJdVideoId?: number;
        };
        id?: number;
        materialType?: number;
        order?: number;
        auditDesc?: string;
        source?: number;
        status?: number;
        createBy?: string;
        createDate?: number;
      };
    }[];
    skuId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
}
  // 错误码: 10109001002, 10109002151, 10109004001, 10109002001

// ============================================================
// 删除解绑SKU素材信息  (batchDeleteSkuMaterial)
// JD method: DELETE.sp-product.v0.sku-materials.batch   HTTP: DELETE
// 删除解绑SKU素材信息
// ============================================================
export interface BatchDeleteSkuMaterialRequest {
  batchDeleteSkuMaterialRequest: {
    pin?: string;
    materialIds?: {
      materialId?: number;
    };
    skuIds?: {
      skuId?: number;
    };
    materialType: number;
  };
}
export interface BatchDeleteSkuMaterialResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    message?: string;
    details?: string;
  }[];
}
  // 错误码: 10109001002, 10109004001, 10109002001, 10109001001

// ============================================================
// 查询媒体空间信息  (listMediaZones)
// JD method: GET.sp-product.v0.media-zones   HTTP: GET
// 查询空间信息
1）查询商家图片空间信息
2）查询商家视频空间信息
// ============================================================
export interface ListMediaZonesRequest {
  listMediaZonesRequest: {
    zoneType?: number;
    venderId: number;
  };
}
export interface ListMediaZonesResponse {
  data?: {
    zoneId?: string;
    zoneName?: string;
    zoneType?: number;
    totalSize?: number;
    freeSize?: number;
    capacitySize?: number;
    usedSize?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108001001, 10108002002, 10108001002, 10108002000

// ============================================================
// 创建空间分类信息  (postMediaZoneCategory)
// JD method: POST.sp-product.v0.media-zones._zoneId.categories   HTTP: POST
// 创建图片空间分类信息
// ============================================================
export interface PostMediaZoneCategoryRequest {
  zoneId: string;
  postMediaZoneCategoryRequest: {
    zoneCategoryDTO: {
      parentCategoryId: number;
      categoryName: string;
    };
    pin?: string;
  };
}
export interface PostMediaZoneCategoryResponse {
  data?: {
    categoryId?: number;
    categoryName?: string;
    parentCategoryId?: number;
    order?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108012305, 10108014001, 10108011001

// ============================================================
// 查询空间分类信息  (listMediaZoneCategories)
// JD method: GET.sp-product.v0.media-zones._zoneId.categories   HTTP: GET
// 查询图片空间分类信息
// ============================================================
export interface ListMediaZoneCategoriesRequest {
  zoneId: string;
  listCategoriesRequest: {
    parentCategoryId?: number;
    categoryIdSet?: {
      categoryId?: number;
    };
    categoryName?: string;
    page: number;
    pageSize: number;
    pin?: string;
    lastCategoryIdInLastQueryResult?: number;
  };
}
export interface ListMediaZoneCategoriesResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    categoryId?: number;
    categoryName?: string;
    parentCategoryId?: number;
    order?: number;
    status?: number;
    createdTime?: number;
    modifiedTime?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108011002, 10108014001

// ============================================================
// 更新空间分类信息  (patchMediaZoneCategory)
// JD method: PATCH.sp-product.v0.media-zones._zoneId.categories._categoryId   HTTP: PATCH
// 更新图片空间分类信息
// ============================================================
export interface PatchMediaZoneCategoryRequest {
  zoneId: string;
  categoryId: number;
  updateCategoryRequest: {
    zoneCategoryDTO: {
      parentCategoryId?: number;
      categoryName?: string;
    };
    prevCategoryId?: number;
    pin?: string;
  };
}
export interface PatchMediaZoneCategoryResponse {
  data?: {
    categoryId?: number;
    categoryName?: string;
    parentCategoryId?: number;
    order?: number;
    status?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108014001, 10108012303, 10108011001

// ============================================================
// 删除空间分类  (deleteMediaZoneCategory)
// JD method: DELETE.sp-product.v0.media-zones._zoneId.categories._categoryId   HTTP: DELETE
// 删除图片空间分类信息，删除分类到回收站
// ============================================================
export interface DeleteMediaZoneCategoryRequest {
  zoneId: string;
  categoryId: number;
  deleteMediaZoneCategoryRequest: {
    pin?: string;
  };
}
export interface DeleteMediaZoneCategoryResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108012304, 10108014001, 10108011001

// ============================================================
// 上传保存图片  (postMediaZoneImage)
// JD method: POST.sp-product.v0.media-zones._zoneId.images   HTTP: POST
// 上传图片至京麦-商品-图片空间，需注意imgBase64和fileUrl必选其中一种方式进行上传
// ============================================================
export interface PostMediaZoneImageRequest {
  zoneId: string;
  postMediaZoneImageRequest?: {
    fileUrl?: string;
    imgBase64?: string;
    pin?: string;
    zoneImageDTO: {
      imgName: string;
      categoryId: number;
    };
  };
}
export interface PostMediaZoneImageResponse {
  data?: {
    imgId?: string;
    imgName?: string;
    imgType?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgSize?: number;
    imgUrl?: string;
    categoryId?: number;
    useFlag?: boolean;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108022210, 10108024001, 10108021001, 10108022206, 10108022207, 10108022204, 10108022208, 10108022209

// ============================================================
// 查询图片空间图片列表  (listMediaZoneImages)
// JD method: GET.sp-product.v0.media-zones._zoneId.images   HTTP: GET
// 查询图片空间图片列表
// ============================================================
export interface ListMediaZoneImagesRequest {
  zoneId: string;
  listMediaZoneImagesRequest: {
    imgName?: string;
    sepWordFlag?: boolean;
    imgType?: string;
    categoryId?: number;
    widthBegin?: number;
    widthEnd?: number;
    heightBegin?: number;
    heightEnd?: number;
    createdTimeBeginTime?: number;
    createdTimeEndTime?: number;
    useFlag?: boolean;
    sortOrder?: string;
    sortBy?: string;
    page: number;
    pageSize: number;
    pin?: string;
    scrollId?: string;
  };
}
export interface ListMediaZoneImagesResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
    scrollId?: string;
  };
  data?: {
    imgId?: string;
    imgName?: string;
    imgType?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgSize?: number;
    imgUrl?: string;
    useFlag?: boolean;
    status?: number;
    createdTime?: number;
    modifiedTime?: number;
    categoryId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10108024001, 10108022201

// ============================================================
// 获取图片空间图片信息  (getMediaZoneImage)
// JD method: GET.sp-product.v0.media-zones._zoneId.images._imageId   HTTP: GET
// 获取图片空间图片，引用关系数据
// ============================================================
export interface GetMediaZoneImageRequest {
  zoneId: string;
  imageId: string;
  getMediaZoneImageRequest: {
    getReferenceFlag?: boolean;
    pin?: string;
  };
}
export interface GetMediaZoneImageResponse {
  data?: {
    imgId?: string;
    imgName?: string;
    imgType?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgSize?: number;
    imgUrl?: string;
    categoryId?: number;
    useFlag?: boolean;
    createdTime?: number;
    modifiedTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  imageQuoteList?: {
    groupQuoteCount?: number;
    sceneGroup?: string;
    imageQuoteDetailList?: {
      showTitle?: string;
      businessId?: string;
      scene?: string;
    }[];
  }[];
}
  // 错误码: 10108022001, 10108021001, 10108024001

// ============================================================
// 更新图片空间图片信息  (patchMediaZoneImage)
// JD method: PATCH.sp-product.v0.media-zones._zoneId.images._imageId   HTTP: PATCH
// 更新图片空间图片，更新分类、名称
// ============================================================
export interface PatchMediaZoneImageRequest {
  zoneId: string;
  imageId: string;
  patchMediaZoneImageRequest: {
    zoneImageDTO: {
      imgName?: string;
      categoryId?: number;
    };
    pin?: string;
  };
}
export interface PatchMediaZoneImageResponse {
  data?: {
    imgId?: string;
    imgName?: string;
    imgType?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgSize?: number;
    imgUrl?: string;
    categoryId?: number;
    useFlag?: boolean;
    createdTime?: number;
    modifiedTime?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108022202, 10108024001, 10108021001

// ============================================================
// 批量删除图片信息  (batchDeleteMediaZoneImage)
// JD method: DELETE.sp-product.v0.media-zones._zoneId.images.batch   HTTP: DELETE
// 批量删除图片信息
// ============================================================
export interface BatchDeleteMediaZoneImageRequest {
  zoneId: string;
  batchDeleteMediaZoneImagesRequest: {
    imgIdList: string[];
    pin?: string;
  };
}
export interface BatchDeleteMediaZoneImageResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108022203, 10108024001, 10108021001

// ============================================================
// 获取上传视频地址  (getMediaZoneVideoUploadUrl)
// JD method: GET.sp-product.v0.media-zones._zoneId.upload-urls   HTTP: GET
// 获取上传视频地址，获取地址后将视频文件上传至指定地址
// ============================================================
export interface GetMediaZoneVideoUploadUrlRequest {
  zoneId: string;
  getMediaZoneVideoUploadUrlRequest: {
    fileName: string;
    fileSize: number;
    videoType: number;
    jdVideoId?: number;
    breakPointFlag?: boolean;
    pin?: string;
  };
}
export interface GetMediaZoneVideoUploadUrlResponse {
  data?: {
    jdVideoId?: number;
    uploadUrl?: string;
    httpsUploadUrl?: string;
    region?: string;
    endpoint?: string;
    bucket?: string;
    objectKey?: string;
    accessKey?: string;
    secretKey?: string;
    sessionToken?: string;
    expiration?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108014001, 10108012405, 10108011001

// ============================================================
// 保存视频信息  (postMediaZoneVideo)
// JD method: POST.sp-product.v0.media-zones._zoneId.videos   HTTP: POST
// 保存视频信息，目前仅能保存商家主图视频
// ============================================================
export interface PostMediaZoneVideoRequest {
  zoneId: string;
  postMediaZoneVideoRequest: {
    zoneVideoDTO: {
      videoName: string;
      videoType: number;
      indexImage?: string;
      videoDesc: string;
      videoSize: number;
      jdVideoId: number;
    };
    pin?: string;
  };
}
export interface PostMediaZoneVideoResponse {
  data?: {
    videoId?: number;
    indexImage?: string;
    videoType?: number;
    videoDesc?: string;
    videoSize?: number;
    videoName?: string;
    jdVideoId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108032404, 10108034001, 10108031001, 10108031002

// ============================================================
// 查询视频列表  (listMediaZoneVideos)
// JD method: GET.sp-product.v0.media-zones._zoneId.videos   HTTP: GET
// 查询视频列表
// ============================================================
export interface ListMediaZoneVideosRequest {
  zoneId: string;
  listMediaZoneVideosRequest?: {
    videoName?: string;
    videoType: number;
    statusSet?: {
      status?: number;
    };
    videoIdSet?: {
      videoId?: number;
    };
    jdVideoIdSet?: {
      jdVideoId?: number;
    };
    minDuration?: number;
    maxDuration?: number;
    readVestVideoFlag?: boolean;
    skuId?: number;
    tagId?: number;
    contentId?: number;
    page?: number;
    pageSize?: number;
    sortOrder?: string;
    sortBy?: string;
    scopeSet: {
      scope?: string;
    };
    pin?: string;
  };
}
export interface ListMediaZoneVideosResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    videoId?: number;
    videoName?: string;
    videoDesc?: string;
    indexImage?: string;
    videoType?: number;
    jdVideoId?: number;
    duration?: number;
    videoSize?: number;
    playUrlList?: {
      clarityDesc?: string;
      playUrl?: string;
    }[];
    auditDesc?: string;
    status?: number;
    createdTime?: number;
    modifiedTime?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108032401, 10108034001, 10108031001, 10108031002

// ============================================================
// 更新视频信息  (patchMediaZoneVideo)
// JD method: PATCH.sp-product.v0.media-zones._zoneId.videos._videoId   HTTP: PATCH
// 更新视频信息
// ============================================================
export interface PatchMediaZoneVideoRequest {
  zoneId: string;
  videoId: number;
  patchMediaZoneVideoRequest: {
    zoneVideoDTO: {
      videoName?: string;
      videoDesc?: string;
      indexImage?: string;
    };
    pin?: string;
  };
}
export interface PatchMediaZoneVideoResponse {
  data?: {
    videoId?: number;
    indexImage?: string;
    videoDesc?: string;
    videoName?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108032402, 10108034001, 10108031001, 10108031002

// ============================================================
// 批量删除视频信息  (batchDeleteMediaZoneVideo)
// JD method: DELETE.sp-product.v0.media-zones._zoneId.videos.batch   HTTP: DELETE
// 批量删除视频信息
// ============================================================
export interface BatchDeleteMediaZoneVideoRequest {
  zoneId: string;
  batchDeleteMediaZoneVideoRequest: {
    videoIdSet: {
      videoId: number;
    };
    pin?: string;
  };
}
export interface BatchDeleteMediaZoneVideoResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108032403, 10108034001, 10108031001, 10108031002

// ============================================================
// 视频sku关联关系  (listMediaZoneVideosSkusRelation)
// JD method: GET.sp-product.v0.media-zones._zoneId.video-sku-rels   HTTP: GET
// 支持批量查询视频绑定的商品关系，可支持进行批量解绑操作等场景，如下图京麦端交互示例：京麦-商品-图片/视频空间-视频列表中hover某一视频时可查询视频关联的商品
// ============================================================
export interface ListMediaZoneVideosSkusRelationRequest {
  zoneId: string;
  listMediaZoneVideosSkusRelationRequest?: {
    productIds?: {
      element?: number;
    };
    videoType: number;
    pageSize: number;
    page: number;
    skuIds?: {
      element?: number;
    };
    videoIds: {
      element: number;
    };
    scopeSet: {
      element: string;
    };
    status?: number;
    pin?: string;
  };
}
export interface ListMediaZoneVideosSkusRelationResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    videoId?: number;
    videoType?: number;
    productId?: number;
    skuId?: number;
    relationStatus?: number;
    createdTime?: number;
    modifiedTime?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10108041002

// ============================================================
// 商品信息合规检测  (postProductValidation)
// JD method: POST.sp-product.v0.product-schemas.validations   HTTP: POST
// 针对入参中的商品信息进行合规性检测并返回检测结果；入参齐全则可一次性检测出所有可能存在的违规，准对性修改违规后再发品，可大大提升发品效率，入参：诸如标题、类目、品牌、sku主图、属性等。
// ============================================================
export interface PostProductValidationRequest {
  request: {
    schema: string;
    productApplyDTO: {
      productId?: number;
      categoryDTO: {
        lastCategoryId: number;
      };
    };
    pin?: string;
    venderId?: number;
    scene: string;
  };
}
export interface PostProductValidationResponse {
  data?: {
    wareKeeperDetectResultList?: {
      wareKeeperDetectResultListItem?: {
        reason?: string;
        detectResult?: number;
        detectedValue?: string;
        fieldList?: string[];
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
  // 错误码: 10103001002, 10103004000, 10105003001

// ============================================================
// 获取商品审核详情  (getViolatingProduct)
// JD method: GET.sp-product.v0.violating-products._productId   HTTP: GET
// 获取合规审核的审核详细信息
// ============================================================
export interface GetViolatingProductRequest {
  param1: number;
  param2?: {
    sourceLabel: number;
    venderId: number;
  };
}
export interface GetViolatingProductResponse {
  success?: boolean;
  data?: {
    productId?: number;
    auditReasonList?: {
      auditReasonListItem?: {
        firstName?: string;
        secondName?: string;
        thirdName?: string;
      };
    };
    auditModuleInfoList?: {
      auditModuleInfoListItem?: {
        auditModuleCode?: string;
        auditModuleName?: string;
        auditReasonList?: {
          auditReasonListItem?: {
            firstName?: string;
            secondName?: string;
            thirdName?: string;
          };
        };
        currentCommonInfoList?: {
          currentCommonInfoListItem?: {
            fieldKey?: string;
            fieldValueType?: number;
            fieldKeyName?: string;
            violationInfo?: {
              fieldValueType?: number;
              fieldKeyName?: string;
              auditReasonList?: {
                auditReasonListItem?: {
                  firstName?: string;
                  secondName?: string;
                  thirdName?: string;
                };
              };
              violationDetail?: {
                marks?: string;
              };
            };
            fieldValueInfoList?: {
              fieldValueInfoListItem?: {
                fieldValue?: string;
                fieldValueName?: string;
                violationInfo?: {
                  auditReasonList?: {
                    auditReasonListItem?: {
                      firstName?: string;
                      secondName?: string;
                      thirdName?: string;
                    };
                  };
                  violationDetail?: {
                    marks?: string;
                  };
                };
              };
            };
          };
        };
        auditModuleInfoList?: {
          auditModuleInfoListItem?: {
            auditModuleCode?: string;
            auditModuleName?: string;
            auditReasonList?: {
              auditReasonListItem?: {
                firstName?: string;
                secondName?: string;
                thirdName?: string;
              };
            };
            currentCommonInfoList?: {
              currentCommonInfoListItem?: {
                fieldKey?: string;
                fieldKeyName?: string;
                fieldValueType?: number;
                violationInfo?: {
                  auditReasonList?: {
                    auditReasonListItem?: {
                      firstName?: string;
                      secondName?: string;
                      thirdName?: string;
                    };
                  };
                  violationDetail?: {
                    marks?: string;
                  };
                  fieldValueType?: number;
                  fieldKeyName?: string;
                };
                fieldValueInfoList?: {
                  fieldValueInfoListItem?: {
                    fieldValue?: string;
                    fieldValueName?: string;
                    violationInfo?: {
                      auditReasonList?: {
                        auditReasonListItem?: {
                          firstName?: string;
                          secondName?: string;
                          thirdName?: string;
                        };
                      };
                      violationDetail?: {
                        marks?: string;
                      };
                    };
                  };
                };
              };
            };
            auditModuleInfoList?: {
              auditModuleInfoListItem?: {
                auditModuleCode?: string;
                auditModuleName?: string;
                auditReasonList?: {
                  auditReasonListItem?: {
                    firstName?: string;
                    secondName?: string;
                    thirdName?: string;
                  };
                };
                currentCommonInfoList?: {
                  currentCommonInfoListItem?: {
                    fieldKey?: string;
                    fieldKeyName?: string;
                    violationInfo?: {
                      auditReasonList?: {
                        auditReasonListItem?: {
                          firstName?: string;
                          secondName?: string;
                          thirdName?: string;
                        };
                      };
                      violationDetail?: {
                        marks?: string;
                      };
                    };
                    fieldValueInfoList?: {
                      fieldValueInfoListItem?: {
                        fieldValue?: string;
                        fieldValueName?: string;
                        violationInfo?: {
                          auditReasonList?: {
                            auditReasonListItem?: {
                              firstName?: string;
                              secondName?: string;
                              thirdName?: string;
                            };
                          };
                          violationDetail?: {
                            marks?: string;
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10161011001

// ============================================================
// 违规商品查询  (listViolatingProducts)
// JD method: GET.sp-product.v0.violating-products   HTTP: GET
// 查询店铺内的违规商品
// ============================================================
export interface ListViolatingProductsRequest {
  param1?: {
    venderId?: number;
    badGrade?: string;
    reason?: string;
    productId?: number;
    rectificationStatus?: string;
    productName?: string;
    orderWay?: number;
    orderField?: string;
    page: number;
    pageSize: number;
  };
}
export interface ListViolatingProductsResponse {
  success?: boolean;
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    dataItem?: {
      mainUrl?: string;
      score?: number;
      productId?: number;
      productName?: string;
      remainDate?: number;
      reason?: string;
      rectificationStatusName?: string;
      rectificationStatus?: string;
      firstReasonIdList?: {
        firReasonId?: number;
      };
      secondReasonIdList?: {
        secReasonId?: number;
      };
      thirdReasonIdList?: {
        thrReasonId?: number;
      };
      badGradeList?: {
        badGrade?: string;
      };
      badGradeNameList?: {
        badGradeName?: string;
      };
      auditedTimeList?: {
        audited?: number;
      };
      handleWayList?: {
        handleWay?: string;
      };
      handleWayNameList?: {
        handleWayName?: string;
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
  // 错误码: 10161001001, 10161001002

// ============================================================
// 批量设置 VMI 库存  (batchPutVmiStock)
// JD method: PUT.sp-vmi.v0.vmi-stocks.batch   HTTP: PUT
// 批量设置 vmi 库存，支持多个仓库设置
// ============================================================
export interface BatchPutVmiStockRequest {
  request: {
    vmiStockList?: {
      vmiLockCount?: Record<string, unknown>;
      warehouseNo?: string;
    }[];
    vmiStockInfo: {
      originDeptNo: string;
      originSellerProductId: string;
      targetDeptNo: string;
    };
    operateInfo: {
      operateTime: number;
      operateUser: string;
      uuid: string;
    };
    pin?: string;
  };
}
export interface BatchPutVmiStockResponse {
  data?: {
    targetDeptNo?: string;
    vmiLockCount?: Record<string, unknown>;
    warehouseNo?: string;
    originSellerProductId?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  vmiStockErrorList?: {
    originSellerProductId?: string;
    errMsg?: string;
    warehouseNo?: string;
  }[];
}
  // 错误码: 11401003001

// ============================================================
// 批量查询商品库存  (listSkuStocks)
// JD method: GET.sp-product.v0.sku-stocks   HTTP: GET
// 批量查询sku库存信息接口
// ============================================================
export interface ListSkuStocksRequest {
  listSkuStockRequest: {
    skuIdList: number[];
    venderId?: number;
    storeId?: number;
  };
}
export interface ListSkuStocksResponse {
  data?: {
    skuId?: number;
    warehouseId?: number;
    dcId?: number;
    stockNum?: number;
    appBookingNum?: number;
    orderBookingNum?: number;
    orderTransferNum?: number;
    wfkBookingNum?: number;
    transferOutNum?: number;
    reserveNum?: number;
    notForSaleNum?: number;
    storeId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10110001001, 10110001008

// ============================================================
// 批量设置商品库存  (batchPutSkuStock)
// JD method: PUT.sp-product.v0.sku-stocks.batch   HTTP: PUT
// 批量设置商品库存接口，可以用于POP全国/分区及门店库存的增量/全量设置
// ============================================================
export interface BatchPutSkuStockRequest {
  batchPutSkuStockRequest: {
    updateModel: string;
    stockRfID: string;
    putSkuStockList: {
      skuId: number;
      storeId?: number;
      incrStockNum?: number;
      stockNum?: number;
      warehouseId?: number;
    }[];
    venderId?: number;
    stockOperationType?: number;
  };
}
export interface BatchPutSkuStockResponse {
  data?: {
    skuId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10110001001, 10110001004

// ============================================================
// 获取限购策略  (getLimitBuyStrategy)
// JD method: GET.sp-product.v0.limit-buy-strategies._id   HTTP: GET
// 获取商品限购策略信息接口，用于查询限购规则。
// ============================================================
export interface GetLimitBuyStrategyRequest {
  id: number;
  request?: {
    venderId?: number;
  };
}
export interface GetLimitBuyStrategyResponse {
  data?: {
    strategyId?: number;
    limitDesc?: string;
    limitStrategyName?: string;
    strategyStatus?: string;
    limitStartDate?: number;
    limitEndDate?: number;
    valueType?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10107004000, 10107001002

// ============================================================
// 查询区域限制模板上绑定的商品列表  (listAreaRestrictionTemplateProducts)
// JD method: GET.sp-product.v0.area-restriction-templates._templateId.products   HTTP: GET
// 查询区域限制模板上绑定的商品列表
// ============================================================
export interface ListAreaRestrictionTemplateProductsRequest {
  templateId: number;
  listAreaRestrictionTemplateProductRequest: {
    venderId?: number;
    pageSize: number;
    page: number;
    productId?: number;
    scopeSet?: {
      scope?: string;
    };
  };
}
export interface ListAreaRestrictionTemplateProductsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    productId?: number;
    productName?: string;
    productImage?: string;
    bindTime?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106011003, 10106014000, 10106011002

// ============================================================
// 批量设置商品预定  (batchPostSkuBooking)
// JD method: POST.sp-product.v0.sku-bookings.batch   HTTP: POST
// 批量设置商品预定
// ============================================================
export interface BatchPostSkuBookingRequest {
  batchPostSkuBookingRequest: {
    pin?: string;
    venderId?: number;
    appKey?: string;
    postSkuBookingList: {
      productId: number;
      bookingType: number;
      bookingDate: string;
      storeId?: number;
      skuId: number;
    }[];
  };
}
export interface BatchPostSkuBookingResponse {
  data?: {
    skuId?: number;
    storeId?: number;
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  success?: boolean;
}
  // 错误码: 11110001003, 11110004001, 11110001004, 11110001001, 11110001002

// ============================================================
// 批量查询商品预定  (listSkuBookings)
// JD method: GET.sp-product.v0.sku-bookings   HTTP: GET
// 批量查询商品预定
// ============================================================
export interface ListSkuBookingsRequest {
  listSkuBookingsResponse: {
    pin?: string;
    "X-JOS-App-Key"?: string;
    venderId?: number;
    skuBookingList: string[];
  };
}
export interface ListSkuBookingsResponse {
  data?: {
    bookingFlag?: number;
    bookingType?: number;
    bookingDate?: string;
    dateTemplateId?: number;
    skuId?: number;
    storeId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11110004001, 11110001001, 11110001002

// ============================================================
// 修改区域限制模板  (putAreaRestrictionTemplate)
// JD method: PUT.sp-product.v0.area-restriction-templates._templateId   HTTP: PUT
// 修改商品的区域限制模板信息。
// ============================================================
export interface PutAreaRestrictionTemplateRequest {
  templateId: number;
  putAreaRestrictionTemplateRequest: {
    areaRestrictionTemplateDTO: {
      templateName: string;
      limitAreaList: string[];
      venderId: number;
    };
  };
}
export interface PutAreaRestrictionTemplateResponse {
  data?: {
    templateId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001002, 10106004000

// ============================================================
// 获取区域限制模板详情  (getAreaRestrictionTemplate)
// JD method: GET.sp-product.v0.area-restriction-templates._templateId   HTTP: GET
// 获取商品区域限制模板的详细信息。
// ============================================================
export interface GetAreaRestrictionTemplateRequest {
  templateId: number;
  getAreaRestrictionTemplateRequest: {
    venderId?: number;
    scopeSet?: {
      scope?: string;
    };
  };
}
export interface GetAreaRestrictionTemplateResponse {
  data?: {
    templateId?: number;
    templateName?: string;
    type?: number;
    createTime?: number;
    updateTime?: number;
    limitAreaList?: string[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001002, 10106004000

// ============================================================
// 查询商家下区域限制模板列表  (listAreaRestrictionTemplates)
// JD method: GET.sp-product.v0.area-restriction-templates   HTTP: GET
// 查询商品区域限制模板列表接口，用于获取所有可用的区域限制模板。
// ============================================================
export interface ListAreaRestrictionTemplatesRequest {
  listAreaRestrictionTemplateRequest?: {
    venderId?: number;
    pageSize: number;
    templateId?: number;
    typeList?: number[];
    templateName?: string;
    page: number;
    scopeSet?: {
      scope?: string;
    };
  };
}
export interface ListAreaRestrictionTemplatesResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    templateId?: number;
    templateName?: string;
    type?: number;
    createTime?: number;
    updateTime?: number;
    noSaleRelCount?: number;
    valid?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001002, 10106004000

// ============================================================
// 删除区域限制模板上绑定的商品  (deleteAreaRestrictionTemplateProduct)
// JD method: DELETE.sp-product.v0.area-restriction-templates._templateId.products.batch   HTTP: DELETE
// 对区域限购模版上绑定的商品进行解绑，或对店铺模版进行解绑
// ============================================================
export interface DeleteAreaRestrictionTemplateProductRequest {
  templateId: number;
  deleteAreaRestrictionTemplateProductRequest: {
    templateType: number;
    venderId?: number;
    productIdList?: number[];
  };
}
export interface DeleteAreaRestrictionTemplateProductResponse {
  templateType?: number;
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  areaRestrictionTemplateProductFailDTOList?: {
    failMessage?: string;
    productId?: number;
  }[];
  areaRestrictionTemplateProductDTOList?: {
    productId?: number;
    productName?: string;
    productImage?: string;
    bindTime?: number;
  }[];
}
  // 错误码: 10106014000, 10106011002

// ============================================================
// 删除区域限制模板  (deleteAreaRestrictionTemplate)
// JD method: DELETE.sp-product.v0.area-restriction-templates._templateId   HTTP: DELETE
// 删除指定的商品区域限制模板。
// ============================================================
export interface DeleteAreaRestrictionTemplateRequest {
  templateId: number;
  deleteAreaRestrictionTemplateRequest?: {
    venderId?: number;
    options?: string;
  };
}
export interface DeleteAreaRestrictionTemplateResponse {
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  data?: boolean;
}
  // 错误码: 10106001002, 10106004000

// ============================================================
// 查询限购策略绑定的商品列表  (listLimitBuyStrategyProducts)
// JD method: GET.sp-product.v0.limit-buy-strategies._id.products   HTTP: GET
// 查询与特定限购策略关联的商品列表接口。
// ============================================================
export interface ListLimitBuyStrategyProductsRequest {
  id: number;
  request: {
    pageSize: number;
    page: number;
    venderId?: number;
  };
}
export interface ListLimitBuyStrategyProductsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    id?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10107014000, 10107011002

// ============================================================
// 查询限购策略列表  (listLimitBuyStrategies)
// JD method: GET.sp-product.v0.limit-buy-strategies   HTTP: GET
// 获取所有限购策略的列表信息。
// ============================================================
export interface ListLimitBuyStrategiesRequest {
  request: {
    wareId?: number;
    pageSize?: number;
    createStartDate?: number;
    limitStrategyName?: string;
    valueType: string;
    page?: number;
    createEndDate?: number;
    startDate?: number;
    venderId?: number;
  };
}
export interface ListLimitBuyStrategiesResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    strategyId?: number;
    limitDesc?: string;
    limitStrategyName?: string;
    strategyStatus?: string;
    limitStartDate?: number;
    limitEndDate?: number;
    valueType?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10107004000, 10107001002

// ============================================================
// 批量绑定商品到限购策略  (batchPostLimitBuyStrategyProduct)
// JD method: POST.sp-product.v0.limit-buy-strategies._id.products.batch   HTTP: POST
// 批量绑定限购策略中的商品接口，用于商家对某商品进行限购。
// ============================================================
export interface BatchPostLimitBuyStrategyProductRequest {
  id: number;
  request: {
    productList: {
      id: number;
    }[];
    venderId?: number;
  };
}
export interface BatchPostLimitBuyStrategyProductResponse {
  data?: {
    id?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10107014000, 10107011002

// ============================================================
// 批量把商品与限购策略解绑  (batchDeleteLimitBuyStrategyProduct)
// JD method: DELETE.sp-product.v0.limit-buy-strategies._id.products.batch   HTTP: DELETE
// 批量把商品与限购策略解绑
// ============================================================
export interface BatchDeleteLimitBuyStrategyProductRequest {
  id: number;
  request: {
    productList: number[];
    venderId?: number;
  };
}
export interface BatchDeleteLimitBuyStrategyProductResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001002, 10106004000

// ============================================================
// 删除限购策略  (deleteLimitBuyStrategy)
// JD method: DELETE.sp-product.v0.limit-buy-strategies._id   HTTP: DELETE
// 删除指定的限购策略信息。
// ============================================================
export interface DeleteLimitBuyStrategyRequest {
  id: number;
  request?: {
    options?: string;
    venderId?: number;
  };
}
export interface DeleteLimitBuyStrategyResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10107001002

// ============================================================
// 店铺或商品批量绑定区域限制模板  (batchPostAreaRestrictionTemplateProduct)
// JD method: POST.sp-product.v0.area-restriction-templates._templateId.products.batch   HTTP: POST
// 店铺或商品批量绑定区域限制模板
// ============================================================
export interface BatchPostAreaRestrictionTemplateProductRequest {
  templateId: number;
  postAreaRestrictionTemplateProductRequest: {
    templateType: number;
    venderId?: number;
    areaRestrictionTemplateProductDTOList?: {
      productId?: number;
    }[];
  };
}
export interface BatchPostAreaRestrictionTemplateProductResponse {
  templateType?: number;
  data?: {
    productId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
  areaRestrictionTemplateProductFailDTOList?: {
    productId?: number;
    failMessage?: string;
  }[];
}
  // 错误码: 10106014000, 10106011002

// ============================================================
// 发布区域限制模板  (postAreaRestrictionTemplate)
// JD method: POST.sp-product.v0.area-restriction-templates   HTTP: POST
// 发布商品区域限制模板，用于设置商品销售区域限制。
// ============================================================
export interface PostAreaRestrictionTemplateRequest {
  postAreaRestrictionTemplateRequest: {
    areaRestrictionTemplateDTO: {
      templateName: string;
      limitAreaList: string[];
    };
    venderId?: number;
  };
}
export interface PostAreaRestrictionTemplateResponse {
  data?: {
    templateId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10106001001

// ============================================================
// 发布限购策略  (postLimitBuyStrategy)
// JD method: POST.sp-product.v0.limit-buy-strategies   HTTP: POST
// 发布限购策略接口，用于设置商品的限购规则。
// ============================================================
export interface PostLimitBuyStrategyRequest {
  request: {
    limitBuyStrategyDTO: {
      limitMinNum?: number;
      limitTotalNum?: number;
      limitDay?: number;
      limitEndDate?: number;
      limitType: string;
      limitPerOrderNum?: number;
      limitPin?: boolean;
      limitStrategyName: string;
      limitStartDate?: number;
      limitPhone?: boolean;
      valueType: string;
      limitIp?: boolean;
    };
    venderId?: number;
  };
}
export interface PostLimitBuyStrategyResponse {
  data?: {
    strategyId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10107004000, 10107001002

// ============================================================
// 获取SKU实验规则信息  (listMaterialExperimentRules)
// JD method: GET.sp-product.v0.material-experiment-rules   HTTP: GET
// 获取SKU实验规则信息，是否能做实验，流量比例等。推荐使用新版本实验参数（文档入参里已标注），旧版实验后续不再支持。
// ============================================================
export interface ListMaterialExperimentRulesRequest {
  listExperimentRulesRequest?: {
    newExperiment3Flag?: boolean;
    skuIdSet?: {
      skuId?: number;
    };
    experimentScene?: number;
    pin?: string;
    productIdSet?: {
      productId?: number;
    };
    seriesIdSet?: {
      seriesId?: number;
    };
    experimentType?: number;
  };
}
export interface ListMaterialExperimentRulesResponse {
  data?: {
    skuId?: number;
    canCreateFlag?: boolean;
    maxVersionNum?: number;
    routeRatio?: number;
    message?: string;
    leftRatio?: number;
    minRation?: number;
    lockRatioFlag?: boolean;
    productId?: number;
    seriesId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10109024001, 10109022001, 10109022505, 10109021002

// ============================================================
// 创建ab实验  (postMaterialExperiment)
// JD method: POST.sp-product.v0.material-experiments   HTTP: POST
// 创建ab实验。推荐使用新版本实验参数（文档入参里已标注），旧版实验后续不再支持。
// ============================================================
export interface PostMaterialExperimentRequest {
  postExperimentRequest?: {
    experimentDTO?: {
      newExperiment3Flag?: boolean;
      skuId?: number;
      productId?: number;
      seriesId?: number;
      name?: string;
      routeType?: number;
      expectedStartTime?: number;
      cycle?: number;
      experimentType?: number;
      materialTypeSet?: {
        materialType?: number;
      };
      experimentScene?: number;
      experimentVersionList?: {
        experimentVersionListItem?: {
          code?: string;
          routeRatio?: number;
          materialType?: number;
          orderNum?: number;
          mainImageList?: {
            mainImageListItem?: {
              materialContent?: string;
              orderNum?: number;
            };
          };
          mainLongImageList?: {
            mainLongImageListItem?: {
              orderNum?: number;
              materialContent?: string;
            };
          };
          experimentMaterialList?: {
            experimentMaterialListItem?: {
              materialId?: string;
              materialType?: number;
              imageList?: {
                url?: string;
              };
              longImageList?: {
                url?: string;
              };
              videoList?: {
                videoListItem?: {
                  isOpen?: boolean;
                  isSalerLabel?: boolean;
                  labelId?: number;
                  labelName?: string;
                  tagRule?: {
                    maxVideoNum?: number;
                    isSalerVideo?: boolean;
                  };
                  skuVideoList?: {
                    skuVideoListItem?: {
                      indexImage?: string;
                      playUrl?: string;
                      title?: string;
                      videoFrom?: number;
                      videoId?: number;
                    };
                  };
                };
              };
              wareTitleContent?: {
                product?: {
                  productId?: number;
                  productName?: string;
                  lastLevelCategoryId?: number;
                  titleBrandName?: string;
                  brandTitleType?: string;
                };
                skus?: {
                  skusItem?: {
                    skuId?: number;
                    skuName?: string;
                    brandTitleType?: string;
                    titleBrandName?: string;
                  };
                };
              };
              wareEditorContent?: {
                product?: {
                  productId?: number;
                  lastLevelCategoryId?: number;
                  productDetail?: {
                    desc?: string;
                    modelUseFlag?: string;
                    zhuangBaId?: string;
                    zhuangBaModify?: boolean;
                    zhuangBaUseFlag?: string;
                  };
                };
              };
              saleAttr?: {
                product?: {
                  productId?: number;
                  productName?: string;
                  lastLevelCategoryId?: number;
                };
                skus?: {
                  skusItem?: {
                    skuId?: number;
                    skuName?: string;
                    productId?: number;
                    salesAttrs?: {
                      salesAttrsItem?: {
                        attrId?: string;
                        attrKey?: string;
                        attrName?: string;
                        attrValueAlias?: {
                          element?: string;
                        };
                        attrValuesSeqNo?: {
                          element?: number;
                        };
                        index?: number;
                        mappingId?: string;
                        templateSkuProps?: {
                          templateSkuPropsItem?: {
                            id?: number;
                            unit?: string;
                            value?: string;
                            valueId?: number;
                          };
                        };
                      };
                    };
                  };
                };
              };
              series?: {
                productDTOList?: {
                  productDTOListItem?: {
                    productId?: string;
                    productName?: string;
                    brandId?: string;
                    categoryId?: string;
                    brandName?: string;
                    productStatusName?: string;
                    productNames?: string;
                    logoUrl?: string;
                    categoryNameList?: {
                      element?: string;
                    };
                  };
                };
                seriesName?: string;
                seriesId?: number;
              };
            };
          };
        };
      };
    };
    pin?: string;
  };
}
export interface PostMaterialExperimentResponse {
  data?: {
    id?: number;
    name?: string;
    skuId?: number;
    expectedStartTime?: number;
    cycle?: number;
    expectedEndTime?: number;
    materialTypeSet?: {
      materialType?: number;
    };
    experimentType?: number;
    experimentScene?: number;
    experimentVersionList?: {
      experimentVersionListItem?: {
        id?: number;
        code?: string;
        orderNum?: number;
        routeRatio?: number;
        materialType?: number;
        mainImageList?: {
          mainImageListItem?: {
            id?: number;
            materialContent?: string;
            orderNum?: number;
          };
        };
        mainLongImageList?: {
          mainLongImageListItem?: {
            id?: number;
            materialContent?: string;
            orderNum?: number;
          };
        };
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
  // 错误码: 10109022504, 10109021002, 10109024001

// ============================================================
// 更新ab实验  (patchMaterialExperiment)
// JD method: PATCH.sp-product.v0.material-experiments._experimentId   HTTP: PATCH
// 更新ab实验。推荐使用新版本实验参数（文档入参里已标注），旧版实验后续不再支持。
// ============================================================
export interface PatchMaterialExperimentRequest {
  experimentId: number;
  patchExperimentRequest: {
    experimentDTO?: {
      newExperiment3Flag?: boolean;
      skuId?: number;
      productId?: number;
      seriesId?: number;
      name?: string;
      routeType?: number;
      expectedStartTime?: number;
      cycle?: number;
      experimentType?: number;
      materialTypeSet?: {
        materialType?: number;
      };
      experimentScene?: number;
      experimentVersionList?: {
        experimentVersionListItem?: {
          code?: string;
          routeRatio?: number;
          materialType?: number;
          orderNum?: number;
          mainImageList?: {
            mainImageListItem?: {
              materialContent?: string;
              orderNum?: number;
            };
          };
          mainLongImageList?: {
            mainLongImageListItem?: {
              orderNum?: number;
              materialContent?: string;
            };
          };
          experimentMaterialList?: {
            experimentMaterialListItem?: {
              materialId?: string;
              materialType?: number;
              imageList?: {
                url?: string;
              };
              longImageList?: {
                url?: string;
              };
              videoList?: {
                videoListItem?: {
                  isOpen?: boolean;
                  isSalerLabel?: boolean;
                  labelId?: number;
                  labelName?: string;
                  tagRule?: {
                    maxVideoNum?: number;
                    isSalerVideo?: boolean;
                  };
                  skuVideoList?: {
                    skuVideoListItem?: {
                      indexImage?: string;
                      playUrl?: string;
                      title?: string;
                      videoFrom?: number;
                      videoId?: number;
                    };
                  };
                };
              };
              wareTitleContent?: {
                product?: {
                  productId?: number;
                  productName?: string;
                  lastLevelCategoryId?: number;
                  titleBrandName?: string;
                  brandTitleType?: string;
                };
                skus?: {
                  skusItem?: {
                    skuId?: number;
                    skuName?: string;
                    brandTitleType?: string;
                    titleBrandName?: string;
                  };
                };
              };
              wareEditorContent?: {
                product?: {
                  productId?: number;
                  lastLevelCategoryId?: number;
                  productDetail?: {
                    desc?: string;
                    modelUseFlag?: string;
                    zhuangBaId?: string;
                    zhuangBaModify?: boolean;
                    zhuangBaUseFlag?: string;
                  };
                };
              };
              saleAttr?: {
                product?: {
                  productId?: number;
                  productName?: string;
                  lastLevelCategoryId?: number;
                };
                skus?: {
                  skusItem?: {
                    skuId?: number;
                    skuName?: string;
                    productId?: number;
                    salesAttrs?: {
                      salesAttrsItem?: {
                        attrId?: string;
                        attrKey?: string;
                        attrName?: string;
                        attrValueAlias?: {
                          element?: string;
                        };
                        attrValuesSeqNo?: {
                          element?: number;
                        };
                        index?: number;
                        mappingId?: string;
                        templateSkuProps?: {
                          templateSkuPropsItem?: {
                            id?: number;
                            unit?: string;
                            value?: string;
                            valueId?: number;
                          };
                        };
                      };
                    };
                  };
                };
              };
              series?: {
                productDTOList?: {
                  productDTOListItem?: {
                    productId?: string;
                    productName?: string;
                    brandId?: string;
                    categoryId?: string;
                    brandName?: string;
                    productStatusName?: string;
                    productNames?: string;
                    logoUrl?: string;
                    categoryNameList?: {
                      element?: string;
                    };
                  };
                };
                seriesName?: string;
                seriesId?: number;
              };
            };
          };
        };
      };
    };
    updateType: number;
    status?: number;
    pin?: string;
  };
}
export interface PatchMaterialExperimentResponse {
  data?: {
    id?: number;
    name?: string;
    skuId?: number;
    expectedStartTime?: number;
    cycle?: number;
    expectedEndTime?: number;
    materialTypeSet?: {
      materialType?: number;
    };
    experimentType?: number;
    experimentScene?: number;
    experimentVersionList?: {
      experimentVersionListItem?: {
        id?: number;
        code?: string;
        orderNum?: number;
        routeRatio?: number;
        materialType?: number;
        mainImageList?: {
          mainImageListItem?: {
            id?: number;
            materialContent?: string;
            orderNum?: number;
          };
        };
        mainLongImageList?: {
          mainLongImageListItem?: {
            id?: number;
            materialContent?: string;
            orderNum?: number;
          };
        };
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
  // 错误码: 10109021002, 10109022502, 10109024001

// ============================================================
// 查询素材AB实验列表  (listMaterialExperiments)
// JD method: GET.sp-product.v0.material-experiments   HTTP: GET
// 查询素材AB实验列表，返回实验基础信息。推荐使用新版本实验参数（api文档中已标注），旧版实验后续不再支持。
// ============================================================
export interface ListMaterialExperimentsRequest {
  listExperimentsRequest: {
    newExperiment3Flag?: boolean;
    name?: string;
    skuIdSet?: {
      skuId?: number;
    };
    productIdSet?: {
      productId?: number;
    };
    status?: number;
    type?: number;
    createdBy?: string;
    experimentScene?: number;
    page: number;
    pageSize: number;
    pin?: string;
  };
}
export interface ListMaterialExperimentsResponse {
  paginationData?: {
    totalItems?: number;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    id?: number;
    name?: string;
    skuId?: number;
    productId?: number;
    seriesId?: number;
    expectedStartTime?: number;
    cycle?: number;
    expectedEndTime?: number;
    materialTypeSet?: {
      materialType?: number;
    };
    experimentType?: number;
    experimentScene?: number;
    status?: number;
    reason?: string;
    auditTime?: number;
    createdTime?: number;
    modifiedTime?: number;
    createdBy?: string;
    modifiedBy?: string;
    operateAuthSet?: {
      operateAuth?: number;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10109022501, 10109021002, 10109024001

// ============================================================
// 查询实验详情信息  (getMaterialExperiment)
// JD method: GET.sp-product.v0.material-experiments._experimentId   HTTP: GET
// 查询实验详情信息。推荐使用新版本实验参数（文档入参里已标注），旧版实验后续不再支持。
// ============================================================
export interface GetMaterialExperimentRequest {
  experimentId: number;
  getExperimentRequest: {
    newExperiment3Flag?: boolean;
    experimentId?: number;
    pin: string;
  };
}
export interface GetMaterialExperimentResponse {
  data?: {
    id?: number;
    name?: string;
    skuId?: number;
    productId?: number;
    seriesId?: number;
    expectedStartTime?: number;
    cycle?: number;
    expectedEndTime?: number;
    materialTypeSet?: {
      materialType?: number;
    };
    experimentType?: number;
    experimentScene?: number;
    status?: number;
    reason?: string;
    auditTime?: number;
    createdTime?: number;
    modifiedTime?: number;
    createdBy?: string;
    modifiedBy?: string;
    operateAuthSet?: {
      operateAuth?: number;
    };
    experimentVersionList?: {
      experimentVersionListItem?: {
        id?: number;
        code?: string;
        orderNum?: number;
        routeRatio?: number;
        name?: string;
        auditStatus?: number;
        reason?: string;
        materialType?: number;
        mainImageList?: {
          mainImageListItem?: {
            id?: number;
            materialContent?: string;
            orderNum?: number;
            auditStatus?: number;
            reason?: string;
          };
        };
        mainLongImageList?: {
          mainLongImageListItem?: {
            id?: number;
            materialContent?: string;
            orderNum?: number;
            auditStatus?: number;
            reason?: string;
          };
        };
        experimentMaterialList?: {
          experimentMaterialListItem?: {
            materialId?: string;
            materialType?: number;
            imageList?: {
              imageListItem?: {
                url?: string;
                order?: number;
              };
            };
            longImageList?: {
              longImageListItem?: {
                url?: string;
                order?: number;
              };
            };
            videoList?: {
              videoListItem?: {
                isOpen?: boolean;
                isSalerLabel?: boolean;
                labelId?: number;
                labelName?: string;
                tagRule?: {
                  maxVideoNum?: number;
                  isSalerVideo?: boolean;
                };
                skuVideoList?: {
                  skuVideoListItem?: {
                    indexImage?: string;
                    playUrl?: string;
                    title?: string;
                    videoFrom?: number;
                    videoId?: number;
                  };
                };
              };
            };
            wareTitleContent?: {
              product?: {
                productId?: number;
                productName?: string;
                lastLevelCategoryId?: number;
                titleBrandName?: string;
                brandTitleType?: string;
              };
              skus?: {
                skusItem?: {
                  skuId?: number;
                  skuName?: string;
                  brandTitleType?: string;
                  titleBrandName?: string;
                };
              };
            };
            wareEditorContent?: {
              product?: {
                productId?: number;
                lastLevelCategoryId?: number;
                productDetail?: {
                  desc?: string;
                  modelUseFlag?: string;
                  zhuangBaId?: string;
                  zhuangBaModify?: boolean;
                  zhuangBaUseFlag?: string;
                };
              };
            };
            saleAttr?: {
              product?: {
                productId?: number;
                productName?: string;
                lastLevelCategoryId?: number;
              };
              skus?: {
                skusItem?: {
                  skuId?: number;
                  skuName?: string;
                  productId?: number;
                  salesAttrs?: {
                    salesAttrsItem?: {
                      attrId?: string;
                      attrKey?: string;
                      attrName?: string;
                      attrValueAlias?: {
                        element?: string;
                      };
                      attrValuesSeqNo?: {
                        element?: number;
                      };
                      index?: number;
                      mappingId?: string;
                      templateSkuProps?: {
                        templateSkuPropsItem?: {
                          id?: number;
                          unit?: string;
                          value?: string;
                          valueId?: number;
                        };
                      };
                    };
                  };
                };
              };
            };
            series?: {
              productDTOList?: {
                productDTOListItem?: {
                  productId?: string;
                  productName?: string;
                  brandId?: string;
                  categoryId?: string;
                  brandName?: string;
                  productStatusName?: string;
                  productNames?: string;
                  logoUrl?: string;
                  categoryNameList?: {
                    element?: string;
                  };
                  order?: number;
                };
              };
              seriesName?: string;
              seriesId?: number;
            };
          };
        };
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
  // 错误码: 10109022501, 10109021002, 10109024001

// ============================================================
// 删除AB实验  (deleteMaterialExperiment)
// JD method: DELETE.sp-product.v0.material-experiments._experimentId   HTTP: DELETE
// 删除AB实验。推荐使用新版本实验参数（文档入参里已标注），旧版实验后续不再支持。
// ============================================================
export interface DeleteMaterialExperimentRequest {
  experimentId: number;
  deleteMaterialExperimentRequest?: {
    pin?: string;
    newExperiment3Flag?: boolean;
  };
}
export interface DeleteMaterialExperimentResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10109021002, 10109022503, 10109024001

// ============================================================
// 商品通用灰度接口  (getHitGrayResult)
// JD method: GET.sp-product.v0.product-grays   HTTP: GET
// 接口描述：1、商家通过上传特定的场景key，查询该key下的功能灰度值。结果显示京麦侧是否支持该商家使用相关功能。2、针对isv用户，pop/自营商家均可使用。
// ============================================================
export interface GetHitGrayResultRequest {
  param?: {
    lastCategoryId: number;
    pin?: string;
    sceneCode: string;
    venderId?: number;
    keys: string[];
  };
}
export interface GetHitGrayResultResponse {
  traceId?: string;
  success?: boolean;
  data?: {
    hitGrayValue?: number;
    key?: string;
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10173001001

// ============================================================
// 删除电子说明书  (deleteDigitalManual)
// JD method: DELETE.sp-product.v0.digital-manuals.batch   HTTP: DELETE
// 此接口用于删除电子说明书
// ============================================================
export interface DeleteDigitalManualRequest {
  request: {
    manualIdList: number[];
    venderId?: number;
  };
}
export interface DeleteDigitalManualResponse {
  data?: {
    manualId?: number;
    successFlag?: boolean;
    failMessage?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000004, 10170000003, 10170000001

// ============================================================
// 查询电子说明书绑定的商品信息  (listDigitalManualProducts)
// JD method: GET.sp-product.v0.digital-manuals._manualId.digital-manual-products   HTTP: GET
// 此接口用于查询电子说明书绑定的商品信息
// ============================================================
export interface ListDigitalManualProductsRequest {
  manualId: number;
  request?: {
    pageSize: number;
    page: number;
    venderId?: number;
  };
}
export interface ListDigitalManualProductsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    productStatus?: number;
    productId?: number;
    productName?: string;
    manualId?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000003, 10170000001

// ============================================================
// 电子说明书绑定商品  (patchDigitalManualProducts)
// JD method: PATCH.sp-product.v0.digital-manuals._manualId.digital-manual-products.batch   HTTP: PATCH
// 此接口用于电子说明书绑定商品
// ============================================================
export interface PatchDigitalManualProductsRequest {
  manualId: number;
  request?: {
    manualId: number;
    relatedType: number;
    productIdList: number[];
    venderId?: number;
  };
}
export interface PatchDigitalManualProductsResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000019, 10170000018, 10170000021, 10170000020, 10170000003, 10170000001

// ============================================================
// 查询电子说明书列表  (listDigitalManuals)
// JD method: GET.sp-product.v0.digital-manuals   HTTP: GET
// 查询电子说明书列表
// ============================================================
export interface ListDigitalManualsRequest {
  request?: {
    manualId?: number;
    manualName?: string;
    auditStatus?: number;
    pageSize?: number;
    page?: number;
    venderId?: number;
  };
}
export interface ListDigitalManualsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    manualId?: number;
    manualName?: string;
    auditStatus?: number;
    auditStatusDesc?: string;
    productCount?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000017, 10170000003, 10170000002, 10170000001

// ============================================================
// 获取电子说明书详情  (getDigitalManual)
// JD method: GET.sp-product.v0.digital-manuals._manualId   HTTP: GET
// 获取电子说明书详情
// ============================================================
export interface GetDigitalManualRequest {
  manualId: number;
  request?: {
    venderId?: number;
  };
}
export interface GetDigitalManualResponse {
  data?: {
    manualId?: number;
    manualName?: string;
    manualTypeList?: string[];
    manualVideoList?: {
      manualVideoId?: number;
      manualVideoName?: string;
      manualVideoImgUrl?: string;
      manualVideoUrl?: string;
      orderSort?: number;
    }[];
    manualContent?: {
      pictureContent?: string;
      pdfContent?: string;
    };
    faqList?: {
      ask?: string;
      answer?: string;
      answerType?: number;
    }[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000003, 10170000002, 10170000001

// ============================================================
// 更新电子说明书  (patchDigitalManual)
// JD method: PATCH.sp-product.v0.digital-manuals._manualId   HTTP: PATCH
// 更新电子说明书
// ============================================================
export interface PatchDigitalManualRequest {
  manualId: number;
  request?: {
    manualName?: string;
    manualTypeList?: string[];
    manualContent?: {
      pictureContent?: string;
      pdfContent?: string;
    };
    faqList: {
      answer?: string;
      ask?: string;
      answerType?: number;
    }[];
    manualVideoList?: {
      manualVideoId?: number;
      orderSort?: number;
      manualVideoUrl?: string;
      manualVideoName?: string;
      manualVideoImgUrl?: string;
    }[];
    venderId?: number;
  };
}
export interface PatchDigitalManualResponse {
  success?: boolean;
  data?: {
    manualId?: number;
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000003, 10170000001

// ============================================================
// 创建电子说明书  (postDigitalManual)
// JD method: POST.sp-product.v0.digital-manuals   HTTP: POST
// 创建电子说明书
// ============================================================
export interface PostDigitalManualRequest {
  request?: {
    digitalManualDTO?: {
      manualName: string;
      faqList: {
        answer: string;
        ask: string;
        answerType: number;
      }[];
      manualVideoList?: {
        manualVideoId: number;
        orderSort: number;
        manualVideoUrl?: string;
        manualVideoName?: string;
        manualVideoImgUrl?: string;
      }[];
      manualContent?: {
        pictureContent?: string;
        pdfContent?: string;
      };
      manualTypeList: string[];
    };
    venderId?: number;
  };
}
export interface PostDigitalManualResponse {
  data?: {
    manualId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10170000001

// ============================================================
// 关联尺码模板与商品  (postSizeTemplateProduct)
// JD method: PATCH.sp-product.v0.size-templates._sizeTemplateId.size-template-products.batch   HTTP: PATCH
// 此接口用于关联尺码模板与商品
// ============================================================
export interface PostSizeTemplateProductRequest {
  sizeTemplateId: number;
  request?: {
    sizeTemplateProduct?: {
      sizeTemplateId: number;
      productIds: number[];
    };
    venderId?: number;
  };
}
export interface PostSizeTemplateProductResponse {
  success?: boolean;
  data?: {
    sizeTemplateId?: number;
    productIds?: number[];
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10110001001, 10171001005, 10171001009

// ============================================================
// 查询尺码模板列表  (listSizeTemplates)
// JD method: GET.sp-product.v0.size-templates   HTTP: GET
//  此接口用于查询尺码模板列表
// ============================================================
export interface ListSizeTemplatesRequest {
  request?: {
    templateType?: number;
    templateName?: string;
    pageSize: number;
    page: number;
    venderId?: number;
  };
}
export interface ListSizeTemplatesResponse {
  success?: boolean;
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    sizeTemplateId?: number;
    templateName?: string;
    templateType?: number;
    templateTypeDesc?: string;
    modified?: number;
    status?: number;
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10110001001, 10171001010, 10171001011

// ============================================================
// 查询尺码模板属性列表  (listSizeTemplateSchemas)
// JD method: GET.sp-product.v0.size-template-schemas   HTTP: GET
// 此接口用于查询尺码模板属性列表
// ============================================================
export interface ListSizeTemplateSchemasRequest {
  request?: {
    templateType: number;
    venderId?: number;
  };
}
export interface ListSizeTemplateSchemasResponse {
  success?: boolean;
  data?: {
    templateType?: number;
    attributeId?: number;
    attributeName?: string;
    requiredFlag?: boolean;
    defaultFlag?: boolean;
    sizeFlag?: boolean;
    inputType?: number;
    values?: string;
    index?: number;
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10110001001

// ============================================================
// 更新尺码模板  (patchSizeTemplate)
// JD method: PATCH.sp-product.v0.size-templates._sizeTemplateId   HTTP: PATCH
// 此接口用于更新尺码模板
// ============================================================
export interface PatchSizeTemplateRequest {
  sizeTemplateId: number;
  request?: {
    sizeTemplate?: {
      templateType: number;
      note?: string;
      halfSizeFlag?: boolean;
      templateName: string;
      sizeTemplateId: number;
      modified?: number;
      templateTypeDesc?: string;
      content: string;
      status?: number;
      relatedProductIdList?: number[];
      sizeTemplateAttributeList?: {
        attributeId?: number;
        templateType?: number;
        note?: string;
        defaultFlag?: boolean;
        values?: string;
        sizeFlag?: boolean;
        index?: number;
        attributeName?: string;
        inputType?: number;
        requiredFlag?: boolean;
      }[];
    };
    venderId?: number;
  };
}
export interface PatchSizeTemplateResponse {
  data?: {
    sizeTemplateId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10171001005, 10110001001, 10171001003, 10171001004

// ============================================================
// 创建尺码模板  (postSizeTemplate)
// JD method: POST.sp-product.v0.size-templates   HTTP: POST
// 创建尺码模板
// ============================================================
export interface PostSizeTemplateRequest {
  request?: {
    sizeTemplate?: {
      templateName: string;
      templateType: number;
      halfSizeFlag?: boolean;
      content: string;
    };
    venderId?: number;
  };
}
export interface PostSizeTemplateResponse {
  data?: {
    sizeTemplateId?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10171001003, 10171001004, 10171001001, 10171001002

// ============================================================
// 获取尺码模板详情  (getSizeTemplate)
// JD method: GET.sp-product.v0.size-templates._sizeTemplateId   HTTP: GET
// 该接口用于获取尺码模板详情
// ============================================================
export interface GetSizeTemplateRequest {
  sizeTemplateId: number;
  request?: {
    venderId?: number;
    scopeSet: {
      element?: string;
    };
  };
}
export interface GetSizeTemplateResponse {
  data?: {
    sizeTemplateId?: number;
    templateName?: string;
    templateType?: number;
    content?: string;
    halfSizeFlag?: boolean;
    status?: number;
    modified?: number;
    note?: string;
    sizeTemplateAttributeList?: {
      attributeId?: number;
      templateType?: number;
      attributeName?: string;
      defaultFlag?: boolean;
      sizeFlag?: boolean;
      requiredFlag?: boolean;
      inputType?: number;
      values?: string;
      index?: number;
      note?: string;
    }[];
    relatedProductIdList?: number[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10171001005

// ============================================================
// 查询商品建议价格  (listSuggestedPrices)
// JD method: GET.sp-order.v0.suggested-prices   HTTP: GET
// 查询商品建议价格
// ============================================================
export interface ListSuggestedPricesRequest {
  request: {
    appkey?: string;
    pin?: string;
    venderId?: number;
    skuIdList: number[];
  };
}
export interface ListSuggestedPricesResponse {
  success?: boolean;
  data?: {
    skuId?: number;
    starSuggestedPriceList?: {
      type?: string;
      code?: string;
      name?: string;
      targetPrice?: Record<string, unknown>;
      advicePrice?: Record<string, unknown>;
      benefitPoint?: string;
    }[];
    labelSuggestedPriceList?: {
      type?: string;
      code?: string;
      name?: string;
      targetPrice?: Record<string, unknown>;
      advicePrice?: Record<string, unknown>;
      benefitPoint?: string;
    }[];
    serachSuggestedPriceList?: {
      type?: string;
      code?: string;
      name?: string;
      targetPrice?: Record<string, unknown>;
      advicePrice?: Record<string, unknown>;
      benefitPoint?: string;
    }[];
  }[];
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10163001001

// ============================================================
// 查询货源信息列表  (listDistributions)
// JD method: GET.sp-product.v0.dist-products   HTTP: GET
// 根据指定条件查询货源信息列表
// ============================================================
export interface ListDistributionsRequest {
  listDistributionsRequest: {
    lastCategoryIds?: number[];
    pageSize?: number;
    sortCode?: string;
    categoryId1?: number;
    categoryId2?: number;
    lastCategoryId?: number;
    categoryId3?: number;
    sortType?: string;
    categoryId2s?: number[];
    categoryId1s?: number[];
    categoryId3s?: number[];
    page?: number;
    keyword?: string;
    advantageType?: string;
    channelType?: string;
    maxPrice?: string;
    minPrice?: string;
    service?: string;
    venderId?: string;
  };
}
export interface ListDistributionsResponse {
  paginationData?: {
    totalItems?: number;
    hasNextPage?: boolean;
    totalPages?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    distproductId?: string;
    distproductName?: string;
    imageUrl?: string;
    maxPurchasePrice?: number;
    minPurchasePrice?: number;
    supplierId?: number;
    supplierName?: string;
    serviceTags?: string;
    copyState?: number;
    channelType?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10180000007, 10180000006, 10180000009, 1018000004, 10180000013, 10180000005, 10180000010, 10180000001, 10180000012, 10180000011

// ============================================================
// 查询货源信息详情  (getDistribution)
// JD method: GET.sp-product.v0.dist-products._distProductId   HTTP: GET
// 根据指定条件查询货源信息下详情
// ============================================================
export interface GetDistributionRequest {
  distProductId: string;
  getDistributionRequest: {
    supplierId: number;
    channelType?: number;
    venderId?: number;
  };
}
export interface GetDistributionResponse {
  data?: {
    distproductId?: string;
    distproductName?: string;
    distproductImageList?: Record<string, unknown>;
    maxPurchasePrice?: number;
    minPurchasePrice?: number;
    jxSales?: boolean;
    serviceTags?: string;
    introduction?: string;
    supplierId?: number;
    supplierName?: string;
    copyState?: number;
    distproductState?: number;
    channelType?: number;
    freightInfo?: {
      skuFreightInfoList?: {
        addNum?: Record<string, unknown>;
        city?: string;
        addPrice?: Record<string, unknown>;
        freightMethod?: string;
        firstNum?: Record<string, unknown>;
        firstPrice?: Record<string, unknown>;
      }[];
      ruleType?: number;
      ruleTypeDesc?: string;
      freightType?: number;
    };
    attributionList?: {
      attributeName?: string;
      attrValueList?: {
        valueName?: string;
        unit?: string;
      }[];
    }[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1018000001, 1018000012, 1018000011, 1018000013

// ============================================================
// 查询铺货规则内容  (listRulesContent)
// JD method: GET.sp-product.v0.dist-rules   HTTP: GET
// 支持开发者查询铺货设置需要填写的字段
// ============================================================
export interface ListRulesContentRequest {
  listRulesContentRequest?: {
    venderId?: number;
  };
}
export interface ListRulesContentResponse {
  data?: {
    settingId?: string;
    markupRate?: string;
    markupAmount?: string;
    zeroing?: number;
    deliveryPromise?: number;
    successAction?: number;
    toReturn?: number;
    transportId?: string;
    downStock?: number;
    areaLimit?: number;
    protocol?: number;
    noReasonToReturnList?: {
      id?: string;
      name?: string;
    }[];
    promiseTemplateList?: {
      id?: string;
      code?: string;
      name?: string;
    };
    fareTemplateList?: {
      id?: string;
      index?: number;
      templateName?: string;
      ruleType?: number;
      isFree?: number;
      isDefault?: number;
    }[];
    zeroingList?: {
      id?: string;
      name?: string;
    }[];
    successActionList?: {
      id?: string;
      name?: string;
    }[];
    msgSetupList?: {
      msgType?: string;
      msgTypeName?: string;
      state?: number;
    };
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10182001001

// ============================================================
// 更新铺货规则状态  (patchRulesStatus)
// JD method: PATCH.sp-product.v0.dist-rules._distRuleId   HTTP: PATCH
// 支持用户(代销商)在开发者的平台完成铺货设置
// ============================================================
export interface PatchRulesStatusRequest {
  distRuleId: string;
  patchRulesStatusRequest: {
    markupRate: string;
    markupAmount: string;
    zeroing: number;
    deliveryPromise: number;
    toReturn: number;
    transportId: number;
    successAction: number;
    protocol: number;
    msgSetupList: {
      msgType: string;
      msgTypeName: string;
      state: number;
    };
    venderId?: number;
  };
}
export interface PatchRulesStatusResponse {
  data?: {
    settingStatus?: boolean;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10182001003, 10182001001, 10182001002

// ============================================================
// 查询商家协议状态  (listDistContractStatus)
// JD method: GET.sp-product.v0.dist-contract-statuses   HTTP: GET
// 获取商家签署京东官方货源的代销协议状态
// ============================================================
export interface ListDistContractStatusRequest {
  listDistcontractStatusRequest?: {
    venderId?: string;
  };
}
export interface ListDistContractStatusResponse {
  data?: {
    settleState?: number;
    venderTypes?: number[];
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10183000002, 10183000001

// ============================================================
// 删除铺货关联关系  (deleteRelationShipApplies)
// JD method: DELETE.sp-product.v0.dist-relationships.batch   HTTP: DELETE
// 根据指定条件删除铺货关联关系
// ============================================================
export interface DeleteRelationShipAppliesRequest {
  deleteRelationShipAppliesRequest?: {
    venderId?: string;
    relationshipsList: string[];
  };
}
export interface DeleteRelationShipAppliesResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 101810000011, 101810000015, 10181000001

// ============================================================
// 提交铺货关系  (postRelationShipApplies)
// JD method: POST.sp-product.v0.dist-relationships   HTTP: POST
// 提交铺货关系
// ============================================================
export interface PostRelationShipAppliesRequest {
  request: {
    supplierId: number;
    distproductId?: string;
    venderId?: number;
  };
}
export interface PostRelationShipAppliesResponse {
  data?: {
    recordId?: string;
    distproductId?: string;
    productId?: string;
    categoryList?: {
      categoryId?: string;
      categoryName?: string;
      level?: number;
    }[];
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10181010001, 10181010002

// ============================================================
// 查询商家货源状态列表  (getVenderDistStatus)
// JD method: GET.sp-product.v0.dist-products._distProductId.vender-dist-statuses   HTTP: GET
// 根据指定条件查询商家货源状态列表
// ============================================================
export interface GetVenderDistStatusRequest {
  distProductId: string;
  venderDIstStatusRequest?: {
    venderId?: number;
  };
}
export interface GetVenderDistStatusResponse {
  data?: {
    distProductId?: string;
    statusFlag?: boolean;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10180010011, 10180010001

// ============================================================
// 查询铺货关系列表  (listRelationShipApplies)
// JD method: GET.sp-product.v0.dist-relationships   HTTP: GET
// 查询铺货关系列表
// ============================================================
export interface ListRelationShipAppliesRequest {
  request?: {
    type?: number;
    distproductId?: string;
    pageSize?: number;
    page?: number;
    venderId?: number;
  };
}
export interface ListRelationShipAppliesResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    recordId?: string;
    goodsSource?: {
      distproductId?: string;
      distproductName?: string;
      imageUrl?: string;
      copyPriceMax?: Record<string, unknown>;
      copyPriceMin?: Record<string, unknown>;
      stock?: string;
    };
    productCreatedInfo?: {
      productId?: string;
      productName?: string;
      jdPriceMin?: Record<string, unknown>;
      jdPriceMax?: Record<string, unknown>;
      categoryId1?: string;
      categoryId2?: string;
      categoryId3?: string;
      lastCategoryId?: string;
      categoryName1?: string;
      categoryName2?: string;
      categoryName3?: string;
      lastCategoryName?: string;
      productStatus?: string;
    };
    applicationStatusInfo?: {
      type?: number;
      createTime?: number;
      modifieTime?: number;
      submitTime?: number;
      status?: number;
      failMessage?: string;
      sourceItemStatus?: string;
      draftStatus?: string;
      imgTaskStatus?: string;
      itemDelStatus?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10181010003

// ============================================================
// sku绑定关系查询  (listSkuRelationships)
// JD method: GET.sp-product.v0.dist-sku-relationships   HTTP: GET
// 支持商家可以查询代销父子商品的绑定关系；
// ============================================================
export interface ListSkuRelationshipsRequest {
  listSkuRelationshipsRequest: {
    currentRole: number;
    distSkuId?: number;
    skuId?: number;
    venderId?: string;
    page: number;
    pageSize: number;
  };
}
export interface ListSkuRelationshipsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    skuId?: number;
    distSkuId?: number;
    status?: number;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10184001001, 10184001009, 10184001018, 10184001007, 10184001010, 10184001003

// ============================================================
// SKU解绑  (unbindSkuRelationship)
// JD method: DELETE.sp-product.v0.dist-sku-relationships.batch   HTTP: DELETE
// 支持商家将已操作绑定的商品进行商品sku维度解绑操作
// ============================================================
export interface UnbindSkuRelationshipRequest {
  deleteSkuRelationshipsRequest: {
    unBindType: number;
    optReason: string;
    skuIds: number[];
    venderId?: string;
  };
}
export interface UnbindSkuRelationshipResponse {
  data?: number[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10184001001, 10184001016, 10184001017, 10184001006, 10184001015

// ============================================================
// SKU绑定  (bindSkuRelationship)
// JD method: POST.sp-product.v0.dist-sku-relationships   HTTP: POST
// 开支持商家根据商品映射关系进行商品sku维度绑定		
// ============================================================
export interface BindSkuRelationshipRequest {
  postSkuRelationshipsRequest: {
    skuRelations: {
      distSkuId: number;
      skuId: number;
    }[];
    venderId?: string;
  };
}
export interface BindSkuRelationshipResponse {
  data?: boolean;
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10184001001, 10184001008, 10184001011, 10184001014

// ============================================================
// 查询商品价格星级  (listPriceStars)
// JD method: GET.sp-product.v0.price-stars   HTTP: GET
// 查询商品价格星级
// ============================================================
export interface ListPriceStarsRequest {
  listPriceStarsRequest?: {
    pin?: string;
    appkey?: string;
    venderId?: number;
    page?: number;
    pageSize?: number;
    competitivePowerList?: string[];
    skuIdList?: number[];
    spuIdList?: number[];
  };
}
export interface ListPriceStarsResponse {
  success?: boolean;
  data?: {
    skuId?: number;
    skuName?: string;
    spuId?: number;
    priceStar?: number;
    competitivePower?: string;
    handPrice?: Record<string, unknown>;
  }[];
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10162001001

// ============================================================
// 查询商品违约单信息列表  (listPenalty)
// JD method: GET.sp-product.v0.penalty-infos   HTTP: GET
// 用于查询商家违约单信息，目前仅包含类目错挂、属性不一致、违规蹭词违约单信息
支持的范围：POP+VC
// ============================================================
export interface ListPenaltyRequest {
  listPenaltyRequest: {
    page: number;
    pageSize: number;
    createdStartTime?: number;
    createdEndTime?: number;
    pin?: string;
  };
}
export interface ListPenaltyResponse {
  data?: {
    penaltyId?: string;
    illegalLevel?: number;
    illegalReason?: string;
    createdTime?: number;
    effectStatus?: number;
    evidenceInfo?: {
      evidenceInfoItem?: {
        evidenceType?: number;
        evidence?: string;
      };
    };
    realPenaltyDate?: string;
    illegalDetailUrl?: string;
  };
  success?: boolean;
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10101034000, 10101031002

// ============================================================
// 商品信息健康分详情查询  (getHealthScore)
// JD method: GET.sp-product.v0.health-infos._healthInfoId   HTTP: GET
// 查询店铺在售商品的质量情况，包括健康分及待提升问题详情。支持sku、spu纬度查询
// ============================================================
export interface GetHealthScoreRequest {
  healthScoreId: number;
  getHealthScoreRequest?: {
    detectFactor?: string;
    pin?: string;
    venderId?: number;
    "X-JOS-Request-Identity"?: string;
    "X-JOS-App-Key"?: string;
  };
}
export interface GetHealthScoreResponse {
  data?: {
    productId?: number;
    skuId?: number;
    healthScoreId?: number;
    levelDesc?: string;
    skuName?: string;
    healthScore?: number;
    improvementList?: {
      improvementListItem?: {
        improvementDetail?: {
          troubleCode?: string;
          troubleName?: string;
          sourceData?: string;
          troubleDesc?: string;
        };
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
  // 错误码: 10164001005, 10164001007

// ============================================================
// 商品信息健康列表查询  (listHealthScores)
// JD method: GET.sp-product.v0.health-infos   HTTP: GET
// 场景：查询店铺在售商品的质量情况，包括健康分及待提升问题详情。支持sku、spu纬度查询。目的：激发商品信息健康分提升。商家类型：Pop、vc
// ============================================================
export interface ListHealthScoresRequest {
  listHealthScoresRequest: {
    productId?: number;
    detectFactor?: string;
    scoreEnd?: number;
    pageSize: number;
    page: number;
    skuId?: number;
    scoreStart?: number;
    pin?: string;
    venderId?: number;
    "X-JOS-Request-Identity"?: string;
    "X-JOS-App-Key"?: string;
  };
}
export interface ListHealthScoresResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    productId?: number;
    skuId?: number;
    healthScoreId?: number;
    levelDesc?: string;
    skuName?: string;
    healthScore?: number;
    improvementList?: {
      improvementListItem?: {
        improvementDetail?: {
          troubleCode?: string;
          troubleName?: string;
        };
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
  // 错误码: 10164001005, 10164001006, 10164001001, 10164001002, 10164001003, 10164001004

// ============================================================
// 分页滚动查询商机数据  (listProductOpportunities)
// JD method: GET.sp-product.v0.product-opportunities   HTTP: GET
// 按照商机类型分页滚动查询商机数据
// ============================================================
export interface ListProductOpportunitiesRequest {
  listProductOpportunityRequest: {
    opportunityType: string;
    opportunityVersion: string;
    pageSize: number;
    page: number;
    scrollId?: string;
    pin?: string;
    venderId?: number;
    "X-JOS-Request-Identity"?: string;
    "X-JOS-App-Key"?: string;
  };
}
export interface ListProductOpportunitiesResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    dataItem?: {
      opportunityCode?: string;
      opportunityName?: string;
      oppurtunityType?: string;
      brandName?: string;
      imageUrlList?: {
        imageUrl?: string;
      };
      cateFirstId?: number;
      cateFirstName?: string;
      cateSecondId?: number;
      cateSecondName?: string;
      cateThirdId?: number;
      cateThirdName?: string;
      cateForthId?: number;
      cateForthName?: string;
      popularity?: string;
      supplyDemandRatio?: string;
      saleSkuNum?: string;
      saleShopNum?: string;
      minPrice?: Record<string, unknown>;
      maxPrice?: Record<string, unknown>;
      oppurtunityTag?: number;
      cateRank?: number;
      joinVenderNum?: number;
      recTagType?: number;
      recTagContent?: string;
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
  scrollId?: string;
}
  // 错误码: 10165001002, 10165002001, 10165001001, 10165002002