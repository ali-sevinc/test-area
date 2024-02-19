import { useEffect } from "react";
import { useTheme } from "./useTheme";

export default function Theme() {
  const [theme, setTheme] = useTheme("theme", "dark");

  useEffect(
    function () {
      if (theme === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    },
    [theme]
  );

  console.log(theme);
  return (
    <div>
      <h1>Hellow World</h1>
      <button
        onClick={() => {
          setTheme((cur: string) => (cur === "dark" ? "light" : "dark"));
        }}
      >
        Change Color Theme
      </button>
    </div>
  );
}
