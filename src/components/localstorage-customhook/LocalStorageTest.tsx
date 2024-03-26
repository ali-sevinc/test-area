import { Dispatch, FormEvent, SetStateAction } from "react";
import { useLocalstorage } from "./useLocalstorage";

type StorageType = { id: number; text: string };
export default function LocalStorageTest() {
  const { storagedValue, setStoragedValue } = useLocalstorage(
    [],
    "test-localstorage"
  ) as {
    storagedValue: StorageType[];
    setStoragedValue: Dispatch<SetStateAction<StorageType[]>>;
  };
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const text = formData.get("text") as string;
    if (!text || !text.trim().length) return;

    const data: StorageType = {
      id: Math.random(),
      text,
    };
    handleAddItemToStorage(data);
    form.reset();
  }

  function handleAddItemToStorage(value: StorageType): void {
    setStoragedValue((cur) => [...cur, value]);
  }

  function handleRemoveItem(id: number): void {
    setStoragedValue((cur) => cur.filter((item) => item.id !== id));
  }
  return (
    <div className="w-96 mx-auto mt-24 bg-stone-200 flex flex-col gap-8 p-8">
      <h1 className="text-3xl text-center font-semibold">
        Localstorage Custom Hook
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center gap-4"
      >
        <label htmlFor="text">Text: </label>
        <div>
          <input
            id="text"
            name="text"
            type="text"
            className="border border-stone-700 rounded-l-lg px-1"
          />
          <button className="border border-stone-700 px-4 rounded-r-lg">
            Add
          </button>
        </div>
      </form>

      <div>
        <h2 className="text-center text-2xl">Items</h2>
        {storagedValue?.length === 0 && (
          <p className="text-center">No item in localstorage yet.</p>
        )}
        {storagedValue?.length > 0 && (
          <ul className="divide-y divide-stone-700 text-center border border-stone-700">
            {storagedValue?.map((item) => (
              <li
                className="cursor-pointer"
                onClick={() => handleRemoveItem(item.id)}
                key={item?.id}
              >
                {item?.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
