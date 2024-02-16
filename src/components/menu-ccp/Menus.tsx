import { useState, createContext, ReactNode, useContext } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

import styles from "./Menus.module.css";

type InitialType = {
  openID: string;
  onOpen: (id: string) => void;
  onClose: () => void;
};
const initialState: InitialType = {
  openID: "",
  onClose: () => {},
  onOpen: () => {},
};

const MenuContext = createContext(initialState);

export default function Menus({ children }: { children: ReactNode }) {
  const [openID, setOpenID] = useState<string>("");
  function onOpen(id: string) {
    setOpenID(id);
  }
  function onClose() {
    setOpenID("");
  }
  return (
    <MenuContext.Provider value={{ onClose, onOpen, openID }}>
      {children}
    </MenuContext.Provider>
  );
}

type ToggleType = { id: string; children: ReactNode };
function Toggle({ id, children }: ToggleType) {
  const { onOpen, onClose, openID } = useContext(MenuContext);

  function handleToggle() {
    if (openID && openID === id) {
      onClose();
    } else {
      onOpen(id);
    }
  }

  const isToggled = openID === id;
  return (
    <button className={styles.button} onClick={handleToggle}>
      {children}
      {isToggled ? <HiMinus /> : <HiPlus />}
    </button>
  );
}

type MenuType = { children: ReactNode; id: string };
function Menu({ children, id }: MenuType) {
  const { openID } = useContext(MenuContext);

  if (openID !== id) return null;
  return <menu className={styles.menu}>{children}</menu>;
}

type MenuItemType = { children: ReactNode };
function MenuItem({ children }: MenuItemType) {
  return <li>{children}</li>;
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.Item = MenuItem;
