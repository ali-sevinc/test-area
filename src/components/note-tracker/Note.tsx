import { ChangeEvent, useRef, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

import Header from "./Header";

import { useNoteContext } from "./NoteContext";
import { motion } from "framer-motion";

type NoteType = { id: number; text: string };
export default function Note() {
  const { notes, handleOnDrop, removeNote } = useNoteContext();
  const [draggedItem, setDraggedItem] = useState<NoteType | null>(null);
  const [onHoverIndex, setOnHoverIndex] = useState<number | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const changeRef = useRef<NodeJS.Timeout | undefined>();

  function handleDrop(index: number) {
    if (!draggedItem) return;

    const updatedNotes = [...notes];
    const draggedIndex = updatedNotes.findIndex(
      (note) => note.id === draggedItem.id,
    );
    if (index === draggedIndex) return;

    updatedNotes.splice(draggedIndex, 1);
    updatedNotes.splice(index, 0, draggedItem);

    handleOnDrop(updatedNotes);
    setOnHoverIndex(null);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    if (changeRef.current) clearTimeout(changeRef.current);

    changeRef.current = setTimeout(() => {
      changeRef.current = undefined;
      setSearchTerm(event.target.value);
    }, 500);
  }

  function handleHover(index: number) {
    setOnHoverIndex(index);
  }

  const filteredNotes = notes.filter((note) =>
    JSON.stringify(note)
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase()),
  );

  return (
    <div className="mx-4 flex max-w-6xl flex-col gap-4 lg:mx-auto">
      <Header />
      <main className="flex flex-col gap-8">
        <section>
          <input
            onChange={handleSearch}
            type="search"
            className="w-full rounded-lg border border-stone-600 px-4 py-2 text-lg focus:outline-none focus:ring-2"
            placeholder="🔍 Type to search..."
          />
        </section>
        <section>
          {filteredNotes.length === 0 && (
            <p className="text-center text-lg ">No note found.</p>
          )}
          {filteredNotes.length > 0 && (
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredNotes.map((note, index) => (
                <motion.li
                  layout
                  draggable
                  key={note.id}
                  className={`${
                    onHoverIndex === index ? "bg-sky-300" : "bg-yellow-300"
                  } flex min-h-[12rem] cursor-pointer flex-col justify-between rounded-xl px-4 py-3`}
                  onDragStart={() => setDraggedItem(note)}
                  onDragOver={(e) => {
                    e.preventDefault();
                    handleHover(index);
                  }}
                  onDrop={() => handleDrop(index)}
                >
                  <p className="text-lg">{note.text}</p>
                  <div className="text-end">
                    <button
                      onClick={() => removeNote(note.id)}
                      className="text-xl"
                    >
                      <HiOutlineTrash />
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
