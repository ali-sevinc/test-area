import { ReactNode, useState } from "react";

const DUMMY_ITEMS = [
  { id: 1, text: "Learn HTML/CSS 🏢" },
  { id: 2, text: "Learn JavaScript 👨‍💻" },
  { id: 3, text: "Learn React ⚛" },
  { id: 4, text: "Improve your skills 🚀" },
  { id: 5, text: "Land a Job 💻" },
];

export default function StepsMenu() {
  const [step, setStep] = useState<number>(0);

  function handlePrevious() {
    setStep((cur) => (cur <= 0 ? 0 : cur - 1));
  }

  function handleNext() {
    setStep((cur) =>
      cur >= DUMMY_ITEMS.length - 1 ? DUMMY_ITEMS.length - 1 : cur + 1,
    );
  }

  return (
    <div className="mx-auto mt-12 flex w-[32rem] flex-col gap-8 bg-stone-300 px-4 py-5 shadow-xl">
      <ul className="flex justify-around">
        {DUMMY_ITEMS.map((item, index) => (
          <StepItem
            onClick={() => setStep(index)}
            key={item.id}
            isStepped={index <= step}
          >
            {index + 1}
          </StepItem>
        ))}
      </ul>

      <p className="py-4 text-center text-lg ">
        <span>Step {step + 1}: </span>
        <b>{DUMMY_ITEMS[step].text}</b>
      </p>

      <div className="flex justify-between px-12">
        <Button disabled={step <= 0} onClick={handlePrevious}>
          Previous
        </Button>
        <Button disabled={step >= DUMMY_ITEMS.length - 1} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

function StepItem({
  children,
  isStepped,
  onClick,
}: {
  children: ReactNode;
  isStepped: boolean;
  onClick: () => void;
}) {
  return (
    <li
      className={`rounded-full border   ${
        isStepped
          ? "border-stone-50 bg-purple-400 text-stone-50"
          : "border-stone-600 bg-stone-100"
      }`}
    >
      <button className="px-4 py-2 " onClick={onClick}>
        {children}
      </button>
    </li>
  );
}

function Button({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      className="rounded-xl border bg-purple-400 px-4 py-1 font-semibold duration-200 hover:bg-purple-500 disabled:cursor-not-allowed disabled:text-stone-300 disabled:hover:bg-purple-400"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
