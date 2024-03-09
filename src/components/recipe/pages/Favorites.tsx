import { useEffect, useState } from "react";
import { RecipeType } from "./Recipes";
import Button from "../comps/Button";
import RecipeItem from "../comps/RecipeItem";

export default function Favorites() {
  const [favorites, setFavorites] = useState<RecipeType[]>([]);

  useEffect(function () {
    const favItems = JSON.parse(
      localStorage.getItem("favorites") || JSON.stringify([]),
    );
    setFavorites(favItems);
  }, []);

  function handleRemoveFavorite(id: number) {
    setFavorites((cur) => cur.filter((i) => i.id !== id));

    const newFavArr = favorites.filter((i) => i.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavArr));
  }

  return (
    <div className="min-h-screen pb-32 pt-4">
      <h2 className="text-center text-2xl">Favorites</h2>
      {!favorites.length && (
        <p className="text-center ">No favorite recipe found.</p>
      )}
      <ul className="mt-8 flex flex-wrap justify-center gap-8">
        {favorites.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe}>
            <Button model="link" to={`/recipes/recipes/${recipe.id}`}>
              Details
            </Button>
            <Button onClick={() => handleRemoveFavorite(recipe.id)}>
              Remove Favorite
            </Button>
          </RecipeItem>
        ))}
      </ul>
    </div>
  );
}
