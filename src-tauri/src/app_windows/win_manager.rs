use tauri::{App, Wry};

#[allow(dead_code)]
pub fn win_manager(app: &mut App<Wry>) {
    tauri::WindowBuilder::new(app, "win_manager", tauri::WindowUrl::App("/about".into()))
        .build()
        .expect("TODO: panic message");

    // app.get_window("main").unwrap().WindowUrl
    // app.app_handle().asset_protocol_scope().allow_file()
}
