import { useNavigate } from "react-router-dom";
import { useUIContext } from "../uiContext";
import Modal from "./Modal";

export default function TagsHamburgerMenu() {
  const { tagsMenu, closeTagsMenu, tags } = useUIContext();
  const navigate = useNavigate();

  function handleNavigate(tag: string) {
    closeTagsMenu();
    navigate(`/recipes/recipes?tag=${tag}`);
  }

  if (!tagsMenu) return null;

  return (
    <Modal
      onClose={closeTagsMenu}
      className="fixed top-0 bg-stone-100 z-30 h-screen overflow-y-scroll left-0 w-[12rem]"
    >
      <>
        <h2 className="text-xl font-semibold text-center py-4">Tags</h2>
        <ul className="px-4 pb-8">
          {tags.map((tag) => (
            <li key={tag}>
              <button
                onClick={() => handleNavigate(tag)}
                className="text-stone-700 hover:underline"
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </>
    </Modal>
  );
}
