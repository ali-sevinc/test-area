import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type InitialType = {
  tagsMenu: boolean;
  mainNav: boolean;
  tags: string[];
  openTagsMenu: () => void;
  closeTagsMenu: () => void;
  openMainNav: () => void;
  closeMainNav: () => void;
};

const inititalState: InitialType = {
  tagsMenu: false,
  mainNav: false,
  tags: [],
  openTagsMenu: () => {},
  closeTagsMenu: () => {},
  openMainNav: () => {},
  closeMainNav: () => {},
};
const UIContext = createContext(inititalState);

export default function UIProvider({ children }: { children: ReactNode }) {
  const [tagsMenu, setTagsMenu] = useState<boolean>(false);
  const [mainNav, setMainNav] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);

  function openTagsMenu() {
    setTagsMenu(true);
    setMainNav(false);
  }
  function closeTagsMenu() {
    setTagsMenu(false);
  }
  function openMainNav() {
    setMainNav(true);
    setTagsMenu(false);
  }
  function closeMainNav() {
    setMainNav(false);
  }

  useEffect(function () {
    async function fetchTags() {
      const res = await fetch("https://dummyjson.com/recipes/tags");
      if (!res.ok) throw new Error("Could not fetch tags.");

      const data = await res.json();
      setTags(data);
    }

    fetchTags();
  }, []);

  return (
    <UIContext.Provider
      value={{
        tagsMenu,
        mainNav,
        tags,
        closeMainNav,
        closeTagsMenu,
        openMainNav,
        openTagsMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUIContext() {
  const context = useContext(UIContext);
  if (!context)
    throw new Error("UIContext was used outside of provider scope.");
  return context;
}
