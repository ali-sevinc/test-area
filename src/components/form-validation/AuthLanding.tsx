import { Link } from "react-router-dom";

export default function AuthLanding() {
  return (
    <div className="max-w-6xl mx-auto flex h-full w-full flex-col pt-24 items-center justify-center">
      <h1 className="text-4xl">Welcome to Form Validations 👋</h1>
      <menu className="flex items-center text-xl gap-2 mt-12">
        <Link
          to="/form-validations/signup"
          className=" border px-4 py-2 hover:bg-zinc-600 duration-200"
        >
          Signup
        </Link>
      </menu>
    </div>
  );
}
