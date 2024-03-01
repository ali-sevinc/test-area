import CartButton from "../cart/CartButton";
import styles from "./Header.module.css";
import Modal from "../cart/Modal";
import Cart from "../cart/Cart";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { hideCartModal } from "../shop/shopSlice";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const { showCart } = useSelector((state: RootState) => state.shop);
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(hideCartModal());
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showCart && (
          <Modal onClose={handleCloseCart} open={showCart}>
            <Cart />
          </Modal>
        )}
      </AnimatePresence>
      <header className={styles.header}>
        <h1>Demo Shop</h1>
        <CartButton />
      </header>
    </>
  );
}
