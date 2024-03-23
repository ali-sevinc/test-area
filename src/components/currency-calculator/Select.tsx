type PropsType = {
  label: string;
  id: string;
  currencies: [string, string][];
  onChange: (key: string, value: string) => void;
  value: string;
};
export default function Select({
  label,
  id,
  currencies,
  onChange,
  value,
}: PropsType) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        id={id}
        className="bg-stone-200  w-48 py-1"
      >
        {currencies.map((currency) => (
          <option key={currency[0]} value={currency[0]}>
            {currency[1]}
          </option>
        ))}
      </select>
    </div>
  );
}
