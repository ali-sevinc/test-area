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
  const [amount, setAmount] = useState({ value: 0, error: false });
  const [term, setTerm] = useState({ value: 0, error: false });
  const [rate, setRate] = useState({ value: 0, error: false });

  const [repay, setRepay] = useState(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!amount.value || isNaN(amount.value)) {
      setAmount((prev) => ({ ...prev, error: true }));
    }
    if (!term.value || isNaN(term.value)) {
      setTerm((prev) => ({ ...prev, error: true }));
    }
    if (!rate.value || isNaN(rate.value)) {
      setRate((prev) => ({ ...prev, error: true }));
    }

    if (
      !amount.value ||
      isNaN(amount.value) ||
      !term.value ||
      isNaN(term.value) ||
      !rate.value ||
      isNaN(rate.value)
    )
      return;

    const monthlyPayment = calculateMortgate({
      amount: amount.value,
      interestRate: rate.value / 100,
      year: term.value,
    });

    setRepay(monthlyPayment);
  }

  function handleReset() {
    setAmount({ value: 0, error: false });
    setRate({ value: 0, error: false });
    setTerm({ value: 0, error: false });
    setRepay(0);
  }

  const totalRepay = repay * 12 * term.value;

  return (
    <div className="grid h-80 min-h-screen items-center justify-center bg-blue-200 px-2">
      <div className="grid max-w-3xl rounded-xl bg-blue-50 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-t-xl bg-blue-50 px-4 py-2 sm:rounded-l-xl md:rounded-r-none"
        >
          <h2 className="pb-2 text-2xl font-semibold">Mortgage Calculator</h2>
          <InputGroup
            icon={<FaEuroSign />}
            id="amount"
            label="Mortgage Amount"
            setValue={(e) =>
              setAmount((prev) => ({ ...prev, value: e, error: false }))
            }
            error={amount.error}
          />
          <div className="flex gap-2">
            <InputGroup
              icon={<VscTerminalUbuntu />}
              id="term"
              label="Mortgage Term (years)"
              setValue={(e) =>
                setTerm((prev) => ({ ...prev, value: e, error: false }))
              }
              error={term.error}
            />
            <InputGroup
              icon={<FaPercent />}
              id="rate"
              label="Interest/Year"
              setValue={(e) =>
                setRate((prev) => ({ ...prev, value: e, error: false }))
              }
              error={rate.error}
            />
          </div>
          <div className="flex items-center justify-center gap-4 py-4">
            <button
              className="rounded bg-zinc-600 px-4 py-2 font-semibold text-zinc-50 duration-200 hover:bg-zinc-700"
              onClick={handleReset}
              type="reset"
            >
              Reset
            </button>
            <button className="rounded bg-blue-300 px-4 py-2 font-semibold duration-200 hover:bg-blue-400">
              Calculate
            </button>
          </div>
        </form>
        <div className="flex h-80 flex-col items-center justify-center rounded-b-xl rounded-tr-[5rem] bg-slate-700 px-4 py-2 text-blue-50 md:rounded-l-none md:rounded-r-xl md:rounded-bl-[5rem] md:rounded-tr-xl">
          {totalRepay === 0 && (
            <div className="flex flex-col items-center justify-center">
              <FaCalculator className="text-[8rem]" />
              <h2 className="text-2xl font-semibold">Results shown here</h2>
            </div>
          )}
          {totalRepay > 0 && (
            <div className="flex flex-col gap-2 rounded-md border-t-4 border-t-green-400">
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
