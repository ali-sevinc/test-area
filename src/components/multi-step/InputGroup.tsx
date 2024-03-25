import { useState } from "react";

type PropsType = {
  label: string;
  id: "name" | "email" | "phone";
  type: "tel" | "email" | "text" | "number";
  placeholder: string;
  value: string;
  onChange: (key: "name" | "email" | "phone", value: string) => void;
  validValue: boolean;
};

export default function InputGroup({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  validValue,
}: PropsType) {
  const [touched, setTouched] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          onChange(id, e.target.value);
          setTouched(false);
        }}
        onBlur={() => setTouched(true)}
        placeholder={placeholder}
        className={`p-2 text-lg rounded-lg focus:ring-blue-500 focus:ring-offset-1 focus:outline-none border-2 focus:ring ${
          touched && !validValue ? " border-red-500" : ""
        }`}
      />
    </div>
  );
}
