import { ReactNode } from "react";

export default function StepContainer({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <div className=" px-4 md:px-20 flex flex-col gap-8 pt-8">
      <div>
        <h1 className="text-blue-900 font-semibold text-3xl">{title}</h1>
        <p>{text}</p>
      </div>
      {children}
    </div>
  );
}
