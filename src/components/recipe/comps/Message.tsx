import { ReactNode } from "react";

export default function Message({
  title,
  message,
  children,
}: {
  title: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <div className="mt-24 text-center">
      <h1 className="mb-8 text-3xl font-semibold">{title}</h1>
      <p className="text-xl font-semibold">{message}</p>
      {children}
    </div>
  );
}
