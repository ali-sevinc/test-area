import { useState } from "react";
import Output from "./Output";

export default function Hello() {
  const [isTextChanged, setIsTextChanged] = useState(false);

  function handleClick() {
    setIsTextChanged(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!isTextChanged && <Output>I'm glad to see you!</Output>}
      {isTextChanged && <Output>Changed Text</Output>}

      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}
