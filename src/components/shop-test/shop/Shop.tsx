import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

import styles from "./Shop.module.css";
import Loader from "../layout/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export type ItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: string[];
};

export default function Shop() {
  const { searchTerm } = useSelector((state: RootState) => state.shop);

  const [products, setProducts] = useState<ItemType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // console.log(products);

  useEffect(
    function () {
      async function fetchProducts() {
        setIsError(false);
        setIsLoading(true);
        try {
          if (searchTerm === "all") {
            const res = await fetch("https://dummyjson.com/product");

            if (!res.ok) throw new Error("Error");
            const data = await res.json();
            setProducts(data.products);
          } else {
            const res = await fetch(
              "https://dummyjson.com/products/category/" + searchTerm
            );
            if (!res.ok) throw new Error("Error");
            const data = await res.json();
            setProducts(data.products);
          }
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
      fetchProducts();
    },
    [searchTerm]
  );

  return (
    <div className={styles.shop}>
      <h2>{searchTerm}</h2>
      {isLoading && <Loader />}
      {isError && <p>Products not found. Please try again later!</p>}
      {!isError && !isLoading && (
        <ul className={styles.list}>
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <ShopItem key={product.id} item={product} />
            ))}
        </ul>
      )}
    </div>
  );
}
