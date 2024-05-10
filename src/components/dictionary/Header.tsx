import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDictionaryContext } from "./DictionaryThemeContext";

export default function Header() {
  const { theme, onDark, onLight } = useDictionaryContext();

  return (
    <header className="max-w-2xl mx-auto py-5 border-b-2 w-full flex items-center justify-between">
      <h1 className="text-2xl font-semibold tracking-widest">Dictionary</h1>

      <>
        {theme === "dark" && (
          <button onClick={onLight}>
            <MdLightMode className="text-2xl" />
          </button>
        )}
        {theme === "light" && (
          <button onClick={onDark}>
            <MdDarkMode className="text-2xl" />
          </button>
        )}
      </>
    </header>
  );
}
