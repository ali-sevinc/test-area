import { Link, NavLink } from "react-router-dom";

const styles = "hover:underline duration-200";

export default function Header() {
  return (
    <header className="flex items-center border-b justify-between px-8 xl:px-0 max-w-6xl mx-auto pt-12 pb-6">
      <Link to="/form-validations" className="text-xl md:text-4xl">
        Form Validations
      </Link>
      <nav className="flex gap-4 items-center text-xl">
        <NavLink
          to="/form-validations/signup"
          className={({ isActive }) =>
            isActive ? `text-zinc-500 ${styles}` : styles
          }
        >
          Sign up
        </NavLink>
      </nav>
    </header>
  );
}
