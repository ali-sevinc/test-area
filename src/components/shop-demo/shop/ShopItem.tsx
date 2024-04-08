import { useDispatch, useSelector } from "react-redux";
import { ItemType } from "./Shop";
import styles from "./ShopItem.module.css";
import { RootState } from "../store/store";
import { addItem, removeItem, clearItem } from "./shopSlice";
import { HiTrash } from "react-icons/hi";

export default function ShopItem({ item }: { item: ItemType }) {
  const { cart } = useSelector((state: RootState) => state.shop);
  const isItemInCart = cart.find((i) => i.id === item.id);
  const dispatch = useDispatch();

  function handleAddItemToCart() {
    dispatch(addItem({ ...item, quantity: 1 }));
  }
  function handlRemoveItem() {
    dispatch(removeItem({ id: item.id }));
  }

  function handleClearItem() {
    dispatch(clearItem({ id: item.id }));
  }

  return (
    <li className={styles.listItem}>
      <div className={styles.image}>
        <img src={item.images.at(-1)} />
      </div>
      <div className={styles.descriptions}>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        <div>
          <p className={styles.price}>
            Price:{" "}
            <span
              className={`${styles.price} ${
                item.discountPercentage ? styles.discount : ""
              }`}
            >
              {item.price}$
            </span>
            <span> - </span>
            {item.discountPercentage > 0 && (
              <>
                <span className={styles.price}>
                  {(
                    item.price -
                    (item.price * item.discountPercentage) / 100
                  ).toFixed(2)}
                  $
                </span>
              </>
            )}
          </p>
          <div className={styles.actions}>
            {!isItemInCart && (
              <button onClick={handleAddItemToCart} className={styles.add}>
                Add to cart
              </button>
            )}
            {isItemInCart && (
              <div>
                <button className={styles.small} onClick={handlRemoveItem}>
                  -
                </button>
                <p>{isItemInCart.quantity}</p>
                <button className={styles.small} onClick={handleAddItemToCart}>
                  +
                </button>
                {isItemInCart.quantity > 1 && (
                  <button className={styles.clear} onClick={handleClearItem}>
                    <HiTrash />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
