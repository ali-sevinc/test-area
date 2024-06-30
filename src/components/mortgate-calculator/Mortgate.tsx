import { FormEvent, useState } from "react";
import InputGroup from "./InputGroup";
import { FaEuroSign, FaPercent, FaCalculator } from "react-icons/fa";
import { VscTerminalUbuntu } from "react-icons/vsc";

function calculateMortgate({
  amount,
  year,
  interestRate,
}: {
  amount: number;
  year: number;
  interestRate: number;
}) {
  const montlyInterest = interestRate / 12;
  const totalPaymentNumber = year * 12;
  const payment =
    (amount *
      montlyInterest *
      Math.pow(1 + montlyInterest, totalPaymentNumber)) /
    (Math.pow(1 + montlyInterest, totalPaymentNumber) - 1);

  return payment;
}

function handleFormat(value: number) {
  const formatted = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted.format(value);
}

export default function Mortgate() {
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [repay, setRepay] = useState(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (
      !amount ||
      isNaN(amount) ||
      !term ||
      isNaN(term) ||
      !rate ||
      isNaN(rate)
    )
      return;

    const monthlyPayment = calculateMortgate({
      amount,
      interestRate: rate / 100,
      year: term,
    });

    setRepay(monthlyPayment);
  }

  function handleReset() {
    setAmount(0);
    setRate(0);
    setTerm(0);
    setRepay(0);
  }

  const totalRepay = repay * 12 * term;

  return (
    <div className="min-h-screen bg-blue-200 grid items-center justify-center h-80">
      <div className="max-w-2xl grid sm:grid-cols-2 ">
        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 px-4 py-2 rounded-t-xl sm:rounded-r-none sm:rounded-l-xl flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold pb-2">Mortgage Calculator</h2>
          <InputGroup
            icon={<FaEuroSign />}
            id="amount"
            label="Mortgage Amount"
            setValue={(e) => setAmount(e)}
          />
          <div className="flex gap-2">
            <InputGroup
              icon={<VscTerminalUbuntu />}
              id="term"
              label="Mortgage Term"
              setValue={(e) => setTerm(e)}
            />
            <InputGroup
              icon={<FaPercent />}
              id="rate"
              label="Interest Year"
              setValue={(e) => setRate(e)}
            />
          </div>
          <div className="flex items-center justify-center gap-4 py-4">
            <button
              className="bg-zinc-600 text-zinc-50 px-4 py-2 rounded hover:bg-zinc-700 duration-200 font-semibold"
              onClick={handleReset}
              type="reset"
            >
              Reset
            </button>
            <button className="bg-blue-300 px-4 py-2 rounded hover:bg-blue-400 duration-200 font-semibold">
              Calculate
            </button>
          </div>
        </form>
        <div className="bg-slate-700 rounded-r-xl h-80 text-blue-50 px-4 py-2 flex flex-col items-center justify-center">
          {totalRepay === 0 && (
            <div className="flex items-center justify-center flex-col">
              <FaCalculator className="text-[8rem]" />
              <h2 className="text-2xl font-semibold">Results shown here</h2>
            </div>
          )}
          {totalRepay > 0 && (
            <div className="border-t-4 border-t-green-400 rounded-md flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">Your Results</h2>
              <div>
                <p>Monthly Repayment</p>
                <p className="bg-slate-600 p-1">{handleFormat(repay)}</p>
              </div>
              <div>
                <p>Total Repayment</p>
                <p className="bg-slate-600 p-1">{handleFormat(totalRepay)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
