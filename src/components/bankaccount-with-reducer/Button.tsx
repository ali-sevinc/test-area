import { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
};
export default function Button({ children, onClick, disabled }: ButtonType) {
  return (
    <button
      disabled={disabled}
      className="bg-stone-800 disabled:hover:bg-stone-800 disabled:cursor-not-allowed hover:bg-stone-900 duration-200 px-8 py-2 rounded-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
