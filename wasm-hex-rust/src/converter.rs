use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn binary_to_hex(binary: &[u8]) -> String {
    println!("binary: {:?}", binary);
    let mut hex_string = String::with_capacity(binary.len() * 2);
    for byte in binary {
        use std::fmt::Write;
        write!(&mut hex_string, "{:02x}", byte).unwrap();
    }
    hex_string
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_binary_to_hex() {
        assert_eq!(binary_to_hex(&[172]), "ac"); // 数字 172 → 十六进制 ac
        assert_eq!(binary_to_hex(&[49, 55, 50]), "313732"); // ASCII 的 "172"
    }
}
