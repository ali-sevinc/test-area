import { ProductType } from "./PaginationTest";

export default function Product({ product }: { product: ProductType }) {
  return (
    <li>
      <img src={product.images.at(-1)} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}$</p>
    </li>
  );
}
