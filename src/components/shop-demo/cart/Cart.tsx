import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartItem as CartItemType, hideCartModal } from "../shop/shopSlice";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

export function calcTotal(cart: CartItemType[]) {
  const totalAmount = cart.reduce((cur, item) => {
    if (!item.discountPercentage) {
      return cur + item.price * item.quantity;
    } else {
      return (
        cur +
        (item.price - (item.price * item.discountPercentage) / 100) *
          item.quantity
      );
    }
  }, 0);

  return totalAmount;
}

export default function Cart() {
  const { cart } = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();
  const totalAmount = calcTotal(cart);

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>No item in cart.</p>}
      {cart.length > 0 && (
        <>
          <ul className={styles.items}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>

          <p className={styles.totalAmount}>
            Total Amount: <span>{totalAmount.toFixed(2)}$</span>
          </p>
        </>
      )}

      <div className={styles.actions}>
        <button onClick={() => dispatch(hideCartModal())}>Cancel</button>
        {cart.length > 0 && <button>Order</button>}
      </div>
    </div>
  );
}
