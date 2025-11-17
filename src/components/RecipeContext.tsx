import { createContext, useContext, useState, type ReactNode } from "react";

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string;
  image: string;
  calories: number;
}

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
}
const RecipeContext = createContext<RecipeContextType | undefined>(undefined);
export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Quinoa Salad",
      description: "A refreshing and healthy quinoa salad.",
      ingredients: "Quinoa, vegetables, olive oil",
      image: "https://source.unsplash.com/300x200/?food,quinoa",
      calories: 300,
    },
    {
      id: 2,
      title: "Grilled Chicken",
      description: "Delicious grilled chicken with herbs.",
      ingredients: "Chicken breast, herbs, olive oil",
      image: "https://source.unsplash.com/300x200/?food,chicken",
      calories: 400,
    },
  ]);
  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };
  return (
    <RecipeContext.Provider value={{ recipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
}
export function useRecipes() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipes must be used inside RecipeProvider");
  }
  return context;
}
