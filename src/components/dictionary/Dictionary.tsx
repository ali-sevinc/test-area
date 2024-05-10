import { FormEvent } from "react";

import Header from "./Header";
import Result from "./Result";
import Message from "./Message";

import { HiOutlineSearch } from "react-icons/hi";
import { useDictionaryContext } from "./DictionaryThemeContext";
import { useWord } from "./useWord";

export default function Dictionary() {
  const { error, fetchWord, isLoading, word } = useWord();

  const { theme } = useDictionaryContext();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const query = formData.get("word") as string;

    if (!query?.trim()) return;
    await fetchWord(query.toLowerCase());
    form.reset();
  }

  return (
    <div
      className={`flex min-h-screen w-full flex-col gap-12 px-4 ${
        theme === "dark" ? "bg-zinc-700 text-zinc-50" : ""
      }`}
    >
      <Header />
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-2xl items-center justify-between divide-x-2 rounded-xl border-2 px-4 focus-within:shadow-2xl"
      >
        <div className="flex w-full items-center">
          <label htmlFor="word" className="px-2">
            <HiOutlineSearch />
          </label>
          <input
            id="word"
            name="word"
            type="search"
            disabled={isLoading}
            placeholder="Search a word..."
            required
            className={`w-full px-4 py-2 text-xl focus:outline-none ${
              theme === "dark" ? "bg-zinc-700" : ""
            }`}
          />
        </div>
        <button
          disabled={isLoading}
          className={"px-4 py-1 duration-200 hover:text-zinc-400"}
        >
          Search
        </button>
      </form>
      {word && !error && !isLoading && <Result result={word} />}
      {isLoading && <Message title="Search" message="Loading...." />}
      {error && <Message title="An Error Occured" message={error} />}
    </div>
  );
}
