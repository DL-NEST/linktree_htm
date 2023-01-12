import request from "@/service/request";

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
 * @return UserRouterType
 */
export function login(params: UserLoginParam) {
  return request<UserRouterType>({
    url: "/login",
    method: "POST",
    data: params,
  });
}
