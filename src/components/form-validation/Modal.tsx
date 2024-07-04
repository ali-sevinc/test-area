import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

type PropsType = { isOpen: boolean; onClose: () => void; children: ReactNode };
export default function Modal({ isOpen, onClose, children }: PropsType) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(
    function () {
      if (isOpen) {
        ref.current?.showModal();
      } else {
        ref.current?.close();
      }
    },
    [isOpen]
  );
  return createPortal(
    <dialog
      onClose={onClose}
      ref={ref}
      className="backdrop:bg-zinc-950/70 relative p-4 max-w-lg w-full bg-zinc-700"
    >
      {children}
      <button onClick={onClose} className="absolute top-2 right-2 text-zinc-50">
        <HiX />
      </button>
    </dialog>,
    document.body
  );
}
