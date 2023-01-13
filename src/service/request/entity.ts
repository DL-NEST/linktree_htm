import request from "@/service/request/request";

/**
 * @Description Restful风格api实体的请求封装
 */

type EntityOptions = {
  version: string;
  entityName: string;
};

/**
 * @Description 实体的类
 *  version 接口版本 | entityName 实体名称
 *  一个实体的类型规范有 请求的查询参数类型 Q，请求携带的数据类型 D，请求返回实体数据类型 R，
 */
export class Entity<Q, D, R> {
  version: string;
  entityName: string;
  requestUrl = (query?: Q | undefined): string => {
    if (query) {
      let queryString: string = "?";
      for (const key in query) {
        queryString += `${key}=${query[key]}&`;
      }
      queryString = queryString.slice(0, queryString.length - 1);
      return `/${this.version}/${this.entityName}${queryString}`;
    }
    return `/${this.version}/${this.entityName}`;
  };
  constructor(options: EntityOptions) {
    this.version = options.version;
    this.entityName = options.entityName;
  }
  // 获取实体数据，返回一个数组 url:/实体名称?实体查询参数
  get(query?: Q): Promise<Restful<R[]>> {
    return request<R[]>({
      url: this.requestUrl(query),
      method: "GET",
    });
  }
  // 添加一个实体，携带数据 url:/实体名称
  post(data: D): Promise<Restful<R>> {
    return request<R>({
      url: this.requestUrl(),
      method: "POST",
      data: data,
    });
  }
  // 查询一个实体并更新 url:/实体名称?实体查询参数
  put(query: Q, data: D): Promise<Restful<R>> {
    return request<R>({
      url: this.requestUrl(query),
      method: "PUT",
      data: data,
    });
  }
  // 删除一个实体 url:/实体名称?实体查询参数
  delete(query?: Q): Promise<Restful<R>> {
    return request<R>({
      url: this.requestUrl(query),
      method: "DELETE",
    });
  }
}
