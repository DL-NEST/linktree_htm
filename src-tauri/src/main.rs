#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]

mod app_options;
mod app_windows;


use crate::app_options::ipc_handler::{ipc_handler};
use crate::app_options::{set_setup};

fn main() {

  let context = tauri::generate_context!();

  tauri::Builder::default()
      // 程序运行之后，挂载事件通道
      .setup(set_setup())
      //设置ipc消息处理函数
      .invoke_handler(ipc_handler())
      // 运行程序
      .run(context)
      .expect("运行 tauri 应用程序时出错");
}
