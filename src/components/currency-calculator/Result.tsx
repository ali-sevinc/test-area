type PropsType = {
  calculatedAmount: string;
  amount: string;
  from: string;
  to: string;
};
export default function Result({
  calculatedAmount,
  amount,
  from,
  to,
}: PropsType) {
  return (
    <div className="w-full">
      <p>Result</p>
      {!calculatedAmount && (
        <p className="py-1 bg-stone-200 px-1">-----------------</p>
      )}
      {calculatedAmount && (
        <div className="flex gap-1 py-1 bg-stone-200 px-1">
          <p>
            {amount} <span className="text-xs italic">{from}</span>
          </p>
          <b>=</b>
          <p>
            {calculatedAmount} <span className="text-xs italic">{to}</span>
          </p>
        </div>
      )}
    </div>
  );
}
