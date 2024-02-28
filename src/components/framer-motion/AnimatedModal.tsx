import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

import styles from "./AnimatedModal.module.css";
import { createPortal } from "react-dom";

type PropsType = { children: ReactNode; onClose: () => void; isOpen: boolean };
export default function AnimatedModal({
  children,
  onClose,
  isOpen,
}: PropsType) {
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
    [isOpen]
  );

  return createPortal(
    <motion.dialog
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      exit={{ opacity: 0, y: 50 }}
      className={styles.modal}
      ref={ref}
      onClose={onClose}
    >
      {children}
    </motion.dialog>,
    document.getElementById("modal")!
  );
}
