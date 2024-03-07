import { ReactNode } from "react";

export default function Output({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}
