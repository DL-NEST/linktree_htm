import axios, { type AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import { useStorageStore } from "@/stores/StorageStore";
/**
 * @Description 设置axios，注册拦截器
 * 开发环境使用node代理，生产环境分desktop = 绝对地址 htm = 代理地址
 */
function getBaseUrl(): string {
  if (!import.meta.env.DEV && import.meta.env.MODE === "desktop") {
    return "http://localhost:5523";
  }
  return "/api";
}
// 创建axios
const instance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 2000,
});
// 请求拦截器
instance.interceptors.request.use(
  (requestConfig) => {
    const useCounter = useStorageStore();
    requestConfig.headers = {
      Authorization: useCounter.access_token,
    };
    // requestConfig.method 断言string
    if (/^(POST|PUT|post|put)$/i.test(requestConfig.method as string)) {
      requestConfig.headers = {
        // TODO: 在浏览器缓存获取token
        "Content-Type": "application/json",
      };
    }
    return requestConfig;
  },
  (err) => {
    return Promise.reject(err);
  },
  {}
);
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const { response } = err;
    if (response) {
      // 服务器返回错误结果
      ElMessage.error(`${response.status}:${response.data.msg}`);
    } else {
      // 服务器未返回错误结果
      ElMessage.error("response error");
    }
    return Promise.reject(err);
  },
  {}
);

export function request<T>(config: AxiosRequestConfig): Promise<Restful<T>> {
  return instance(config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export default request;
