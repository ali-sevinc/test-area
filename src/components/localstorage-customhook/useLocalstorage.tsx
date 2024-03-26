import { useEffect, useState } from "react";

export function useLocalstorage(initialState: [], key: string) {
  const [storagedValue, setStoragedValue] = useState(() => {
    const data = localStorage.getItem(key);
    return JSON.parse(data || JSON.stringify(initialState));
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(storagedValue));
    },
    [storagedValue, key]
  );

  return { storagedValue, setStoragedValue };
}
