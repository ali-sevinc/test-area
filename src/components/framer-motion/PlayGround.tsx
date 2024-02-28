import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./PlayGround.module.css";
import AnimatedModal from "./AnimatedModal";
export default function PlayGround() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [rotate, setRotate] = useState<number>(0);

  const [showModal, setShowModal] = useState<boolean>(false);

  function handleShowModal() {
    setShowModal(true);
  }
  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <AnimatedModal isOpen={showModal} onClose={handleCloseModal}>
            <div className={styles.modalItem}>
              <h2>Modal Header</h2>
              <p>Modal Content</p>
              <div className={styles.modalActions}>
                <button onClick={handleCloseModal}>Cancel</button>
                <button>Submit</button>
              </div>
            </div>
          </AnimatedModal>
        )}
      </AnimatePresence>

      <div className={styles.container}>
        <button onClick={handleShowModal}>Show animated modal</button>
        <motion.div
          className={styles.circle}
          animate={{ x, y, rotate }}
          transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
        />

        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <label htmlFor="x">X</label>
            <input
              id="x"
              type="number"
              onChange={(e) => setX(+e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="y">Y</label>
            <input
              id="y"
              type="number"
              onChange={(e) => setY(+e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="rotate">Rotate</label>
            <input
              id="rotate"
              type="number"
              onChange={(e) => setRotate(+e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
