import { useRef, useState } from "react";
import QRCode from "react-qr-code";
export default function QRCodeGenerator() {
  const [value, setValue] = useState<string>("enter a value");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleGenarate() {
    const enteredValue = inputRef.current?.value;
    if (!inputRef.current || !enteredValue) return;

    setValue(enteredValue);
    inputRef.current.value = "";
  }

  return (
    <div className="mx-auto mt-12 flex w-96 flex-col items-center gap-2 rounded-xl bg-blue-500 p-8  ">
      <div>
        <QRCode value={value} className="w-full" viewBox={`0 0 256 256`} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="flex flex-col gap-1">
          <label htmlFor="value" className="text-stone-50">
            Enter Value
          </label>
          <input
            ref={inputRef}
            id="value"
            className="  px-2 py-1 focus:outline-none focus:ring-4 focus:ring-stone-600 focus:ring-offset-2"
          />
        </p>
        <button className="bg-stone-50" onClick={handleGenarate}>
          Genarate
        </button>
      </div>
    </div>
  );
}
