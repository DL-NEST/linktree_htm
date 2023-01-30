import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";

export const router = createRouter({
  //import.meta.env.BASE_URL
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/init",
    },
    {
      path: "/init",
      name: "init",
      redirect: "/db",
      component: () => import("@pages/init/index.vue"),
      children: [
        {
          path: "/db",
          name: "db",
          component: () => import("@pages/init/dbPage.vue"),
        },
        {
          path: "/redis",
          name: "redis",
          component: () => import("@pages/init/redisPage.vue"),
        },
        {
          path: "/setup",
          name: "setup",
          component: () => import("@pages/init/setupPage.vue"),
        },
        {
          path: "/result",
          name: "result",
          component: () => import("@pages/init/result.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@pages/appHome/AppHome.vue"),
    },
    {
      path: "/home",
      name: "home",
      redirect: "/home/device",
      component: () => import("@pages/appHome/AppHome.vue"),
      children: [
        {
          path: "/home/device",
          name: "device",
          component: () => import("@pages/appHome/pages/HomeDevice.vue"),
        },
        {
          path: "/home/board",
          name: "board",
          component: () => import("@pages/appHome/pages/HomeBoard.vue"),
        },
        {
          path: "/home/rule",
          name: "rule",
          component: () => import("@pages/appHome/pages/HomeRule.vue"),
        },
        {
          path: "/home/scene",
          name: "scene",
          component: () => import("@pages/appHome/pages/HomeScene.vue"),
        },
        {
          path: "/home/user",
          name: "user",
          component: () => import("@pages/appHome/pages/HomeUser.vue"),
        },
        {
          path: "/home/plugin",
          name: "plugin",
          component: () => import("@pages/appHome/pages/HomePlugin.vue"),
        },
        {
          path: "/home/firmware",
          name: "firmware",
          component: () => import("@pages/appHome/pages/HomeFirmware.vue"),
        },
      ],
    },
    // 错误的路由重定向的404页面
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@pages/404.vue"),
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
