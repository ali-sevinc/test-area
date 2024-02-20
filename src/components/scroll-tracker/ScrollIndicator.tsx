import { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

const baseUrl = "https://dummyjson.com/products?limit=100&select=title";

type ProductType = { id: number; title: string };
export default function ScrollIndicator() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch(baseUrl);
      const data = await res.json();

      setProducts(data.products);
    }
    fetchProducts();
  }, []);

  function handleScroll() {
    const inner = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - inner;

    const scrollY = window.scrollY;

    const currentScrollRatio = (scrollY / documentHeight) * 100;

    setProgress(currentScrollRatio);
  }

  useEffect(function () {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.scroll}>
      <header>
        <h1>Scroll Indicator</h1>
        <progress value={progress} max={100} />
      </header>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
