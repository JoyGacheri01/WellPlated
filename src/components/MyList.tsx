import React from "react";
import { Link } from "react-router-dom";
import { useRecipes } from "./RecipeContext";

const MyList: React.FC = () => {
  const { recipes } = useRecipes();

  // Filter recipes that are marked as favorite (isFavorite: true)
  const favoriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Favorite Recipes
      </h1>
      {favoriteRecipes.length === 0 ? (
        <p className="text-center text-gray-600">No favorite recipes yet 😢</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow-lg rounded-xl p-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-2">{recipe.description}</p>
              <p className="text-orange-500 font-medium mb-4">
                Calories: {recipe.calories} kcal
              </p>
              <Link
                to={`/recipes/${recipe.id}`}
                className="text-orange-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyList;
