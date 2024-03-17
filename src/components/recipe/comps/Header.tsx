import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSearchContext } from "../SearchContext";
import { useRef } from "react";
import { HiOutlineMenu, HiOutlineSearchCircle } from "react-icons/hi";
import Modal from "./Modal";
import { useUIContext } from "../uiContext";

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { handleSearch } = useSearchContext();
  const { mainNav, openMainNav, closeMainNav } = useUIContext();
  const navigate = useNavigate();

  function handleChange() {
    const search = searchRef.current?.value;

    if (!search || search.trim().length < 3) return;

    handleSearch(search);
    navigate(`/recipes/recipes?type=${search}`);
    searchRef.current.value = "";
  }

  function handleNav(path: string) {
    navigate(path);
    closeMainNav();
  }

  return (
    <header className="fixed left-0 top-0 z-10 flex h-20 w-full items-center  justify-between border-b-2 bg-white px-4 py-4 md:px-12">
      <Link
        to="/recipes"
        className="hidden text-3xl font-bold text-stone-700 sm:inline-block"
      >
        Recipify
      </Link>

      <div className="flex items-center rounded-xl shadow-xl shadow-orange-300/30">
        <input
          placeholder="Search Recipe"
          className="rounded-l-xl border-2  border-r-0 border-orange-200 px-4 py-2 font-semibold  focus:outline-none focus:ring-1 focus:ring-orange-400"
          ref={searchRef}
        />
        <button
          className="rounded-r-xl border-2  border-orange-200 px-3 py-2 text-2xl text-orange-300"
          onClick={handleChange}
        >
          <HiOutlineSearchCircle />
        </button>
      </div>

      <ul className="hidden gap-8 sm:flex ">
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : {}
            }
            to="/recipes/favorites"
            className="text-lg text-stone-700"
          >
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : {}
            }
            to="/recipes/About"
            className="text-lg text-stone-700"
          >
            About
          </NavLink>
        </li>
      </ul>
      <button onClick={openMainNav} className="inline-block text-2xl sm:hidden">
        <HiOutlineMenu />
      </button>
      {mainNav && (
        <Modal
          onClose={closeMainNav}
          className="fixed left-0 top-0 z-30 w-full bg-stone-50"
        >
          <ul className="flex flex-col items-center justify-center gap-2">
            <li>
              <button
                onClick={() => handleNav("/recipes")}
                className="text-lg text-stone-700"
              >
                Recipfy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/recipes/favorites")}
                className="text-lg text-stone-700"
              >
                Favorites
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("/recipes/About")}
                className="text-lg text-stone-700"
              >
                About
              </button>
            </li>
          </ul>
        </Modal>
      )}
    </header>
  );
}
