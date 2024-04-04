import styles from "./Sidebar.module.css";
import Menus from "./Menus";
export default function Sidebar() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Menu UI/Compound Component Pattern</h1>
      </header>
      <aside className={styles.aside}>
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
            <Menus>
              <Menus.Toggle id="language">Language</Menus.Toggle>
              <Menus.Menu id="language">
                <Menus.Item>English</Menus.Item>
                <Menus.Item>French</Menus.Item>
                <Menus.Item>German</Menus.Item>
              </Menus.Menu>
            </Menus>
            <Menus>
              <Menus.Toggle id="theme">Theme</Menus.Toggle>
              <Menus.Menu id="theme">
                <Menus.Item>Dark</Menus.Item>
                <Menus.Item>Light</Menus.Item>
              </Menus.Menu>
            </Menus>
            <Menus.Item>Help</Menus.Item>
          </Menus.Menu>
        </Menus>
      </aside>
      <main className={styles.content}>content</main>
    </div>
  );
}
