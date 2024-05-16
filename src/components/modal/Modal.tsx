import { ReactNode, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import styles from "./Modal.module.css";
import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

type PropsType = { children: ReactNode; isOpen: boolean; onClose: () => void };
export default function Modal({ children, isOpen, onClose }: PropsType) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(
    function () {
      if (!ref.current) return;

      if (isOpen) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    },
    [isOpen],
  );

  return createPortal(
    <motion.dialog
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className={styles.modal}
      ref={ref}
      onClose={onClose}
    >
      {children}
      <button onClick={onClose} className={styles.close}>
        <HiOutlineX />
      </button>
    </motion.dialog>,
    document.body,
  );
}
