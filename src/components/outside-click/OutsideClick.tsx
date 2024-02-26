import { RefObject, useState } from "react";
import { useOutsideClick } from "./useOutsideClick";

import styles from "./OutsideClick.module.css";

export default function OutsideClick() {
  const [showContent, setShowContent] = useState<boolean>(false);
  const ref = useOutsideClick(toggleConent) as RefObject<HTMLDivElement>;

  function toggleConent() {
    setShowContent((cur) => !cur);
  }

  return (
    <>
      {showContent && (
        <div className={styles.container} ref={ref}>
          <h2>Outside Click Custom Hook</h2>
          <p>Click outside to close the box.</p>
        </div>
      )}
      {!showContent && (
        <button className={styles.button} onClick={toggleConent}>
          Show Content
        </button>
      )}
    </>
  );
}
