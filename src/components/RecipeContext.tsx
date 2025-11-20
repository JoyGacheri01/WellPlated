import { createContext, useContext, useState, type ReactNode } from "react";

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  calories: number;
  isFavorite: boolean;
  instructions: string;
}

interface RecipeContextType {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  toggleFavorite: (id: number) => void;
  deleteRecipe: (id: number ) => void;
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);
export function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: 1,
      title: "Quinoa Salad",
      description: "A refreshing and healthy quinoa salad.",
      ingredients: [
        "Quinoa",
        "Tomatoes",
        "Cucumber",
        "Olive Oil",
        "Lemon Juice",
      ],
      image: "https://source.unsplash.com/300x200/?food,quinoa",
      calories: 300,
      isFavorite: false,
      instructions:
        "Cook quinoa, chop veggies, and mix all ingredients together.",
    },
    {
      id: 2,
      title: "Grilled Chicken",
      description: "Delicious grilled chicken with herbs.",
      ingredients: ["Chicken Breast", "Garlic", "Olive Oil", "Rosemary"],
      image: "https://source.unsplash.com/300x200/?food,chicken",
      calories: 400,
      isFavorite: false,
      instructions: "Marinate chicken and grill until fully cooked.",
    },
  ]);
  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };
  const toggleFavorite = (id: number) => {
    setRecipes((prev: Recipe[]) =>
      prev.map((recipe: Recipe) =>
        recipe.id === id
          ? { ...recipe, isFavorite: !recipe.isFavorite }
          : recipe
      )
    );
  };

  const deleteRecipe = (id: number) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };
  
  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, toggleFavorite, deleteRecipe }}>
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
