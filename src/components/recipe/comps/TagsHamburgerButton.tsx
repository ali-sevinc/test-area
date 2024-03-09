import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useUIContext } from "../uiContext";

export default function TagsHamburgerButton() {
  const { tagsMenu, openTagsMenu } = useUIContext();
  return (
    <button onClick={openTagsMenu} className="text-2xl">
      {tagsMenu ? <HiOutlineX /> : <HiOutlineMenu />}
    </button>
  );
}
