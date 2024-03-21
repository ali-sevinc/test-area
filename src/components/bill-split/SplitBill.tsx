import { useState } from "react";
import Container from "./Container";
import Friend from "./Friend";
import SplitForm from "./SplitForm";
import Button from "./Button";
import AddNewFriend from "./AddNewFriend";

type FriendType = { id: string; name: string; balance: number; image: string };
const initialFriends: FriendType[] = [
  {
    id: "p1",
    name: "Jonothan",
    balance: -20,
    image: "https://i.pravatar.cc/240/p1",
  },
  {
    id: "p2",
    name: "Jessie",
    balance: 100,
    image: "https://i.pravatar.cc/240/p2",
  },
  {
    id: "p3",
    name: "Frank",
    balance: 0,
    image: "https://i.pravatar.cc/240/p3",
  },
];

export default function SplitBill() {
  const [friends, setFriends] = useState<FriendType[]>(initialFriends);
  const [addFriend, setAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendType | null>(null);

  function handleSplitBill(newBalance: number) {
    setFriends((cur) =>
      cur.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: newBalance }
          : friend
      )
    );
  }

  function handleAddFriend(friend: FriendType) {
    setFriends((cur) => [...cur, friend]);
    setAddFriend(false);
  }

  function handleSelectFriend(friend: FriendType) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  return (
    <div className="w-[44rem] flex gap-8 mx-auto mt-20 items-start">
      <Container>
        <ul className="flex flex-col gap-4 border-b pb-4 border-b-stone-600">
          {friends.map((friend) => {
            let balance = "equal";
            if (friend.balance > 0) balance = "you-debt";
            if (friend.balance < 0) balance = "friend-debt";
            return (
              <Friend
                isSelected={friend.id === selectedFriend?.id}
                onSelect={() => handleSelectFriend(friend)}
                key={friend.id}
                friend={friend}
                balance={balance}
              />
            );
          })}
        </ul>

        {addFriend && <AddNewFriend onAddFriend={handleAddFriend} />}
        <div className="mt-4 text-end px-8">
          <Button onClick={() => setAddFriend((cur) => !cur)}>
            {addFriend ? "Cancel" : "Add Friend"}
          </Button>
        </div>
      </Container>
      <Container>
        {!selectedFriend && (
          <p className="text-center">Select a friend to split the bill</p>
        )}
        {selectedFriend && (
          <SplitForm
            key={selectedFriend.id}
            selectedFriend={selectedFriend}
            onCancel={() => setSelectedFriend(null)}
            onSplit={handleSplitBill}
          />
        )}
      </Container>
    </div>
  );
}
