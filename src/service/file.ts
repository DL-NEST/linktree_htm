/**
 * @Description 文件的上下传
 */
import request from "@/service/request/request";
import type { AxiosProgressEvent } from "axios";

/**
 * @Description 上传文件
 * @return 题目 id
 */
export function uploadFile(
  params: LoginParam,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void
) {
  return request<string>({
    url: "/login",
    method: "POST",
    data: params,
    onUploadProgress: onUploadProgress,
  });
}

export function downloadFile(
  params: LoginParam,
  onDownloadProgress: (progressEvent: AxiosProgressEvent) => void
) {
  return request<string>({
    url: "/login",
    method: "POST",
    data: params,
    onDownloadProgress: onDownloadProgress,
  });
}
