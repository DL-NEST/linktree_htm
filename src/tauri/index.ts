import { appWindow } from "@tauri-apps/api/window";

export * from "./IPC";

// 判断桌面端
function isPC(): boolean {
  return window.__TAURI_METADATA__ !== undefined;
}

function un(fun: any) {
  if (!isPC()) {
    return;
  }
  fun();
}

function appMinimize() {
  un(() => {
    appWindow.minimize().catch(() => {});
  });
}
function appMaximize() {
  un(() => {
    appWindow.isMaximized().then((res: boolean) => {
      if (res) {
        appWindow.unmaximize().catch(() => {});
      } else {
        appWindow.maximize().catch(() => {});
      }
    });
  });
}
function appClose() {
  un(() => {
    appWindow.close().catch(() => {});
  });
}

export { isPC, appMinimize, appMaximize, appClose };
