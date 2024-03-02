import { ChangeEvent, ReactNode, useRef, useState } from "react";

type PropsType<T> = {
  items: T[];
  children: (item: T) => ReactNode;
  itemKeyFn: (val: T) => string;
};
export default function RenderProps<T>({
  children,
  items,
  itemKeyFn,
}: PropsType<T>) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const changeRef = useRef<NodeJS.Timeout | undefined>();

  const searchedItem = items?.filter((item) =>
    JSON.stringify(item)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase()),
  );

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    //this code clear old timer each key stroke
    if (changeRef.current) clearTimeout(changeRef.current);

    //this code add a new timer after cleaning. This executes last state update instead of all key stroke.
    changeRef.current = setTimeout(() => {
      //after timer execute we have to clean ref
      changeRef.current = undefined;
      setSearchTerm(event.target.value);
    }, 500);
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        className="px-2 py-1"
      />
      <ul>
        {searchedItem?.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
