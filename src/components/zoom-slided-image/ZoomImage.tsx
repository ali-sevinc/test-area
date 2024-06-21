import { useEffect, useState } from "react";
import ImagesSlide from "./ImagesSlide";

type ProductType = {
  id: number;
  images: string[];
  title: string;
};

export default function ZoomImage() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(function () {
    async function getProducts() {
      const skip = Math.floor(Math.random() * 90);
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skip}`,
      );
      const data = await res.json();
      setProducts(data.products);
    }
    getProducts();
  }, []);

  return (
    <div className="bg-slate-800">
      <h1 className="py-4 text-center text-5xl font-bold text-slate-50">
        Zoom Slided Image
      </h1>
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-4 py-12">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="flex w-full flex-col  gap-2 rounded-md bg-slate-500 p-4"
            >
              <h2 className="mb-4 text-4xl font-bold text-slate-50">
                {product.title}
              </h2>
              <ImagesSlide images={product.images} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
