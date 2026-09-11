// ============================================================
// 京东开放平台 - 财务API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 6 个接口
// ============================================================
// ============================================================
// 查询钱包流水明细  (listAccountRecords)
// JD method: GET.sp-finance.v0.accounts._memberId.records   HTTP: GET
// 查询钱包流水明细请于上午8点以后调取接口，以保证能够取到当天完整数据，所有数据为接口开通之日起的数据，未包含历史数据

// ============================================================
export interface ListAccountRecordsRequest {
  memberId: number;
  request: {
    venderId: number;
    type: number;
    pageNum: number;
    startTime: number;
    endTime: number;
  };
}
export interface ListAccountRecordsResponse {
  paginationData?: {
    totalItems?: number;
    pageSize?: number;
    currentPage?: number;
  };
  data?: {
    detailCreateTime?: number;
    billDate?: string;
    sourceId?: string;
    memberId?: number;
    accountName?: string;
    currency?: string;
    balanceType?: string;
    incomeAmount?: Record<string, unknown>;
    expendAmount?: Record<string, unknown>;
    accountBalance?: Record<string, unknown>;
    detailDesc?: string;
    outTradeNo?: string;
    originalOutTradeNo?: string;
    tradeDesc?: string;
    accountReqCode?: string;
    tradeNo?: string;
    bizTradeNo?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10804011001

// ============================================================
// 查询商家账单明细  (listBills)
// JD method: GET.sp-finance.v0.bills   HTTP: GET
// 查询商家账单明细（订单结算明细），支持近一年的数据查询。查询时间范围仅支持1个月，时间范围不支持跨月查询。

// ============================================================
export interface ListBillsRequest {
  request?: {
    type: number;
    secondMerchantNo?: string;
    venderId: number;
    startTime?: number;
    endTime?: number;
    detailType?: number;
    billStatus?: number;
    statementIdList?: {
      statementId?: string;
    };
    pageSize?: number;
    cursor?: string;
  };
}
export interface ListBillsResponse {
  paginationData?: {
    nextCursor?: string;
    totalItems?: number;
    pageSize?: number;
  };
  data?: {
    secondMerchantNo?: string;
    venderId?: number;
    outTradeNo?: string;
    rfBusiId?: string;
    rfBusiType?: number;
    rfBusiTypeDesc?: string;
    detailNo?: string;
    orderId?: string;
    skuId?: string;
    skuName?: string;
    skuNum?: number;
    billDate?: string;
    feeCode?: number;
    feeName?: string;
    direction?: number;
    billStatus?: number;
    billStatusDesc?: string;
    settlementStatus?: number;
    settlementStatusDesc?: string;
    happenTime?: number;
    deliveredTime?: number;
    finishTime?: number;
    updateTime?: number;
    bal?: Record<string, unknown>;
    remark?: string;
    currency?: string;
    extendNode?: string;
    dparentId?: string;
    parentId?: string;
    billType?: number;
    transactionType?: number;
    detailType?: number;
    statementId?: string;
    paymentId?: string;
    uuid?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 10803001002, 10803001001, 10803001006, 10803012501

// ============================================================
// 查询发票申请列表  (listInvoiceApplications)
// JD method: GET.sp-finance.v0.invoice-applications   HTTP: GET
// 分页查询商家发票申请的列表信息。
// ============================================================
export interface ListInvoiceApplicationsRequest {
  request: {
    venderId: number;
    invoiceStatusList?: number[];
    orderId?: number;
    sortBy?: string;
    sortOrder?: string;
    orderCompleteStartTime?: number;
    orderCompleteEndTime?: number;
    applyStartTime?: number;
    applyEndTime?: number;
    companyId?: number;
    page: number;
    pageSize: number;
  };
}
export interface ListInvoiceApplicationsResponse {
  data?: {
    applyId?: number;
    venderId?: number;
    orderId?: number;
    invoiceType?: number;
    sourceId?: number;
    invoiceStatus?: number;
    invoiceTitleType?: number;
    invoiceTitle?: string;
    consumerTaxId?: string;
    consumerAddress?: string;
    consumerPhone?: string;
    consumerBankName?: string;
    consumerBankAccount?: string;
    logisticsReceiverName?: string;
    logisticsReceiverPhone?: string;
    logisticsReceiverAddress?: string;
    applyTime?: number;
    auditTime?: number;
    orderCompleteTime?: number;
    rejectReason?: string;
    invoiceContentType?: number;
    invoiceContentName?: string;
    customerEmail?: string;
    invoiceAmount?: Record<string, unknown>;
    shouldInvoiceAmount?: Record<string, unknown>;
    amountDetail?: {
      shouldInvoiceAmount?: Record<string, unknown>;
      num?: Record<string, unknown>;
      price?: Record<string, unknown>;
      productId?: string;
      productName?: string;
      detailType?: number;
      companyId?: number;
      companyName?: string;
    }[];
    invoiceTypeName?: string;
  }[];
  paginationData?: {
    currentPage?: number;
    pageSize?: number;
    totalItems?: number;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1080020001, 1080020002, 1080020003, 1080020004, 1080020005, 1080020006

// ============================================================
// 自开电子发票分页查询接口  (listInvoices)
// JD method: GET.sp-finance.v0.invoices   HTTP: GET
// 自开电子发票分页查询接口，支持按条件筛选和分页。
// ============================================================
export interface ListInvoicesRequest {
  request: {
    orderId?: string;
    invoiceCode?: string;
    invoiceNo?: Record<string, unknown>;
    invoiceType?: number;
    invoiceStartTime?: number;
    invoiceEndTime?: number;
    page: number;
    pageSize: number;
    venderId: number;
  };
}
export interface ListInvoicesResponse {
  data?: {
    invoiceSerialId?: string;
    orderId?: number;
    venderId?: string;
    status?: number;
    invoiceType?: number;
    receiverTaxNo?: string;
    receiverName?: string;
    invoiceCode?: string;
    invoiceNo?: Record<string, unknown>;
    invoiceTitle?: string;
    invoiceTime?: string;
    pdfInfo?: string;
    orderType?: number;
    invoiceContentType?: number;
    invoiceContentName?: string;
    invoiceRemark?: string;
    receiverAddress?: string;
    receiverPhone?: string;
    receiverBankName?: string;
    receiverBankAccount?: string;
    drawer?: string;
    payee?: string;
    blueInvoiceCode?: string;
    blueInvoiceNo?: Record<string, unknown>;
    totalPrice?: Record<string, unknown>;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1080010002, 1080010003, 1080010001, 1080010006, 1080010004, 1080010005

// ============================================================
// 自开电子发票红票上传  (putInvoice)
// JD method: PUT.sp-finance.v0.invoices._invoiceNo   HTTP: PUT
// 自开电子发票红票上传接口，用于冲红
// ============================================================
export interface PutInvoiceRequest {
  invoiceNo: Record<string, unknown>;
  request: {
    invoiceDTO: {
      orderId: number;
      venderId?: number;
      invoiceCode?: string;
      invoiceNo: Record<string, unknown>;
      invoiceTime: string;
      blueInvoiceCode?: string;
      blueInvoiceNo: Record<string, unknown>;
      pdfInfo: string;
    };
  };
}
export interface PutInvoiceResponse {
  data?: {
    orderId?: number;
    invoiceNo?: Record<string, unknown>;
    invoiceCode?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 1080010019, 1080010020, 1080010021, 1080010024, 1080010025, 1080010022, 1080010023, 1080010017, 1080010018, 1080010015, 1080010016

// ============================================================
// 自开电子发票蓝票上传  (postInvoice)
// JD method: POST.sp-finance.v0.invoices   HTTP: POST
// 自开电子发票蓝票上传接口，用于上传蓝票信息
// ============================================================
export interface PostInvoiceRequest {
  request: {
    invoiceDTO: {
      orderId: number;
      venderId?: number;
      receiverTaxNo: string;
      receiverName: string;
      invoiceCode?: string;
      invoiceNo: Record<string, unknown>;
      invoiceTitle: string;
      totalPrice: Record<string, unknown>;
      invoiceTime: string;
      pdfInfo: string;
      orderType?: number;
      invoiceContentType?: number;
      invoiceContentName?: string;
      eiRemark?: string;
      receiverAddress?: string;
      receiverPhone?: string;
      receiverBankName?: string;
      receiverBankAccount?: string;
      drawer?: string;
      payee?: string;
      consumerAddress?: string;
      consumerPhone?: string;
      consumerBankName?: string;
      consumerBankAccount?: string;
      skuList?: {
        skuListItem?: {
          skuId?: string;
          skuName?: string;
          num?: string;
          price?: Record<string, unknown>;
          spec?: string;
          unit?: string;
          taxRate?: string;
          taxCategroyCode?: string;
          taxDiscountFlag?: number;
          taxDiscountContent?: string;
          zeroTax?: string;
          deductions?: Record<string, unknown>;
          imei?: string;
          discount?: string;
          freight?: Record<string, unknown>;
        };
      }[];
    };
  };
}
export interface PostInvoiceResponse {
  data?: {
    orderId?: number;
    invoiceCode?: string;
    invoiceNo?: Record<string, unknown>;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 10801002501, 10801001002, 10801001001