import { ReactNode } from "react";
import { RecipeType } from "../pages/Recipes";

export default function RecipeItem({
  recipe,
  children,
}: {
  recipe: RecipeType;
  children: ReactNode;
}) {
  return (
    <li
      key={recipe.id}
      className="flex h-[32rem] flex-col items-center justify-between gap-4 rounded-xl border border-orange-300 pb-4"
    >
      <img src={recipe.image} className="w-64 rounded-t-xl md:w-80" />

      <h3 className="text-xl font-semibold">{recipe.name}</h3>
      <p>{recipe.mealType?.[0]}</p>

      <div className="flex gap-4">{children}</div>
    </li>
  );
}
