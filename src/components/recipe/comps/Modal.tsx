import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

type PropsType = {
  className: string;
  children: ReactNode;
  onClose: () => void;
};
export default function Modal({ children, className, onClose }: PropsType) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="w-full h-full fixed bg-stone-800/50 top-0 left-0 z-20"
      />
      <div className={`pl-4 ${className}`}>
        {children}
        <button onClick={onClose} className="fixed top-0 text-2xl left-1">
          <HiOutlineX />
        </button>
      </div>
    </>,
    document.getElementById("modal")!
  );
}
