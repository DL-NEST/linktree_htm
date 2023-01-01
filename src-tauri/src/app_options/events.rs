use tauri::{App, Manager, Wry};

pub fn register_events(_app: &mut App<Wry>) {
    // listen to the `event-name` (emitted on any window)
    let id = _app.listen_global("event-name", |event| {
        println!("got event-name with payload {:?}", event.payload());
    });
    // unlisten to the event using the `id` returned on the `listen_global` function
    // an `once_global` API is also exposed on the `App` struct
    _app.unlisten(id);
    // emit the `event-name` event to all webview app_windows on the frontend
    _app.emit_all("event-name", Payload { message: "Tauri is awesome!".into() }).unwrap();
}

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}
