import { invoke } from "@tauri-apps/api/tauri";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // 启动页面加载完毕
    invoke("ready_splashscreen");
  }
};

setTimeout(() => {
  // 跳转主界面
  invoke("close_splashscreen");
}, 2000);
