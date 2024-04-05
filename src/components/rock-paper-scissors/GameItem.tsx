import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
};
export default function GameItem({ children, onClick, isSelected }: PropsType) {
  return (
    <li
      className={` text-[4rem] border-[1rem] md:text-[8rem] md:border-[2rem]  ${
        isSelected ? "border-green-700" : "border-stone-700"
      } box-border bg-stone-50 text-stone-700 rounded-full px-8 flex items-center justify-center py-8 cursor-pointer`}
    >
      <button className="w-full" onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
