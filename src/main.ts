import { createApp } from "vue";
import { createPinia } from "pinia";
import "virtual:svg-icons-register";
// css
import "./style/index.scss";
// app
import App from "./App.vue";
import { setupRouter } from "./router";
import { isPC } from "@/tauri";
import setupGlobalComponents from "@/components/global";

const app = createApp(App);

(async function setupApp() {
  //判断桌面和网页
  document.body.classList.add(isPC() ? "pc" : "htm");
  // 装载全局store/pinia
  app.use(createPinia());
  // 装载路由
  await Promise.all([setupRouter(app)]);
  // 初始化全局组件
  setupGlobalComponents(app);
  // 挂载实列
  app.mount("#app");
})();
