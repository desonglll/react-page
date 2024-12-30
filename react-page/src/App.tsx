import * as _reactLogo from "./assets/react.svg";
import * as _viteLogo from "../public/vite.svg";
import "./App.css";
import init, {
  greet,
  binary_to_hex,
} from "../../wasm-hex-rust/pkg/wasm_hex_rust.js";
import { useEffect, useState } from "react";

function App() {
  const [hexValue, sethexValue] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget[0] as HTMLInputElement;

    // 将输入的字符串解析为数字并存储为字节数组
    const byteValue = Number.parseInt(inputElement.value, 10); // 将字符串 "172" 转换为数字 172
    if (Number.isNaN(byteValue) || byteValue < 0 || byteValue > 255) {
      console.error("请输入一个有效的字节值 (0-255)");
      return;
    }
    const inputBytes = new Uint8Array([byteValue]); // 创建字节数组
    // 调用 binary_to_hex 函数
    const result = binary_to_hex(inputBytes);
    sethexValue(result); // 设置十六进制值
  };
  useEffect(() => {
    const loadWasm = async () => {
      await init();
      const msg = greet("mike");
      console.log(msg);
      console.log(hexValue);
    };
    loadWasm();
    return () => {};
  }, [hexValue]);

  return (
    <>
      <div>
        <h2>Binary to Hex</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
