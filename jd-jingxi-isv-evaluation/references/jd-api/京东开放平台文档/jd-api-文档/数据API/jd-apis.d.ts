// ============================================================
// 京东开放平台 - 数据API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 5 个接口
// ============================================================
// ============================================================
// 报表定义查询  (getReportSchema)
// JD method: GET.sp-data.v0.report-schemas._reportSchemaId   HTTP: GET
// 获取报表定义查询
1、必须明确指定需要返回的 reportId；
2、根据需要提交参数 subjectInfo，而且该参数必须是 JSON 字符串；
// ============================================================
export interface GetReportSchemaRequest {
  reportSchemaId: string;
  request: {
    subjectInfo?: string;
    pin: string;
  };
}
export interface GetReportSchemaResponse {
  data?: {
    reportSchemaId?: string;
    reportSchemaName?: string;
    description?: string;
    availableIndicators?: {
      id?: string;
      name?: string;
      description?: string;
      dataType?: string;
      sortable?: boolean;
    }[];
    availableAttributes?: {
      id?: string;
      name?: string;
      description?: string;
      dataType?: string;
      sortable?: boolean;
    }[];
    availableCriteria?: {
      property?: string;
      name?: string;
      required?: boolean;
      supportedOperators?: {
        operatorId?: string;
        cardinality?: string;
      }[];
      allowedValues?: {
        value?: string;
      }[];
      description?: string;
      dataType?: string;
    }[];
    responseFields?: {
      id?: string;
      name?: string;
      description?: string;
      dataType?: string;
      sortable?: boolean;
    }[];
    defaultSettings?: {
      pagination?: {
        pageSize?: number;
        pageNumber?: number;
      };
      ordering?: {
        propertyName?: string;
        direction?: string;
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
  // 错误码: 11201000004, 11201000002, 11201000101, 11201000001, 11201000012, 11201000011, 11201000010, 11201000151

// ============================================================
// 数据报表查询  (postReport)
// JD method: POST.sp-data.v0.reports   HTTP: POST
// 创建数据报表查询，获取查询数据
1、必须明确指定需要返回的字段名；
2、必须明确指定需要数据的查询条件；
// ============================================================
export interface PostReportRequest {
  request: {
    reportSchemaId?: string;
    reportDTO?: {
      criterionList?: {
        property?: string;
        operatorName?: string;
        values?: string[];
      }[];
      fieldList?: string[];
    };
    page?: number;
    pageSize?: number;
    pin?: string;
    subjectInfo?: string;
    sortBy?: {
      propertyName?: string;
      direction?: string;
    }[];
    isAsync?: boolean;
    requestUUID?: string;
  };
}
export interface PostReportResponse {
  data?: {
    dataRowList?: {
      row?: string[];
    }[];
    columnHeaderList?: string[];
    paginationData?: {
      currentPage?: number;
      nextCursor?: string;
      pageSize?: number;
      totalItems?: number;
      hasNextPage?: boolean;
      totalPages?: number;
    };
    isAsync?: boolean;
    reportDownloadTask?: {
      reportDownloadTaskId?: string;
      reportSchemaId?: string;
      extraInfo?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11202001003, 11202000101, 11202000003, 11202000001, 11202000007, 11202000004, 11202000005

// ============================================================
// 报表定义查询  (getSensitiveReportSchema)
// JD method: GET.sp-data.v0.yd-report-schemas._reportSchemaId   HTTP: GET
// 获取报表定义查询
1、必须明确指定需要返回的 reportId；
2、根据需要提交参数 subjectInfo，而且该参数必须是 JSON 字符串；
// ============================================================
export interface GetSensitiveReportSchemaRequest {
  reportSchemaId: string;
  request: {
    subjectInfo?: string;
    pin: string;
  };
}
export interface GetSensitiveReportSchemaResponse {
  data?: {
    reportSchemaId?: string;
    reportSchemaName?: string;
    description?: string;
    availableIndicators?: {
      id?: string;
      name?: string;
      description?: string;
      dataType?: string;
      sortable?: boolean;
    }[];
    availableAttributes?: {
      id?: string;
      name?: string;
      description?: string;
      dataType?: string;
      sortable?: boolean;
    }[];
    availableCriteria?: {
      property?: string;
      name?: string;
      required?: boolean;
      supportedOperators?: {
        operatorId?: string;
        cardinality?: string;
      }[];
      allowedValues?: {
        value?: string;
      }[];
      description?: string;
      dataType?: string;
    }[];
    responseFields?: {
      id?: string;
      name?: string;
      description?: string;
      dataType?: string;
      sortable?: boolean;
    }[];
    defaultSettings?: {
      pagination?: {
        pageSize?: number;
        pageNumber?: number;
      };
      ordering?: {
        propertyName?: string;
        direction?: string;
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
  // 错误码: 11204000151, 11204000011, 11204000001, 11204000012, 11204000010, 11204000004, 11204000002, 11204000101

// ============================================================
// 数据报表查询  (postSensitiveReport)
// JD method: POST.sp-data.v0.yd-reports   HTTP: POST
// 创建数据报表查询，获取查询数据
1、必须明确指定需要返回的字段名；
2、必须明确指定需要数据的查询条件；
// ============================================================
export interface PostSensitiveReportRequest {
  postReportRequest?: {
    reportSchemaId?: string;
    reportDTO?: {
      criterionList?: {
        values?: string[];
        property?: string;
        operatorName?: string;
      }[];
      fieldList?: string[];
    };
    page?: number;
    pageSize?: number;
    pin?: string;
    subjectInfo?: string;
    sortBy?: {
      propertyName?: string;
      direction?: string;
    }[];
  };
}
export interface PostSensitiveReportResponse {
  data?: {
    dataRowList?: {
      row?: string[];
    }[];
    columnHeaderList?: string[];
    paginationData?: {
      currentPage?: number;
      pageSize?: number;
      nextCursor?: string;
      totalItems?: number;
      hasNextPage?: boolean;
      totalPages?: number;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11203000001, 11203001003, 11203000004, 11203000005

// ============================================================
// 查询报表下载任务  (getReportDownloadTask)
// JD method: GET.sp-data.v0.report-download-tasks._reportDownloadTaskId   HTTP: GET
// 获取报表下载任务详情
// ============================================================
export interface GetReportDownloadTaskRequest {
  reportDownloadTaskId: string;
  request?: {
    reportSchemaId?: string;
    reportDownloadTaskId: string;
    subjectInfo?: string;
    venderId?: string;
  };
}
export interface GetReportDownloadTaskResponse {
  data?: {
    status?: string;
    downloadFileInfoList?: {
      downloadUrl?: string;
      fileType?: string;
      fileSize?: number;
    }[];
    extraInfo?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 50000