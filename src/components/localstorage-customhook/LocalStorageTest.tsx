import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { useLocalstorage } from "./useLocalstorage";

type StorageType = { id: number; text: string };
export default function LocalStorageTest() {
  const [inputError, setInputError] = useState(false);
  const { storagedValue, setStoragedValue } = useLocalstorage(
    [],
    "test-localstorage",
  ) as {
    storagedValue: StorageType[];
    setStoragedValue: Dispatch<SetStateAction<StorageType[]>>;
  };
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInputError(false);
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const text = formData.get("text") as string;
    if (!text || !text.trim().length) return setInputError(true);

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
    <div className="min-h-screen bg-zinc-700 pt-24">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-8 bg-stone-200 p-8">
        <h1 className="text-center text-3xl font-semibold">
          Localstorage Custom Hook
        </h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center rounded-lg border-2 border-stone-500"
          >
            <label
              htmlFor="text"
              className="rounded-l-lg border-b-4 border-r border-b-transparent bg-stone-50 px-2 py-1"
            >
              Text
            </label>
            <input
              id="text"
              name="text"
              type="text"
              placeholder="Enter a value to save to the localstorage..."
              className={`flex-1 border-b-4 border-stone-700 border-b-transparent  bg-stone-50 px-4 py-1 focus:border-b-stone-500 focus:outline-none`}
            />
            <button className="rounded-r-lg border-b-4 border-l border-b-transparent bg-stone-50 px-4  py-1 hover:bg-stone-100">
              Add
            </button>
          </form>
          {inputError && (
            <p className="mt-1 bg-red-100 py-0.5 text-center text-sm text-red-500">
              Please enter a value
            </p>
          )}
        </div>

        <div>
          <h2 className="text-center text-2xl">Items</h2>
          {storagedValue?.length === 0 && (
            <p className="text-center">No item in localstorage yet.</p>
          )}
          {storagedValue?.length > 0 && (
            <ul className="divide-y divide-stone-700 border border-stone-700 text-center">
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
    </div>
  );
}
