import Categories from "../shop/Categories";
import Header from "./Header";
import styles from "./Layout.module.css";
import Shop from "../shop/Shop";
import { Provider } from "react-redux";
import { store } from "../store/store";
function ShopContent() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <aside className={styles.aside}>
          <Categories />
        </aside>
        <div className={styles.products}>
          <Shop />
        </div>
      </main>
    </div>
  );
}

export default function Layout() {
  return (
    <Provider store={store}>
      <ShopContent />
    </Provider>
  );
}
