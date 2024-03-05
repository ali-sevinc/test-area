import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { motion } from "framer-motion";

import styles from "./Modal.module.css";

type PropsType = { children: ReactNode; open: boolean; onClose: () => void };
export default function Modal({ children, open, onClose }: PropsType) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(
    function () {
      if (!ref.current) return;
      if (open) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    },
    [open]
  );

  return createPortal(
    <motion.dialog
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      ref={ref}
      onClose={onClose}
      className={styles.modal}
    >
      {children}
      <button className={styles.close} onClick={onClose}>
        X
      </button>
    </motion.dialog>,
    document.getElementById("modal")!
  );
}
