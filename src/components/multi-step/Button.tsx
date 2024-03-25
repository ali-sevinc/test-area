import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};
export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
}: PropsType) {
  return (
    <button
      disabled={disabled}
      onClick={onClick ? onClick : () => {}}
      type={type}
      className="bg-blue-800 hover:bg-blue-900 text-stone-50 px-4 py-2 rounded-lg disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
