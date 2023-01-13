import request from "@/service/request/request";
import { Entity } from "@/service/request/entity";

/**
 * @Description 健康检查
 * @return 题目 id
 */
export function getHealthy() {
  return request<string>({
    url: "/healthy",
    method: "GET",
  });
}
/**
 * @Description 用户登录
 * @param params
 * @return LoginRouterType
 */
export function login(params: LoginParam) {
  return request<LoginRouterType>({
    url: "/login",
    method: "POST",
    data: params,
  });
}

/**
 * @Description 用户实体请求对象
 */
export const userEntity = new Entity<
  UserQueryType,
  UserDataType,
  UserRouterType
>({
  version: "v1",
  entityName: "user",
});
