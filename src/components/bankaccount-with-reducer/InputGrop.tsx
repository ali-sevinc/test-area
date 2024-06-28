import { ForwardedRef, ReactNode, forwardRef } from "react";

type InputGrupType = {
  onClick: () => void;
  name: string;
  placeholder: string;
  children: ReactNode;
  error: boolean;
};
const InputGrop = forwardRef(
  (
    { children, name, onClick, placeholder, error }: InputGrupType,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <p
        className={`mx-auto flex w-1/2 items-center justify-center divide-x-2 rounded-xl text-stone-800 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 ${error ? "focus-within:ring-red-600" : ""}`}
      >
        <input
          ref={ref}
          type="number"
          name={name}
          className={`rounded-l-xl bg-stone-50 px-4 py-2 focus:outline-none`}
          placeholder={placeholder}
        />
        <button
          onClick={onClick}
          className="w-28 rounded-r-xl bg-stone-50 px-4 py-2 duration-200 hover:bg-stone-200"
        >
          {children}
        </button>
      </p>
    );
  },
);

export default InputGrop;
