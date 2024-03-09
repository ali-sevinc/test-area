import { Link, useSearchParams } from "react-router-dom";
import { useUIContext } from "../uiContext";

export default function Tags() {
  const { tags } = useUIContext();
  const params = useSearchParams()[0];

  return (
    <aside className="max-h-[90vh] w-[12rem] overflow-y-scroll py-4">
      <h3 className="mb-4 text-center text-2xl font-bold">Tags</h3>
      <ul className="flex flex-col gap-1 px-4 pb-8 ">
        {tags.map((tag) => (
          <li key={tag} className="">
            <Link
              to={`/recipes/recipes?tag=${tag}`}
              className={`inline-block w-full text-stone-700 duration-200 hover:translate-x-1 hover:underline ${params.get("tag") === tag ? "translate-x-1 underline" : ""} `}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
