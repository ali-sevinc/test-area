import styles from "./Menu.module.css";

import MenuList from "./MenuList";

import { menuData } from "./data";
export default function Menu() {
  return (
    <div className={styles.container}>
      <ul>
        {menuData.map((item) => (
          <MenuList key={item.to} item={item} />
        ))}
      </ul>
    </div>
  );
}
