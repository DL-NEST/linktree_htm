use tauri::{AppHandle, CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem, Wry};

pub fn new_tray(handle: AppHandle<Wry>) -> SystemTray {

    let quit = CustomMenuItem::new("quit".to_string(), "退出");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");

    let tray_menu = SystemTrayMenu::new()
        .add_item(hide)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    return SystemTray::new().with_menu(tray_menu).on_event(move |event| {
        match event {
            SystemTrayEvent::LeftClick { .. } => {
                let window = handle.get_window("main").unwrap();
                window.show().unwrap();
                window.set_focus().unwrap();
            },
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    "hide" => {
                        let window = handle.get_window("main").unwrap();
                        window.hide().unwrap();
                    }
                    _ => {}
                }
            },
            SystemTrayEvent::RightClick { .. } => {}
            SystemTrayEvent::DoubleClick { .. } => {}
            _ => {}
        }
    });
}
