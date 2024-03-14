import NewNote from "./NewNote";
import Note from "./Note";
import NoteProvider from "./NoteContext";

export default function NoteApp() {
  return (
    <NoteProvider>
      <NewNote />
      <Note />
    </NoteProvider>
  );
}
