import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};
export default function Button({
  children,
  onClick,
  type = "button",
}: PropsType) {
  return (
    <button
      type={type}
      onClick={onClick && onClick}
      className="bg-orange-400 px-4 py-1 rounded-xl hover:bg-orange-500 duration-200"
    >
      {children}
    </button>
  );
}
