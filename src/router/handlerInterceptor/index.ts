import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

/** 处理页面的权限和是否登录跳转 */
function nextPage(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // let isLogin = false;
  // if (isLogin) {
  //   next();
  // } else {
  //   next({ name: 'login' });
  // }
  // const needLogin = Boolean(to.meta?.requiresAuth);
  next();
}

export { nextPage };
