import { useNoteContext } from "./NoteContext";

export default function Header() {
  const { handleShowNewNote } = useNoteContext();
  return (
    <header className="flex items-center justify-between py-6 border-b-2 ">
      <h1 className="text-3xl font-semibold">Noteflix</h1>

      <button
        className="bg-sky-300 font-semibold hover:bg-sky-400 duration-200 px-4 py-2 rounded"
        onClick={handleShowNewNote}
      >
        New Note
      </button>
    </header>
  );
}
