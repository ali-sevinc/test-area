import { FormEvent, useState } from "react";
import Button from "./Button";

type FriendType = { id: string; name: string; balance: number; image: string };

export default function AddNewFriend({
  onAddFriend,
}: {
  onAddFriend: (friend: FriendType) => void;
}) {
  const [error, setError] = useState(false);

  function handleAddFriend(event: FormEvent) {
    event.preventDefault();
    setError(false);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    if (!name.trim().length) {
      setError(true);
      return;
    }

    const id = crypto.randomUUID();
    const friend: FriendType = {
      name,
      id,
      image: `https://i.pravatar.cc/240/${id}`,
      balance: 0,
    };

    form.reset();
    onAddFriend(friend);
  }
  return (
    <form onSubmit={handleAddFriend} className="mt-4 flex flex-col gap-4 px-8">
      <div className="flex justify-between ">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          className={error ? "border border-red-500" : ""}
        />
      </div>
      <div className="flex justify-between ">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="url"
          defaultValue="https://i.pravatar.cc/240"
        />
      </div>
      <div className="text-end">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}
