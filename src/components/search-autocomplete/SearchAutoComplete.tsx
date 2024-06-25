import { ChangeEvent, useState } from "react";

import { UserType, useSearchAuto } from "./useSearchAuto";
import Results from "./Results";

import styles from "./SearchAutoComplete.module.css";

export default function SearchAutoComplete() {
  const { error, isLoading, users } = useSearchAuto();
  const [searchParam, setSearchParam] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<UserType[]>([]);

  const filteredUsers = users?.filter((item) =>
    item.toLocaleLowerCase().includes(searchParam.toLocaleLowerCase()),
  );
  console.log(users);

  function handleSetSuggestion(value: string) {
    setSearchParam(value);
  }
  function handleChangeParams(e: ChangeEvent<HTMLInputElement>) {
    const query = e.target.value;
    setSearchParam(query.toLocaleLowerCase());
    setShowResults(true);
  }
  async function handleGetUser(userName: string) {
    handleSetSuggestion(userName);
    setShowResults(false);
    const res = await fetch(`https://dummyjson.com/users/search?q=${userName}`);
    const data = await res.json();
    setSelectedUsers(data.users);
  }

  return (
    <>
      <div className={styles.search}>
        {isLoading && <p>Loading users data...</p>}
        {error && <p>Users not found.</p>}
        {!isLoading && !error && (
          <input
            type="search"
            value={searchParam}
            onChange={handleChangeParams}
            name="users"
            placeholder="Search users here..."
          />
        )}

        {searchParam.length >= 2 &&
          filteredUsers?.length > 0 &&
          showResults && (
            <ul>
              {filteredUsers.map((user, index) => (
                <li key={user + index}>
                  <button onClick={() => handleGetUser(user)}>{user}</button>
                </li>
              ))}
            </ul>
          )}
      </div>
      {selectedUsers.length > 0 && <Results users={selectedUsers} />}
    </>
  );
}
