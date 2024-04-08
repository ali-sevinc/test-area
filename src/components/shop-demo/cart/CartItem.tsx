import { useDispatch } from "react-redux";
import {
  CartItem as CartItemType,
  addItem,
  removeItem,
  clearItem,
} from "../shop/shopSlice";

import styles from "./CartItem.module.css";
import { HiTrash } from "react-icons/hi";

export default function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p>{item.title}</p>
      <div className={styles.actions}>
        {item.quantity > 1 && (
          <button
            onClick={() => dispatch(clearItem({ id: item.id }))}
            className={styles.clear}
          >
            <HiTrash />
          </button>
        )}
        <button onClick={() => dispatch(removeItem({ id: item.id }))}>-</button>
        {item.quantity}
        <button onClick={() => dispatch(addItem(item))}>+</button>
      </div>
    </li>
  );
}
