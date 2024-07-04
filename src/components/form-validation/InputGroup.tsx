type PropsType = {
  value: string;
  icon: JSX.Element;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  id: string;
  type: "email" | "password" | "text" | "date";
  isError: boolean;
  errorMessage: string;
  onClickIcon?: () => void;
};
export default function InputGroup({
  value,
  icon,
  id,
  onBlur,
  onChange,
  type,
  label,
  onClickIcon,
  placeholder,
  isError,
  errorMessage,
}: PropsType) {
  return (
    <div className="flex flex-col text-lg gap-1 px-2 md:px-8">
      <label htmlFor={id}>{label}</label>
      <p className="flex items-center gap-1">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`rounded focus:outline-none border-none px-4 py-1 text-zinc-700 text-2xl focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-transparent flex-1 ${
            isError ? "bg-red-200 focus:ring-red-400" : ""
          }`}
        />
        {!onClickIcon && <span className="text-2xl sm:text-5xl">{icon}</span>}
        {onClickIcon && (
          <button
            type="button"
            className="text-2xl sm:text-5xl cursor-pointer"
            onClick={onClickIcon}
          >
            {icon}
          </button>
        )}
      </p>
      {isError && <p className="text-red-500 text-sm ">{errorMessage}</p>}
    </div>
  );
}
