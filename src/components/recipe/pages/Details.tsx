import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { RecipeType } from "./Recipes";
import Button from "../comps/Button";
import { useState } from "react";

export default function Details() {
  const recipe = useLoaderData() as RecipeType;
  const [fav, setFav] = useState<RecipeType | undefined>(() => {
    const favItems = JSON.parse(
      localStorage.getItem("favorites")!,
    ) as RecipeType[];
    const fav = favItems?.find((i) => i.id === recipe.id);
    return fav;
  });
  // console.log(recipe);

  function handleAddFav() {
    const favItems = JSON.parse(localStorage.getItem("favorites")!);
    const newFavs = [...favItems, recipe];
    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setFav(recipe);
  }
  function handleRemoveFav() {
    const favItems = JSON.parse(
      localStorage.getItem("favorites")!,
    ) as RecipeType[];
    const newFavs = favItems.filter((i) => i.id !== recipe.id);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setFav(undefined);
  }

  if (!recipe) return <h2>Recipe not found.</h2>;
  return (
    <div className="mx-4 mb-32 flex min-h-screen flex-col gap-4 px-4 pt-12 md:mx-0 lg:flex-row">
      <div className="max-h-[75%]">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-96 rounded-xl md:w-[32rem]"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl">{recipe.name}</h3>

        <section>
          <h4 className="text-xl font-semibold">Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ing, idx) => (
              <li key={ing}>
                <b>{idx + 1}- </b>
                <span>{ing}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="text-xl font-semibold">Instructions</h4>
          <ol>
            {recipe.instructions.map((ins, index) => (
              <li key={ins}>
                <b>{index + 1}- </b> <span>{ins}</span>
              </li>
            ))}
          </ol>
        </section>
        <p>
          <b>Servings: </b>
          <span>{recipe.servings}</span>
        </p>
        <div className="flex gap-2">
          <b>Tags: </b>
          <ul className="flex gap-1">
            {recipe.tags.map((t, idx) => (
              <li key={t}>
                {t}
                {idx < recipe.tags.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-4">
          {fav && <Button onClick={handleRemoveFav}>Remove from Fav</Button>}
          {!fav && <Button onClick={handleAddFav}>Add to Fav</Button>}
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;

  const res = await fetch("https://dummyjson.com/recipes/" + id);
  const recipe = (await res.json()) as RecipeType;

  return recipe;
}
