import Categories from "../shop/Categories";
import Header from "./Header";
import styles from "./Layout.module.css";
import Shop from "../shop/Shop";
export default function Layout() {
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
