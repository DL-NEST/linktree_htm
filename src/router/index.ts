import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";

const router = createRouter({
  //import.meta.env.BASE_URL
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@views/appHome/AppHome.vue"),
    },
    {
      path: "/home",
      name: "home",
      redirect: "/home/device",
      component: () => import("@views/appHome/AppHome.vue"),
      children: [
        {
          path: "/home/device",
          name: "device",
          component: () => import("@views/appHome/pages/HomeDevice.vue"),
        },
        {
          path: "/home/board",
          name: "board",
          component: () => import("@views/appHome/pages/HomeBoard.vue"),
        },
        {
          path: "/home/rule",
          name: "rule",
          component: () => import("@views/appHome/pages/HomeRule.vue"),
        },
        {
          path: "/home/scene",
          name: "scene",
          component: () => import("@views/appHome/pages/HomeScene.vue"),
        },
        {
          path: "/home/user",
          name: "user",
          component: () => import("@views/appHome/pages/HomeUser.vue"),
        },
        {
          path: "/home/plugin",
          name: "plugin",
          component: () => import("@views/appHome/pages/HomePlugin.vue"),
        },
        {
          path: "/home/firmware",
          name: "firmware",
          component: () => import("@views/appHome/pages/HomeFirmware.vue"),
        },
      ],
    },
    // 错误的路由重定向的404页面
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@views/404.vue"),
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
