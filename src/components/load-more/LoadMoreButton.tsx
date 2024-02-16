import styles from "./LoadMoreButton.module.css";
import { useEffect, useState } from "react";

const baseUrl = "https://dummyjson.com/products?limit=";

type DataType = { id: number; title: string; price: number; images: string[] };
export default function LoadMoreButton() {
  const [skip, setSkip] = useState<number>(10);
  const [data, setData] = useState<DataType[]>([]);
  const url = `${baseUrl}${skip}&skip=${
    skip > 50 ? skip - (skip / 10) * 10 : skip
  }&select=title,price,images`;
  useEffect(
    function () {
      async function fetchProducts() {
        try {
          const res = await fetch(url);
          const data = await res.json();
          // console.log(data.products);
          setData(data.products);
        } catch (error) {
          console.error("Something went wrong!");
        }
      }
      fetchProducts();
    },
    [url]
  );

  function handleLoadMore() {
    setSkip((cur) => cur + 10);
  }

  return (
    <div className={styles.container}>
      <h1>Load More Item</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.images[0]} />
            <p>{item.title}</p>
            <p>Price: {item.price}$</p>
          </li>
        ))}
      </ul>
      {skip < 100 && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
}
