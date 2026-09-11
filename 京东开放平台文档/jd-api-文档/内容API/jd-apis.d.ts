// ============================================================
// 京东开放平台 - 内容API 类型定义
// 由 open.jd.com 概览页网络抓包自动生成，供 AI 辅助写代码 / 检代码使用
// 共 5 个接口
// ============================================================
// ============================================================
// 公域内容上传图片接口  (postContentImages)
// JD method: POST.sp-content.v0.public-domain-content-images   HTTP: POST
// 公域内容上传图片接口
// ============================================================
export interface PostContentImagesRequest {
  request?: {
    imgBase64?: string;
    talentId?: number;
    pin?: string;
    appKey?: string;
  };
}
export interface PostContentImagesResponse {
  data?: {
    imgUrl?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11703001001

// ============================================================
// 公域内容获取视频上传URL  (postContentVideos)
// JD method: POST.sp-content.v0.public-domain-content-videos   HTTP: POST
// 公域内容获取视频上传URL
// ============================================================
export interface PostContentVideosRequest {
  request?: {
    videoUploadDTO?: {
      talentId?: number;
      pin?: string;
      fileSize?: number;
      videoName?: string;
      appKey?: string;
    };
  };
}
export interface PostContentVideosResponse {
  data?: {
    videoId?: number;
    uploadUrl?: string;
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11702001001

// ============================================================
// 保存公域内容信息  (postContents)
// JD method: POST.sp-content.v0.public-domain-contents   HTTP: POST
// 保存公域内容信息
// ============================================================
export interface PostContentsRequest {
  request: {
    style: number;
    imgTextContent?: {
      ext?: string;
      talentIp?: string;
      imgSkuAnchors?: {
        img?: number;
        skus?: {
          xPercent?: string;
          yPercent?: string;
          name?: string;
          direct?: number;
          skuId?: string;
        }[];
        width?: number;
        encryptImg?: string;
        height?: number;
      }[];
      original?: number;
      description?: string;
      title?: string;
      skuIds?: string[];
      tags?: {
        id?: number;
        name?: string;
        type?: string;
      }[];
      topicId?: string;
      contentSource?: number;
      indexImages?: number[];
      music?: {
        duration?: number;
        creator?: string;
        musicId?: string;
        name?: string;
        playUrl?: string;
      };
      talentId?: number;
      pin?: string;
      styleId?: number;
      encryptIndexImages?: string[];
      appKey?: string;
      subChannelId?: number;
      advertisementFlag?: number;
    };
    videoContent?: {
      talentIp?: string;
      ext?: string;
      original?: number;
      indexImage?: string;
      videoInfo?: {
        appHomeImg?: string;
        videoDuration?: number;
        videoImg?: string;
        videoId?: string;
        videoSize?: number;
      };
      description?: string;
      title?: string;
      skuIds?: string[];
      tags?: {
        name?: string;
        id?: number;
        type?: string;
      }[];
      topicId?: string;
      contentSource?: number;
      talentId?: number;
      pin?: string;
      styleId?: number;
      appKey?: string;
      subChannelId?: number;
      advertisementFlag?: number;
    };
  };
}
export interface PostContentsResponse {
  data?: {
    style?: string;
    videoContent?: {
      contentId?: string;
    };
    imgTextContent?: {
      contentId?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11701002001, 11701001001

// ============================================================
// 更新公域内容信息  (putContents)
// JD method: PUT.sp-content.v0.public-domain-contents._contentId   HTTP: PUT
// 更新公域内容信息
// ============================================================
export interface PutContentsRequest {
  contentId: number;
  request: {
    style: number;
    imgTextContent?: {
      ext?: string;
      talentIp?: string;
      imgSkuAnchors?: {
        img?: number;
        skus?: {
          xPercent?: string;
          yPercent?: string;
          name?: string;
          direct?: number;
          skuId?: string;
        }[];
        width?: number;
        encryptImg?: string;
        height?: number;
      }[];
      original?: number;
      description?: string;
      title?: string;
      skuIds?: string[];
      tags?: {
        id?: number;
        name?: string;
        type?: string;
      }[];
      topicId?: string;
      contentSource?: number;
      indexImages?: number[];
      music?: {
        duration?: number;
        creator?: string;
        musicId?: string;
        name?: string;
        playUrl?: string;
      };
      talentId?: number;
      pin?: string;
      styleId?: number;
      encryptIndexImages?: string[];
      appKey?: string;
      subChannelId?: number;
      advertisementFlag?: number;
    };
    videoContent?: {
      talentIp?: string;
      ext?: string;
      original?: number;
      indexImage?: string;
      videoInfo?: {
        appHomeImg?: string;
        videoDuration?: number;
        videoImg?: string;
        videoId?: string;
        videoSize?: number;
      };
      description?: string;
      title?: string;
      skuIds?: string[];
      tags?: {
        name?: string;
        id?: number;
        type?: string;
      }[];
      topicId?: string;
      contentSource?: number;
      talentId?: number;
      pin?: string;
      styleId?: number;
      appKey?: string;
      subChannelId?: number;
      advertisementFlag?: number;
    };
  };
}
export interface PutContentsResponse {
  data?: {
    style?: string;
    videoContent?: {
      contentId?: string;
    };
    imgTextContent?: {
      contentId?: string;
    };
  };
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11701002001, 11701001001

// ============================================================
// 批量查询内容  (listContents)
// JD method: GET.sp-content.v0.public-domain-contents   HTTP: GET
// 创服平台查询发布的内容信息列表
// ============================================================
export interface ListContentsRequest {
  request: {
    pin?: string;
    talentId: number;
    contentIds: number[];
  };
}
export interface ListContentsResponse {
  data?: {
    contentId?: number;
    status?: number;
    statusDesc?: string;
    privateStatus?: number;
    privateStatusDesc?: string;
  }[];
  success?: boolean;
  errorList?: {
    code?: string;
    details?: string;
    message?: string;
  }[];
}
  // 错误码: 11701001001