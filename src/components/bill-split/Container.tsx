import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="bg-orange-200 w-1/2 px-2 py-4 rounded-xl">{children}</div>
  );
}
