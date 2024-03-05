import { useDispatch, useSelector } from "react-redux";
import styles from "./CartButton.module.css";
import { RootState } from "../store/store";
// import { calcTotal } from "./Cart";
import { showCartModal } from "../shop/shopSlice";
export default function CartButton() {
  const { cart } = useSelector((state: RootState) => state.shop);

  const dispatch = useDispatch();
  function handleShowModal() {
    dispatch(showCartModal());
  }

  const cartItemNums = cart.reduce((cur, item) => cur + item.quantity, 0);
  // const totalAmount = calcTotal(cart);

  return (
    <div>
      <button onClick={handleShowModal} className={styles.cartbtn}>
        <span>Your Cart </span>
        <span className={styles.quantity}>({cartItemNums})</span>
        {/* <span className={styles.totalAmount}>({totalAmount.toFixed(2)}$)</span> */}
      </button>
    </div>
  );
}
