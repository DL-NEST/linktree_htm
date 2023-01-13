use tauri::api::notification::Notification;
use tauri::{Invoke, Manager, Wry};

pub fn ipc_handler() -> fn(Invoke<Wry>) {
    return tauri::generate_handler![
            my_custom_command,
            close_splashscreen,
        ready_splashscreen
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
async fn close_splashscreen(app_handle: tauri::AppHandle<Wry>) {
    // Close splashscreen
    if let Some(splashscreen) = app_handle.get_window("splashscreen") {
        splashscreen.close().unwrap();
    }
    // Show main window
    app_handle.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
async fn ready_splashscreen(app_handle: tauri::AppHandle<Wry>) {
    // Show main window
    app_handle.get_window("splashscreen").unwrap().show().unwrap();
}
