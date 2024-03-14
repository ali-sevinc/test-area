import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export type NoteType = { id: number; text: string };
type InitialType = {
  notes: NoteType[];
  showNewNote: boolean;
  addNote: (newNote: NoteType) => void;
  removeNote: (id: number) => void;
  handleOnDrop: (updatedNotes: NoteType[]) => void;
  handleShowNewNote: () => void;
  handleHideNewNote: () => void;
};

const initialState: InitialType = {
  notes: [],
  showNewNote: false,
  addNote: () => {},
  removeNote: () => {},
  handleOnDrop: () => {},
  handleShowNewNote: () => {},
  handleHideNewNote: () => {},
};

const NoteContext = createContext(initialState);

export default function NoteProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [showNewNote, setShowNewNote] = useState(false);

  useEffect(function () {
    const storedNotes = JSON.parse(
      localStorage.getItem("notes") || JSON.stringify([])
    );

    setNotes(storedNotes);
  }, []);

  function addNote(newNote: NoteType) {
    setNotes((cur) => [...cur, newNote]);
    const newNotes = [...notes, newNote];
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }
  function removeNote(id: number) {
    setNotes((cur) => cur.filter((note) => note.id !== id));
    const newNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }
  function handleOnDrop(updatedNotes: NoteType[]) {
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  function handleShowNewNote() {
    setShowNewNote(true);
  }
  function handleHideNewNote() {
    setShowNewNote(false);
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        handleOnDrop,
        addNote,
        removeNote,
        showNewNote,
        handleHideNewNote,
        handleShowNewNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

export function useNoteContext() {
  const context = useContext(NoteContext);
  if (!context)
    throw new Error("NoteContext used outside from NoteProvider scope..");
  return context;
}
