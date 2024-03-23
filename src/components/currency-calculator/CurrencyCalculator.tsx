import { FormEvent, useEffect, useState } from "react";
import Select from "./Select";
import Result from "./Result";

export default function CurrencyCalculator() {
  const [currencies, setCurrencies] = useState<[string, string][]>([]);

  const [selectedCurencies, setSelectedCurrencies] = useState({
    from: "EUR",
    to: "USD",
  });

  const [amount, setAmount] = useState<string>("");
  const [calculatedAmount, setCalculatedAmount] = useState("");

  useEffect(function () {
    async function fetchCurrencies() {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const resData: { [x: string]: string } = await res.json();
      const data = Object.entries(resData);
      setCurrencies(data);
    }
    fetchCurrencies();
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!amount || Number(amount) <= 0 || isNaN(Number(amount))) return;

    if (selectedCurencies.from === selectedCurencies.to)
      return setCalculatedAmount(amount);

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${selectedCurencies.from}&to=${selectedCurencies.to}`
    );
    const data = await res.json();

    setCalculatedAmount(data.rates[selectedCurencies.to]);
  }

  function handleReset() {
    setSelectedCurrencies({
      from: "EUR",
      to: "USD",
    });
    setAmount("");
    setCalculatedAmount("");
  }

  function handleChange(key: string, value: string) {
    setSelectedCurrencies((cur) => ({ ...cur, [key]: value }));
    setCalculatedAmount("");
  }

  return (
    <div className="bg-stone-600 h-screen pt-24">
      <div className="w-[32rem] mx-auto  flex flex-col rounded-xl text-stone-800 gap-4 items-center bg-stone-100 p-12">
        <h1 className="text-xl font-semibold">Currency Changer</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-12">
            <Select
              value={selectedCurencies.from}
              id="from"
              label="From"
              currencies={currencies}
              onChange={handleChange}
            />
            <Select
              value={selectedCurencies.to}
              id="to"
              label="To"
              currencies={currencies}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-12 items-center">
            <div className="flex flex-col">
              <label htmlFor="from-amount">From Amount</label>
              <input
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setCalculatedAmount("");
                }}
                id="from-amount"
                className="text-lg px-2 py-1 bg-stone-200 w-48"
                type="number"
              />
            </div>

            <Result
              amount={amount}
              calculatedAmount={calculatedAmount}
              from={selectedCurencies.from}
              to={selectedCurencies.to}
            />
          </div>
          <div className="flex justify-center gap-12 items-center mt-4">
            <button
              onClick={handleReset}
              type="button"
              className="font-bold hover:scale-105 duration-100"
            >
              Reset
            </button>
            <button className="border bg-stone-600 text-stone-100 px-2 py-1 rounded hover:bg-stone-800 duration-200">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
