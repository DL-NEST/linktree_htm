import { createRouter, createWebHistory } from "vue-router";
import type { App } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@views/AppHome.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@views/AppHome.vue"),
      children: [],
    },
  ],
});

export async function setupRouter(app: App) {
  // 装载路由
  app.use(router);
  // 装载路由守卫
  // createRouterGuide(router);
  // 等待装载结束
  await router.isReady();
}
