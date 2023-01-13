use tauri::{App, Wry};

#[allow(dead_code)]
pub fn translate(app : &mut App<Wry>){
    tauri::WindowBuilder::new(
        app,
        "win_manager",
        tauri::WindowUrl::App("https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home?hl=zh-CN".into()
        ))
        .build().expect("TODO: panic message");
}