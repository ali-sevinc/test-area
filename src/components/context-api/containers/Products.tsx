import ProductItem from "../components/Products/ProductItem";
import { useProduct } from "../context/ProductContext";

import styles from "./Products.module.css";

export default function Products() {
  const { products } = useProduct();
  return (
    <ul className={styles["products-list"]}>
      {products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFavorite={prod.isFavorite}
        />
      ))}
    </ul>
  );
}
