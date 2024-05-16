import { useState } from "react";

function textSmaller(text: string, maxLetter: number = 100) {
  const newText = text.slice(0, maxLetter) + "...";
  return newText;
}

type Props = {
  text: string;
  isExpanded?: boolean;
  maxLetter?: number;
  color?: string;
  btnMessages?: [string, string] | undefined;
};
export default function TextItem({
  text,
  isExpanded = false,
  maxLetter = 100,
  color = "#00c",
  btnMessages = ["collapse", "show more"],
}: Props) {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <div className="mx-auto w-1/2 border px-4 py-8 shadow-xl">
      <p className="inline">{expanded ? text : textSmaller(text, maxLetter)}</p>
      <button
        style={{ color: color }}
        className="ml-4"
        onClick={() => setExpanded((cur) => !cur)}
      >
        {expanded ? btnMessages[0] : btnMessages[1]}
      </button>
    </div>
  );
}
