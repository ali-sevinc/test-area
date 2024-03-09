import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Button from "../comps/Button";
import { useEffect, useState } from "react";
import RecipeItem from "../comps/RecipeItem";

export type RecipeType = {
  id: number;
  caloriesPerServing: number;
  cookTimeMinutes: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  name: string;
  servings: number;
  tags: string[];
  mealType: string[];
};

export default function Recipes() {
  const recipes = useLoaderData() as RecipeType[];
  const [favorites, setFavorites] = useState<RecipeType[]>([]);

  useEffect(function () {
    const favRecipes = JSON.parse(
      localStorage.getItem("favorites") || JSON.stringify([]),
    );
    if (!favRecipes || !favRecipes.length) return;

    setFavorites(favRecipes);
  }, []);

  function addToFavorite(recipe: RecipeType) {
    setFavorites((cur) => [...cur, recipe]);
    const newFavArr = [...favorites, recipe];
    localStorage.setItem("favorites", JSON.stringify(newFavArr));
  }
  function removeFromFavorite(id: number) {
    setFavorites((cur) => cur.filter((i) => i.id !== id));
    const newFavArr = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavArr));
  }

  if (!recipes.length)
    return (
      <h2 className="mt-12 text-center text-xl font-semibold">
        Recipe not found.
      </h2>
    );
  return (
    <ul className="flex min-h-screen flex-wrap justify-center gap-8 pb-32 pt-12">
      {recipes.map((recipe) => {
        const favItem = favorites.find((fav) => fav.id === recipe.id);

        return (
          <RecipeItem key={recipe.id} recipe={recipe}>
            <Button model="link" to={`/recipes/recipes/${recipe.id}`}>
              Details
            </Button>
            {!favItem && (
              <Button onClick={() => addToFavorite(recipe)}>
                Add Favorite
              </Button>
            )}
            {favItem && (
              <Button onClick={() => removeFromFavorite(recipe.id)}>
                Remove Favorite
              </Button>
            )}
          </RecipeItem>
        );
      })}
    </ul>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const tag = url.searchParams.get("tag");
  const type = url.searchParams.get("type");

  let recipes = [];
  if (tag) {
    const res = await fetch("https://dummyjson.com/recipes/tag/" + tag);
    const data = await res.json();
    recipes = data.recipes;
  }
  if (type) {
    const res = await fetch("https://dummyjson.com/recipes/meal-type/" + type);
    const data = await res.json();
    recipes = data.recipes;
  }

  return recipes;
}
