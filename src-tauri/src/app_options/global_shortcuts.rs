use tauri::{App, Manager, Wry};
use tauri::{GlobalShortcutManager,ClipboardManager};


pub fn register_shortcuts(_app: &mut App<Wry>) {

    let app_handler = _app.app_handle();
    match _app.global_shortcut_manager().register("Alt+D", move || {
        #[cfg(debug_assertions)]
        {
            app_handler.get_window("main").unwrap().open_devtools();
        }
    }) {
        Ok(_) => {

        }
        Err(_) => {}
    }

    let app_handler1 = _app.get_window("main").unwrap();
    match _app.global_shortcut_manager().register("Alt+S", move || {
        if app_handler1.is_visible().unwrap() {
            app_handler1.hide().unwrap();
        } else {
            app_handler1.show().unwrap();
            app_handler1.unminimize().unwrap();
            app_handler1.set_focus().unwrap();
        }
    }) {
        Ok(_) => {}
        Err(_) => {}
    }

    let app_handler2 = _app.app_handle();
    match _app.global_shortcut_manager().register("Alt+X", move || {
        match app_handler2.clipboard_manager().read_text().unwrap() {
            None => {
                println!("只支持文字类型");
            }
            Some(aa) => {
                println!("aa{}", aa.to_string());
            }
        }
    }) {
        Ok(_) => {}
        Err(_) => {}
    }

}
