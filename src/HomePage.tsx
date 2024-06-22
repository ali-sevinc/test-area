import { Link } from "react-router-dom";
import { PAGES } from "./PagesData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-700 pb-12 text-zinc-50">
      <h1 className="border-b py-4 text-center text-4xl font-bold">
        Test Area Demo Apps
      </h1>
      <ul className="mx-auto flex w-10/12 flex-wrap gap-8 pt-12">
        {PAGES.map((item) => (
          <li key={item.id}>
            <Link
              className="flex items-center gap-2 border px-4 py-2 duration-200 hover:scale-105 hover:bg-stone-600"
              to={item.id}
            >
              <span>{item.text}</span>
              <span className="text-lg">{item.icon}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
