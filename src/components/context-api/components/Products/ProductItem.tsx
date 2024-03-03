import Card from "../UI/Card";

import { ProductType, useProduct } from "../../context/ProductContext";

import styles from "./ProductItem.module.css";

type PropsType = ProductType;
export default function ProductItem({
  id,
  description,
  isFavorite,
  title,
}: PropsType) {
  const { toggleFav } = useProduct();

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className={styles["product-item"]}>
        <h2 className={isFavorite ? "is-fav" : ""}>{title}</h2>
        <p>{description}</p>
        <button
          className={`${styles.ctxbutton} ${
            !isFavorite ? styles["button-outline"] : ""
          }`}
          onClick={() => toggleFav(id)}
        >
          {isFavorite ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
}
