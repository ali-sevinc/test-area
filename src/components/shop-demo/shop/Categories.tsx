import { useEffect, useState } from "react";
import CategoriesItem from "./CategoriesItem";

import styles from "./Categories.module.css";
import Loader from "../layout/Loader";

export default function Categories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(function () {
    async function fetchCategories() {
      setIsError(false);
      setIsLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        if (!res.ok) throw new Error("An error occured.");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Categories</h2>
      {isLoading && <Loader />}
      {isError && <p>Categories not found.</p>}
      {!isError && !isLoading && (
        <ul className={styles.categories}>
          <CategoriesItem
            category="all"
            onActive={() => setActiveCategory("all")}
            isActive={activeCategory === "all"}
          />
          {categories &&
            categories.length > 0 &&
            categories.map((category) => (
              <CategoriesItem
                onActive={() => setActiveCategory(category)}
                isActive={activeCategory === category}
                category={category}
                key={category}
              />
            ))}
        </ul>
      )}
    </>
  );
}
