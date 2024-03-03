import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={styles["main-header"]}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
