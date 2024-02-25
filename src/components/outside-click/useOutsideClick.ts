import { useRef, useEffect } from "react";
export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(
    function () {
      function handleClick(event: MouseEvent) {
        if (!ref.current || ref.current.contains(event.target as Node)) return;

        if (ref?.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
