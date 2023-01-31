import { createApp } from "vue";
import "virtual:svg-icons-register";
// css
import "./style/index.scss";
// app
import App from "./App.vue";
import { setupRouter } from "@/router";
import setupGlobalComponents from "@/components/global";
import { locales } from "@/utils/locales";
import { setupStores } from "@/stores";
import { isPC } from "@/utils/tauri";
import { createSocket } from "@/service/websocket";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // 页面加载完毕
    // invoke("close_splashscreen");
  }
};

const app = createApp(App);

(async function setupApp() {
  app.use(locales);
  // 装载全局store/pinia
  setupStores(app);
  // 装载路由
  await Promise.all([setupRouter(app)]);
  // 初始化全局组件
  setupGlobalComponents(app);
  // 挂载实列
  app.mount("#app");
})();

// socket连接
// createSocket();
