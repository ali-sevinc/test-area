import { useState } from "react";
import { useSearchAuto } from "./useSearchAuto";

import styles from "./SearchAutoComplete.module.css";

export default function SearchAutoComplete() {
  const { error, isLoading, users } = useSearchAuto();
  const [searchParam, setSearchParam] = useState<string>("");

  const filteredUsers = users?.filter((item) =>
    item.toLocaleLowerCase().includes(searchParam)
  );

  function handleSetSuggestion(value: string) {
    setSearchParam(value);
  }

  return (
    <div className={styles.search}>
      {isLoading && <p>Loading users data...</p>}
      {error && <p>Users not found.</p>}
      {!isLoading && !error && (
        <input
          value={searchParam}
          onChange={(e) => {
            const query = e.target.value;
            setSearchParam(query.toLocaleLowerCase());
          }}
          name="users"
          placeholder="Search users here..."
        />
      )}

      {searchParam.length >= 2 && filteredUsers?.length > 0 && (
        <ul>
          {filteredUsers.map((item, index) => (
            <li onClick={() => handleSetSuggestion(item)} key={item + index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
