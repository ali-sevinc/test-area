import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useNoteContext } from "./NoteContext";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function NewNote() {
  const { showNewNote, handleHideNewNote, addNote } = useNoteContext();
  const ref = useRef<HTMLDialogElement>(null);

  const [text, setText] = useState<string>("");

  useEffect(
    function () {
      if (!ref.current) return;
      if (showNewNote) {
        ref.current.showModal();
      } else {
        ref.current.close();
      }
    },
    [showNewNote],
  );

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (event.target.value.length > 200) return;
    setText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!text || text.length < 10) return;
    addNote({ id: Math.random(), text });
    setText("");
    handleHideNewNote();
  }

  if (!showNewNote) return null;

  return createPortal(
    <AnimatePresence>
      <motion.dialog
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        exit={{ opacity: 0, y: 100 }}
        ref={ref}
        onClose={handleHideNewNote}
        className=" rounded-xl backdrop:bg-stone-900/70"
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-[24rem] flex-col gap-4 rounded-xl px-4 py-6"
        >
          <h2>New Note</h2>
          <p>
            <textarea
              maxLength={200}
              minLength={5}
              required
              rows={6}
              value={text}
              onChange={handleChange}
              className="w-full border p-2 text-xl focus:outline-none focus:ring-2"
            />
          </p>
          <p>{text.length}/200</p>
          <div className="flex items-center justify-end gap-4">
            <button
              className="duration-200 hover:scale-105"
              onClick={handleHideNewNote}
              type="button"
            >
              Close
            </button>
            <button className="border bg-sky-300 px-4 py-2 duration-200 hover:bg-sky-400">
              Add
            </button>
          </div>
        </form>
      </motion.dialog>
    </AnimatePresence>,
    document.getElementById("modal")!,
  );
}
