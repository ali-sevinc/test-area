import { useRef, useState } from "react";
import QRCode from "react-qr-code";
export default function QRCodeGenerator() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleGenarate() {
    const enteredValue = inputRef.current?.value;
    if (!inputRef.current || !enteredValue) return;

    setValue(enteredValue);
    inputRef.current.value = "";
  }

  return (
    <div
      style={{
        margin: "1rem auto",
        width: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div>
        <label>Enter Value</label>
        <input ref={inputRef} />
        <button onClick={handleGenarate}>Genarate</button>
      </div>
      <div style={{ width: "256px" }}>
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
}
