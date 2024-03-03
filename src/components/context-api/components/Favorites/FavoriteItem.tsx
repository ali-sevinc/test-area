import Card from "../UI/Card";
import styles from "./FavoriteItem.module.css";

type PropsType = { title: string; description: string; id: string };
export default function FavoriteItem({ title, description }: PropsType) {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className={styles["favorite-item"]}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
}
