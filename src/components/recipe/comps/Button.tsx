import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonType = {
  children: ReactNode;
  model?: "button" | "link";
  to?: string;
  onClick?: () => void;
};

const className =
  "border border-orange-300 px-4 py-2 font-semibold hover:text-stone-900 text-stone-600 rounded-md hover:bg-orange-100 duration-200";
export default function Button({
  children,
  model = "button",
  onClick,
  to,
}: ButtonType) {
  if (model === "link" && to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick ? onClick : () => {}} className={className}>
      {children}
    </button>
  );
}
