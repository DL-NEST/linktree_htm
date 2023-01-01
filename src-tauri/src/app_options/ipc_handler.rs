use tauri::api::notification::Notification;
use tauri::{Invoke, Wry};

pub fn ipc_handler() -> fn(Invoke<Wry>) {
    return tauri::generate_handler![
            my_custom_command,
            my_custom_sys
        ]
}

#[tauri::command]
fn my_custom_command(app_handle: tauri::AppHandle<Wry>) {
    Notification::new(&app_handle.config().tauri.bundle.identifier)
        .title("一个通知")
        .body("通知的消息主体")
        .icon("D:\\tauri_app\\item\\src-tauri\\icons\\icon.png")
        .show().expect("TODO: panic message");
}

#[tauri::command]
fn my_custom_sys() {
    println!("I was invoked from JS!");
}
