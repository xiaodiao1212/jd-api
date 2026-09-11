// ============================================================
// 京东开放平台 - 京麦API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 6 个接口
// ============================================================
// ============================================================
// 创建京麦AI空间任务  (postJmAiTask)
// JD method: POST.sp-jm.v0.jm-ai-tasks   HTTP: POST
// 京麦AI空间实现了ISV任务的集中化接入与管理，ISV服务商可将自研任务同步至平台进行统一管理，从而为商家和供应商提供一个集中查看与展示任务的统一中心。
// ============================================================
export interface PostJmAiTaskRequest {
  postJmAiTaskRequest?: {
    bizCode: string;
    scheduled: number;
    created: number;
    result?: string;
    editUrl?: string;
    name: string;
    modified: number;
    state: number;
    detailUrl?: string;
    deadline?: number;
    taskId: string;
    pin?: string;
  };
}
export interface PostJmAiTaskResponse {
  data?: {
    jmAiTaskId?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 12401000020, 12401000031, 12401000010, 12401000021, 12401000032, 12401000030, 12401000013, 12401000014, 12401000011, 12401000022, 12401000012, 12401000001, 12401000023, 12401000017, 12401000018, 12401000015, 12401000016

// ============================================================
// 获取京麦AI空间任务  (getJmAiTask)
// JD method: GET.sp-jm.v0.jm-ai-tasks._jmAiTaskId   HTTP: GET
// ISV服务商将自研任务同步至平台后，可通过唯一业务主键 jmAiTaskId 查询京麦AI空间任务，确认数据是否同步成功。
// ============================================================
export interface GetJmAiTaskRequest {
  jmAiTaskId: string;
  getJmAiTaskRequest: {
    pin?: string;
  };
}
export interface GetJmAiTaskResponse {
  data?: {
    jmAiTaskId?: string;
    bizCode?: string;
    taskId?: string;
    name?: string;
    scheduled?: number;
    scheduleExecutionNum?: number;
    state?: number;
    stateName?: string;
    creator?: string;
    created?: number;
    modifier?: string;
    modified?: number;
    deadline?: number;
    detailUrl?: string;
    editUrl?: string;
    result?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 12401000010, 12401000030, 12401000013, 12401000014, 12401000001

// ============================================================
// 更新京麦AI空间任务  (patchJmAiTask)
// JD method: PATCH.sp-jm.v0.jm-ai-tasks._jmAiTaskId   HTTP: PATCH
// ISV同步任务后，系统会分配17位唯一主键 jmAiTaskId，请利用此ID进行后续的任务信息更新。
// ============================================================
export interface PatchJmAiTaskRequest {
  jmAiTaskId: string;
  patchJmAiTaskRequest: {
    result?: string;
    editUrl?: string;
    pin?: string;
    name?: string;
    modified: number;
    state: number;
    detailUrl?: string;
    deadline?: number;
  };
}
export interface PatchJmAiTaskResponse {
  data?: {
    jmAiTaskId?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 12401000010, 12401000030, 12401000013, 12401000014, 12401000033, 12401000022, 12401000001, 12401000012, 12401000018

// ============================================================
// 创建京麦AI空间定时任务执行记录  (postJmAiTaskRecord)
// JD method: POST.sp-jm.v0.jm-ai-tasks._jmAiTaskId.jm-ai-task-records   HTTP: POST
// 京麦AI空间实现了ISV任务的集中化接入与管理，支持ISV服务商将自研定时任务的执行记录同步至平台进行统一维护；请注意，该API仅适用于定时任务运行记录的信息同步。
// ============================================================
export interface PostJmAiTaskRecordRequest {
  jmAiTaskId: string;
  postJmAiTaskRecordRequest: {
    taskRecordId: string;
    taskRecordName: string;
    bizCode: string;
    created: number;
    result?: string;
    pin?: string;
    name: string;
    modified: number;
    state: number;
    detailUrl?: string;
    deadline?: number;
    taskId: string;
  };
}
export interface PostJmAiTaskRecordResponse {
  data?: {
    jmAiTaskId?: string;
    jmAiTaskRecordId?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 12401000001, 12401000012, 12401010030, 12401010020, 12401010031, 12400000016, 12401010010, 12401010021, 12401010032, 12401010011, 12401010033, 12401010012, 12401010013, 12401010014, 12400000015, 12400000014, 12400000013

// ============================================================
// 获取京麦AI空间定时任务执行记录  (getJmAiTaskRecord)
// JD method: GET.sp-jm.v0.jm-ai-tasks._jmAiTaskId.jm-ai-task-records._jmAiTaskRecordId   HTTP: GET
// ISV服务商将自研任务同步至平台后，可通过唯一业务主键 jmAiTaskRecordId 查询京麦AI空间任务，确认数据是否同步成功。
// ============================================================
export interface GetJmAiTaskRecordRequest {
  jmAiTaskId: string;
  jmAiTaskRecordId: string;
  getJmAiTaskRecordRequest: {
    pin?: string;
  };
}
export interface GetJmAiTaskRecordResponse {
  data?: {
    jmAiTaskId?: string;
    jmAiTaskRecordId?: string;
    bizCode?: string;
    taskId?: string;
    name?: string;
    scheduled?: string;
    state?: string;
    stateName?: string;
    creator?: string;
    created?: string;
    modifier?: string;
    modified?: string;
    deadline?: string;
    detailUrl?: string;
    result?: string;
    taskRecordId?: string;
    taskRecordName?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  };
}
  // 错误码: 12401010030, 12401010010, 12401010011, 12400000014, 12400000013

// ============================================================
// 更新京麦AI空间定时任务执行记录  (patchJmAiTaskRecord)
// JD method: PATCH.sp-jm.v0.jm-ai-tasks._jmAiTaskId.jm-ai-task-records._jmAiTaskRecordId   HTTP: PATCH
// ISV服务商将自研定时任务的执行记录同步至平台后，根据自身需求更新京麦AI空间定时任务执行记录的相关信息。
// ============================================================
export interface PatchJmAiTaskRecordRequest {
  jmAiTaskId: string;
  jmAiTaskRecordId: string;
  patchJmAiTaskRecordRequest?: {
    result?: string;
    pin?: string;
    taskRecordName?: string;
    modified: number;
    state: number;
    detailUrl?: string;
    deadline?: number;
  };
}
export interface PatchJmAiTaskRecordResponse {
  data?: {
    jmAiTaskId?: string;
    jmAiTaskRecordId?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 12401010030, 12401010010, 12401010021, 12401010011, 12401010033, 12401000001, 12401000012, 12400000014, 12400000013