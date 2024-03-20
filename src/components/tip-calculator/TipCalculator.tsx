import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [howSatisfied, setHowSatisfied] = useState(0);

  const tip = howSatisfied > 0 ? (bill * howSatisfied) / 100 : 0;
  const calculatedBill = bill + tip;

  return (
    <div className="min-h-screen bg-zinc-700 pt-32">
      <div className=" mx-auto flex w-full max-w-[24rem] flex-col items-center gap-4 rounded-xl bg-stone-200 px-8 py-6 md:max-w-[32rem] md:items-baseline">
        <h1 className="text-2xl">Tip Calculator</h1>
        <div className="flex flex-col justify-between md:w-full md:flex-row">
          <label htmlFor="bill">Bill: </label>
          <input
            className="w-52 py-1 pl-2"
            id="bill"
            type="number"
            value={bill}
            onChange={(e) => setBill(+e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-between md:w-full md:flex-row">
          <label htmlFor="like-services">How did you like the services: </label>
          <select
            id="like-services"
            className="w-52 px-2 py-1"
            onChange={(e) => setHowSatisfied(+e.target.value)}
          >
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={20}>It was amazing (20%)</option>
          </select>
        </div>
        {bill > 0 && (
          <div>
            <p>
              <span>Total Bill: </span>{" "}
              <b>
                ${calculatedBill.toFixed(2)} (${bill.toFixed(2)}+$
                {tip.toFixed(2)})
              </b>
            </p>
            <button
              onClick={() => {
                setBill(0);
                setHowSatisfied(0);
              }}
              className="border border-stone-500 px-1"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
