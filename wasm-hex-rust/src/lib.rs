use wasm_bindgen::prelude::*;
mod converter;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
