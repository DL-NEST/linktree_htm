/** 路由守卫 */
import type { Router } from "vue-router";
import { nextPage } from "./handlerInterceptor";
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
function createRouterGuide(router: Router) {
  router.beforeEach((to, from, next) => {
    if (from.path === "/" || from.path === "/login") {
    } else {
      // 开始进度条跳转加载
    }
    // 页面跳转检测(权限检测和登录检测)
    nextPage(to, from, next);
  });
  router.afterEach((to) => {
    // 结束进度条跳转加载
  });
}

export { createRouterGuide };
