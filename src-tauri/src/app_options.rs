pub mod events;
pub mod global_shortcuts;
pub mod ipc_handler;
pub mod menu;
pub mod tray;

use crate::app_options::events::register_events;
use crate::app_options::global_shortcuts::register_shortcuts;
use crate::app_options::tray::new_tray;
use std::error::Error;
use tauri::{App, Wry,Window};

type AppSetup = fn(&mut App<Wry>) -> Result<(), Box<dyn Error>>;

// 装饰器阴影
#[cfg(target_os = "windows")]
    pub fn native_windows(window: &Window<Wry>) {

    use window_shadows::set_shadow;
    use window_vibrancy::{apply_blur};

    apply_blur(window, Some((18, 18, 18, 125))).expect("Unsupported platform! 'apply_blur' is only supported on Windows");

    set_shadow(window, true).unwrap();

}

pub fn set_setup() -> AppSetup {
    |app| {
        // 启动窗口
        let splashscreen_window = tauri::WindowBuilder::new(
            app,
            "splashscreen", /* the unique window label */
            tauri::WindowUrl::App("splashscreen/index.html".parse().unwrap()),
        )
            .inner_size(300_f64, 350_f64)
            .decorations(false)
            .center()
            .resizable(false)
            .visible(false)
            .transparent(true)
            .build().expect("splashscreen creation failed");
        native_windows(&splashscreen_window);

        // 主窗口
        let main_window = tauri::WindowBuilder::new(
            app,
            "main", /* the unique window label */
            tauri::WindowUrl::App("index.html".parse().unwrap()),
        )
            .inner_size(1280_f64, 760_f64)
            .decorations(false)
            .center()
            .resizable(true)
            .visible(false)
            .transparent(true)
            .focused(true)
        .build().expect("main creation failed");
        native_windows(&main_window);


        // 注册通道事件
        let app_handle = app.handle();
        new_tray(app_handle).build(app).expect("Failed to create a new tray");
        register_events(app);
        // 注册全局快捷键
        register_shortcuts(app);

        //translate(app);

        // for x in app.app_handle().windows().borrow() {
        //     println!("{}",x.0);
        //     // x.1.open_devtools();
        // }
        //

        Ok(())
    }
}
