import { ReactNode, createContext, useContext, useState } from "react";

type InitialType = {
  tag: string;
  searchQuery: string;
  handleSearch: (val: string) => void;
  handleTag: (val: string) => void;
};
const initialState: InitialType = {
  tag: "",
  searchQuery: "",
  handleSearch: () => {},
  handleTag: () => {},
};
const SearchContext = createContext(initialState);

export default function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [tag, setTag] = useState("");

  function handleSearch(value: string) {
    setSearchQuery(value);
  }
  function handleTag(value: string) {
    setTag(value);
  }

  return (
    <SearchContext.Provider
      value={{ tag, handleTag, searchQuery, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context)
    throw new Error("SearchContext used outside from SearchProvider scope.");

  return context;
}
