import { useDispatch } from "react-redux";
import {
  CartItem as CartItemType,
  addItem,
  removeItem,
} from "../shop/shopSlice";

import styles from "./CartItem.module.css";

export default function CartItem({ item }: { item: CartItemType }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p>{item.title}</p>
      <div className={styles.actions}>
        <button onClick={() => dispatch(removeItem({ id: item.id }))}>-</button>
        {item.quantity}
        <button onClick={() => dispatch(addItem(item))}>+</button>
      </div>
    </li>
  );
}
