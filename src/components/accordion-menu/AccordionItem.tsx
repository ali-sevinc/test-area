export default function AccordionItem({
  title,
  text,
  open,
  onOpen,
}: {
  title: string;
  text: string;
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <li
      className={`w-[32rem] border shadow-md ${
        open ? "border-t-green-600" : ""
      }`}
    >
      <button
        onClick={onOpen}
        className="w-full flex flex-col gap-4 py-2 px-8 "
      >
        <h2
          className={`${
            open ? "text-green-600" : "text-gray-600"
          } flex justify-between w-full items-center text-xl font-semibold`}
        >
          <span>{title}</span>

          <b>{open ? "-" : "+"}</b>
        </h2>
        {open && <p className="text-start pb-4">{text}</p>}
      </button>
    </li>
  );
}
