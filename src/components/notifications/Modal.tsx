import { ReactNode } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

type ModalType = { children: ReactNode; onClose: () => void };
export default function Modal({ children, onClose }: ModalType) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed left-0 top-0 min-h-screen w-full bg-stone-900/60"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        style={{ translateX: "-50%" }}
        className="fixed left-[50%] top-20 z-10 w-full max-w-xl rounded-xl border-blue-700 bg-stone-100 p-4 px-4 py-6"
      >
        {children}
      </motion.div>
    </>,
    document.body,
  );
}
