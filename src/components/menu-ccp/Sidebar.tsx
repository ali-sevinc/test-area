import styles from "./Sidebar.module.css";
import Menus from "./Menus";
export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <h1>Menu UI/Compound Component Pattern</h1>
      <Menus>
        <Menus.Toggle id="profile">Profile</Menus.Toggle>
        <Menus.Menu id="profile">
          <Menus.Item>Details</Menus.Item>
          <Menus.Item>Safety</Menus.Item>
          <Menus.Item>Logout</Menus.Item>
        </Menus.Menu>
      </Menus>
      <Menus>
        <Menus.Toggle id="settings">Settings</Menus.Toggle>
        <Menus.Menu id="settings">
          <Menus.Item>Language</Menus.Item>
          <Menus.Item>Theme</Menus.Item>
          <Menus.Item>Help</Menus.Item>
        </Menus.Menu>
      </Menus>
    </aside>
  );
}
