use tauri::{App, Wry};


pub fn translate(app : &mut App<Wry>){
    tauri::WindowBuilder::new(
        app,
        "win_manager",
        tauri::WindowUrl::App("https://www.baidu.com".into()
        ))
        .build().expect("TODO: panic message");
}