import { useState } from "react";

type OperationsType = "/" | "+" | "-" | "*" | null;
const NUMS = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function calculate(num1: number, num2: number, operation: OperationsType) {
  if (!operation) return;

  if (operation === "+") {
    return num1 + num2;
  }
  if (operation === "-") {
    return num1 - num2 === 0 ? "0" : num1 - num2;
  }
  if (operation === "*") {
    return num1 * num2;
  }
  if (operation === "/") {
    return num1 / num2;
  }
}

export default function Calculator() {
  const [selectedNums, setSelectedNums] = useState<null | number>(null);
  const [operation, setOperations] = useState<OperationsType>(null);
  const [nums, setNums] = useState<string>("");

  function handleChangeNums(num: string) {
    setNums((cur) => cur.concat(num));
  }
  function handleDeleteNums() {
    if (!nums.length) return;
    setNums((cur) => cur.slice(0, -1));
  }

  function handleSelectOperation(oper: OperationsType) {
    if (operation !== null) return;
    setOperations(oper);
    setSelectedNums(nums === "0" ? 0 : +nums);
    setNums("");
  }

  function handleCalulate() {
    if ((+nums !== 0 && !nums?.length) || !selectedNums?.toString().length)
      return;
    const result = calculate(selectedNums, +nums, operation);
    if (!result && result !== 0) return;
    setNums(result === 0 ? "0" : result?.toString());
    setOperations(null);
  }

  function handleDecimal() {
    if (nums.includes(".")) return;
    if (!nums.length) {
      return setNums("0.");
    }
    setNums((cur) => cur.concat("."));
  }

  const formattedNum =
    nums === "0." ? nums : Intl.NumberFormat("en").format(+nums);
  const formattedSelectedNum = Intl.NumberFormat("en").format(
    selectedNums || 0
  );

  function handleReset() {
    setNums("");
    setOperations(null);
    setSelectedNums(null);
  }

  return (
    <div className="min-h-screen bg-zinc-700 pt-12 ">
      <div className="w-[24rem] bg-slate-500 flex flex-col gap-8 mx-auto px-2 pb-8 p-4 rounded">
        <div className="flex items-center justify-between px-4 pb-4 border-b">
          <h1 className="text-zinc-50 text-2xl">Calculator</h1>
        </div>
        <div className="bg-zinc-800 h-20 rounded-xl justify-end relative text-zinc-50 px-4 flex items-center text-5xl">
          <input
            className="w-full h-full focus:outline-none bg-transparent text-end"
            type="text"
            value={formattedNum}
            disabled
          />
          {typeof selectedNums === "number" && (
            <span className="absolute top-[-0.7rem] left-4 text-base bg-zinc-300 text-zinc-800 rounded-lg px-4">
              {formattedSelectedNum}
            </span>
          )}
        </div>
        <div className="bg-zinc-800 p-4 rounded-xl flex justify-between">
          <div className="flex">
            <ul className="grid grid-cols-3 gap-1">
              {NUMS.map((num) => (
                <li
                  key={num}
                  className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl "
                >
                  <button
                    className="w-full h-full"
                    onClick={() => handleChangeNums(num.toString())}
                  >
                    {num}
                  </button>
                </li>
              ))}
              <li className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button className="w-full h-full" onClick={handleDecimal}>
                  .
                </button>
              </li>
              <li className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button
                  className="w-full h-full"
                  onClick={() => handleChangeNums("0")}
                >
                  0
                </button>
              </li>
              <li className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button
                  className="w-full h-full"
                  onClick={() => handleSelectOperation("/")}
                >
                  /
                </button>
              </li>
            </ul>
            <ul className="flex flex-col gap-1 ml-1">
              <li className="bg-zinc-500 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button className="w-full h-full" onClick={handleDeleteNums}>
                  DEL
                </button>
              </li>
              <li className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button
                  className="w-full h-full"
                  onClick={() => handleSelectOperation("+")}
                >
                  +
                </button>
              </li>
              <li className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button
                  className="w-full h-full"
                  onClick={() => handleSelectOperation("-")}
                >
                  -
                </button>
              </li>
              <li className="bg-zinc-50 w-20 h-20 rounded-lg border-b-8 flex items-end justify-center text-2xl ">
                <button
                  className="w-full h-full"
                  onClick={() => handleSelectOperation("*")}
                >
                  *
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between  gap-2 text-xl font-semibold text-zinc-50">
          <button
            className="w-full bg-zinc-600 rounded-lg py-4"
            onClick={handleReset}
          >
            RESET
          </button>
          <button
            className="w-full bg-red-600 rounded-lg py-4"
            onClick={handleCalulate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
