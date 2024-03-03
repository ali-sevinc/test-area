import FavoriteItem from "../components/Favorites/FavoriteItem";
import { useProduct } from "../context/ProductContext";

import styles from "./Products.module.css";

function Favorites() {
  const { products } = useProduct();
  const favoriteProducts = products.filter((p) => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className={styles["products-list"]}>
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
}

export default Favorites;
