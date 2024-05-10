import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type InitialType = {
  theme: "light" | "dark";
  onLight: () => void;
  onDark: () => void;
};
const initialState: InitialType = {
  theme: "light",
  onDark: () => {},
  onLight: () => {},
};

const ThemeContext = createContext(initialState);

export default function DictionaryThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(function () {
    const modeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const result = modeQuery.matches ? "dark" : "light";

    setTheme(result);
  }, []);

  function handleLight() {
    setTheme("light");
  }
  function handleDark() {
    setTheme("dark");
  }

  return (
    <ThemeContext.Provider
      value={{ theme, onDark: handleDark, onLight: handleLight }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useDictionaryContext() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("Theme context used outside from provider scope.");
  return context;
}
