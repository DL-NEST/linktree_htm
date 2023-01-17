pub mod events;
pub mod global_shortcuts;
pub mod ipc_handler;
pub mod menu;
pub mod tray;

use crate::app_options::events::register_events;
use crate::app_options::global_shortcuts::register_shortcuts;
use crate::app_options::tray::new_tray;
use std::error::Error;
use tauri::{App, Wry};

pub fn set_setup() -> fn(&mut App<Wry>) -> Result<(), Box<dyn Error>> {
    |app| {
        // 注册通道事件
        let handle = app.handle();
        new_tray(handle).build(app).expect("TODO: panic message");
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
