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
    [theme],
  );

  console.log(theme);
  return (
    <div className="mx-auto mt-32 flex w-60 flex-col gap-8 text-center">
      <h1 className="text-3xl font-semibold">Hellow World</h1>
      <button
        className="rounded-xl border-2 border-stone-300 px-4 py-2"
        onClick={() => {
          setTheme((cur: string) => (cur === "dark" ? "light" : "dark"));
        }}
      >
        Change Color Theme
      </button>
    </div>
  );
}
