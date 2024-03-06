import { useEffect, useState } from "react";
import styles from "./PaginationTest.module.css";
import Product from "./Product";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";

const ITEM_PER_PAGE = 10;

export type ProductType = {
  id: number;
  images: string[];
  title: string;
  price: number;
};
type Products = { total: number; products: ProductType[] };
export default function PaginationTest() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Products>({
    total: 0,
    products: [],
  });

  useEffect(function () {
    async function fetchProducts() {
      const res = await fetch(`https://dummyjson.com/products?limit=100`);
      const resdata = await res.json();
      setData(resdata);
      // console.log(resdata);
    }
    fetchProducts();
  }, []);

  function handleIncrementPage() {
    setPage((cur) => cur + 1);
  }
  function handleDecrementPage() {
    setPage((cur) => cur - 1);
  }
  function handleClickToPageNum(pageNum: number) {
    setPage(pageNum);
  }

  const products = data.products.filter(
    (_, index) =>
      index >= (page - 1) * ITEM_PER_PAGE && index < page * ITEM_PER_PAGE,
  );

  return (
    <div className={styles.container}>
      <h1>Pagination Demo</h1>
      <div className={styles.pages}>
        <button disabled={page <= 1} onClick={handleDecrementPage}>
          <HiOutlineChevronDoubleLeft />
          Previous
        </button>

        <ol className={styles.clickToPage}>
          {Array.from({ length: data.total / ITEM_PER_PAGE }, (_, i) => i).map(
            (j) => (
              <button
                onClick={() => handleClickToPageNum(j + 1)}
                disabled={j === page - 1}
                key={j}
              >
                {j + 1}
              </button>
            ),
          )}
        </ol>

        <button
          disabled={page >= data.total / ITEM_PER_PAGE}
          onClick={handleIncrementPage}
        >
          Next
          <HiOutlineChevronDoubleRight />
        </button>
      </div>

      <ul>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}
