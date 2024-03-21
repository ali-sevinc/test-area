import { FormEvent, useState } from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";

type PropsType = {
  selectedFriend: { id: string; name: string; balance: number; image: string };
  onCancel: () => void;
  onSplit: (newBalance: number) => void;
};
export default function SplitForm({
  selectedFriend,
  onCancel,
  onSplit,
}: PropsType) {
  const [bill, setBill] = useState(0);
  const [yourExpenses, setYourExpenses] = useState(0);
  const [whoPay, setWhoPay] = useState("you");
  const friendExpenses = bill - yourExpenses;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!bill || !yourExpenses) return;

    const oldBalance = selectedFriend.balance;
    let newBalance = 0;
    if (whoPay === "you") {
      newBalance = oldBalance - bill + yourExpenses;
    }
    if (whoPay === "friend") {
      newBalance = oldBalance + bill - friendExpenses;
    }
    onSplit(newBalance);
    onCancel();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl text-center">You and {selectedFriend.name}</h2>

      <InputGroup
        label="Total Bill: "
        id="bill"
        onChange={(value: number) => setBill(value)}
      />

      <InputGroup
        disabled={!bill}
        label="Your Expenses: "
        id="your-expense"
        value={yourExpenses}
        onChange={(value: number) =>
          setYourExpenses(value > bill ? yourExpenses : value)
        }
      />

      <InputGroup
        label={`${selectedFriend.name} Expenses: `}
        id="friend-expense"
        value={friendExpenses}
        onChange={() => {}}
        disabled={true}
      />
      <div className="flex justify-between">
        <label htmlFor="who-pay">Who pay the bill: </label>
        <select
          value={whoPay}
          onChange={(e) => setWhoPay(e.target.value)}
          id="who-pay"
          className="w-24 px-2 py-0.5"
        >
          <option value="you">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </div>
      <div className="flex gap-4 justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit">Split</Button>
      </div>
    </form>
  );
}
