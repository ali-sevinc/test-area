type PropsType = {
  id: string;
  label: string;
  value?: number;
  onChange: (val: number) => void;
  disabled?: boolean;
};
export default function InputGroup({
  id,
  label,
  value,
  onChange,
  disabled = false,
}: PropsType) {
  return (
    <div className="flex justify-between">
      <label htmlFor={id}>{label} </label>
      <input
        id={id}
        type="number"
        className="w-24 px-2 py-0.5"
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
