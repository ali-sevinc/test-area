import { useState } from "react";
import Modal from "./Modal";
import styles from "./ModalContent.module.css";
import { AnimatePresence } from "framer-motion";

export default function ModalContent() {
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
          <Modal isOpen={showModal} onClose={handleCloseModal}>
            <div className={styles.content}>
              <h1>This is the content header.</h1>

              <p>This is a paraghraph</p>

              <p>
                <button onClick={handleCloseModal}>Close Modal</button>
              </p>
            </div>
          </Modal>
        )}
      </AnimatePresence>

      <div className={styles.container}>
        <button className={styles.button} onClick={handleShowModal}>
          Show Modal
        </button>
      </div>
    </>
  );
}
