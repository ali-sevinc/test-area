type PropsType = {
  title: string;
  price: string;
  icon: JSX.Element;
  onSelect: () => void;
  isSelected: boolean;
};
export default function PlanItem({
  title,
  icon,
  price,
  isSelected,
  onSelect,
}: PropsType) {
  return (
    <li
      onClick={onSelect}
      className={`border p-4 rounded-xl flex gap-6 items-center hover:bg-stone-100 cursor-pointer ${
        isSelected ? "bg-stone-100" : ""
      }`}
    >
      <p className="text-3xl border-4 border-blue-600 p-2 rounded-full">
        {icon}
      </p>
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
      </div>
    </li>
  );
}
