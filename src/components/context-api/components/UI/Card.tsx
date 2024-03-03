import { ReactNode } from "react";
import styles from "./Card.module.css";

type PropsType = { children: ReactNode; style: Record<string, unknown> };
export default function Card({ children, style }: PropsType) {
  return (
    <div className={styles.card} style={style}>
      {children}
    </div>
  );
}
