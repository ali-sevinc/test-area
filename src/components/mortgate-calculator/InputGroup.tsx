type PropsType = {
  label: string;
  id: string;
  icon: JSX.Element;
  error: boolean;
  setValue: (e: number) => void;
};
export default function InputGroup({
  label,
  id,
  icon,
  setValue,
  error,
}: PropsType) {
  return (
    <div className="group flex flex-col gap-1">
      <label htmlFor={id} className="text-sm sm:text-base">
        {label}
      </label>
      <div
        className={`flex h-full items-center rounded-sm border border-blue-500 group-focus-within:ring-2 group-focus-within:ring-offset-2 group-focus:ring-yellow-300 ${error ? "border-red-500" : ""}`}
      >
        <p className="grid h-full items-center justify-center rounded-l-sm bg-blue-200 px-2">
          {icon}
        </p>
        <input
          type="number"
          step="0.01"
          id={id}
          onChange={(e) => setValue(+e.target.value)}
          className={`w-full rounded-r px-2 py-1 focus:outline-none ${error ? "bg-red-100" : ""}`}
        />
      </div>
    </div>
  );
}
