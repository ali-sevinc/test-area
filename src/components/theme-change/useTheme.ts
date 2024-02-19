import { useEffect, useState } from "react";

export function useTheme(key: string, defaultValue: "dark" | "light") {
  const [value, setValue] = useState(() => {
    const soteredValue = JSON.parse(
      localStorage.getItem(key) || JSON.stringify(defaultValue)
    );
    return soteredValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value]
  );

  return [value, setValue];
}
