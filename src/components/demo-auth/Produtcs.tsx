import { useEffect, useState } from "react";
import { useUser } from "./UserContext";
type ProductType = { id: number; title: string; price: number };
export default function Produtcs() {
  const { user } = useUser();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const skip = Math.floor(Math.random() * 90);
        const res = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price`
        );
        const data = await res.json();
        if (!res.ok) throw new Error("Failed to fetch products.");
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-stone-100 text-stone-600 px-4 py-6 rounded-xl">
      <h1 className="text-xl font-semibold">{user?.firstName}'s Products</h1>
      <ul>
        <li className="flex w-10/12 justify-between mx-auto underline">
          <h2 className="text-xl font-bold ">Product</h2>
          <h2 className="text-xl font-bold ">Price</h2>
        </li>
        {products.map((item) => (
          <li key={item.id} className="flex w-10/12 justify-between mx-auto">
            <p>{item.title}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
