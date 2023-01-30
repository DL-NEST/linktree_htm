import request from "@/service/request/request";
import type { DBParam } from "@/service/type/init";

/**
 * @Description 健康检查
 * @return 题目 id
 */
export function VerifyDB(params: DBParam) {
  return request<DBParam>({
    url: "/config/verifyDB",
    method: "POST",
    data: params,
  });
}
