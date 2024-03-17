import { HiOutlineSearch } from "react-icons/hi";

type PropsType = { onFetchUser: (name: string) => void };
export default function GitForm({ onFetchUser }: PropsType) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    if (!name) return;
    onFetchUser(name);
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-600 rounded-xl w-full px-8 py-4 flex items-center gap-8 justify-between text-gray-50"
    >
      <div className="flex w-full text-2xl items-center">
        <label htmlFor="name">
          <HiOutlineSearch />
        </label>
        <input
          id="name"
          name="name"
          type="search"
          required
          placeholder="Search with username..."
          className="bg-transparent focus:outline-none w-full p-2 border-b-4 border-b-transparent focus:border-b-gray-700"
        />
      </div>
      <button className="bg-gray-700 px-4 py-2 rounded-xl hover:bg-gray-800">
        Search
      </button>
    </form>
  );
}
