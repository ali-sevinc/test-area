import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
  onClick: () => void;
  isSelected: boolean;
};
export default function GameItem({ children, onClick, isSelected }: PropsType) {
  return (
    <li
      className={` border-[1rem] text-[4rem] md:border-[2rem] md:text-[6rem]  ${
        isSelected ? "border-green-700" : "border-stone-700"
      } box-border flex cursor-pointer items-center justify-center rounded-full bg-stone-50 px-8 py-8 text-stone-700`}
    >
      <button className="w-full" onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
