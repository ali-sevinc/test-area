type PropsType = {
  label: string;
  id: string;
  icon: JSX.Element;
  setValue: (e: number) => void;
};
export default function InputGroup({ label, id, icon, setValue }: PropsType) {
  return (
    <div className="group flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <div className="flex border border-blue-500 rounded-sm h-full items-center group-focus-within:ring-offset-2 group-focus-within:ring-2 group-focus:ring-yellow-300 ">
        <p className="rounded-l-sm h-full bg-blue-200 px-2 grid items-center justify-center">
          {icon}
        </p>
        <input
          type="number"
          step="0.01"
          id={id}
          onChange={(e) => setValue(+e.target.value)}
          className="rounded-r focus:outline-none w-full px-2 py-1"
        />
      </div>
    </div>
  );
}
