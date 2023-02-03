import request from "@/service/request/request";
import type { DBParam, RedisParam, SetupParam } from "@/service/type/init";

/**
 * @Description 检测db的连接性
 * @return 返回 空
 */
export function VerifyDB(params: DBParam) {
  return request<DBParam>({
    url: "/config/verifyDB",
    method: "POST",
    data: params,
  });
}

/**
 * @Description 检测Redis的连接性
 * @return 返回 空
 */
export function VerifyRedis(params: RedisParam) {
  return request<RedisParam>({
    url: "/config/verifyRedis",
    method: "POST",
    data: params,
  });
}
export function SetSetup(params: SetupParam) {
  return request<RedisParam>({
    url: "/config/setSetup",
    method: "POST",
    data: params,
  });
}
