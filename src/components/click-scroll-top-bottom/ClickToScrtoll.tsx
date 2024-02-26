import { useEffect, useRef, useState } from "react";
import styles from "./ClickToScrtoll.module.css";

const baseUrl = "https://dummyjson.com/products?limit=100";

type Product = { id: number; title: string };

export default function ClickToScrtoll() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoadin, setIsLoadin] = useState(false);

  const bottomRef = useRef<HTMLHeadingElement>(null);

  useEffect(function () {
    async function fetchProducts() {
      try {
        setIsError(false);
        setIsLoadin(true);
        const res = await fetch(baseUrl);
        if (!res.ok) throw new Error("Something went wrong...");
        const data = await res.json();
        // console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoadin(false);
      }
    }
    fetchProducts();
  }, []);

  function handleClickToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  function handleClickToBottom() {
    // const height = document.documentElement.scrollHeight;
    // window.scrollTo({
    //   left: 0,
    //   top: height - window.innerHeight,
    //   behavior: "smooth",
    // });
    if (!bottomRef.current) return;
    const rect = bottomRef.current.getBoundingClientRect();
    window.scrollTo({
      left: 0,
      top: rect.bottom,
      behavior: "smooth",
    });
  }

  if (isError)
    return (
      <div className={styles.container}>
        <h1>An Error Occured!! </h1>
      </div>
    );

  if (isLoadin) {
    return (
      <div className={styles.container}>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1> Click Scroll</h1>
      <button onClick={handleClickToBottom}>Click to bottom</button>
      <h2>Top of contnet</h2>
      <ul>
        {products &&
          products.length > 0 &&
          products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>

      <button onClick={handleClickToTop}>Click to top</button>
      <h2 ref={bottomRef}>Bottom of contnet</h2>
    </div>
  );
}
