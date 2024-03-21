type PropsType = {
  friend: { id: string; name: string; balance: number; image: string };
  balance: string;
  isSelected: boolean;
  onSelect: () => void;
};
export default function Friend({
  friend,
  balance,
  onSelect,
  isSelected,
}: PropsType) {
  return (
    <li
      onClick={onSelect}
      key={friend.id}
      className={`flex items-center gap-8 cursor-pointer hover:bg-orange-500 p-1 rounded-lg duration-200 ${
        isSelected ? "bg-orange-400" : ""
      }`}
    >
      <img src={friend.image} className="w-16 rounded-full" />
      <div>
        <h2 className="text-xl">{friend.name}</h2>
        {balance === "equal" && <p>You and {friend.name} are equal</p>}
        {balance === "you-debt" && (
          <p className="text-red-500">
            You owe {friend.name} ${friend.balance}
          </p>
        )}
        {balance === "friend-debt" && (
          <p className="text-green-500">
            {friend.name} owes you ${-friend.balance}
          </p>
        )}
      </div>
    </li>
  );
}
