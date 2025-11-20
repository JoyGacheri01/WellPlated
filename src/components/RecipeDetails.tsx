import React from "react";
import { useParams, Link } from "react-router-dom";
import { useRecipes } from "./RecipeContext";

const RecipeDetails: React.FC = () => {
  // useParams helps get the id from the URL (like /recipes/1)
  const { id } = useParams<{ id: string }>();
  const { recipes, toggleFavorite } = useRecipes();

  // Find the recipe that matches the id
  const recipe = recipes.find((r) => r.id === Number(id));

  // If no recipe found, show message
  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found 😢</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <Link
        to="/recipes"
        className="text-orange-500 hover:underline mb-4 inline-block"
      >
        ← Back to Recipes
      </Link>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {recipe.title}
        </h1>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <p className="text-orange-500 font-medium mb-6">
          Calories: {recipe.calories} kcal
        </p>

        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
        <button
          onClick={() => toggleFavorite(recipe.id)}
          className={`px-3 py-1 rounded mt-4 ${
            recipe.isFavorite ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          {recipe.isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
