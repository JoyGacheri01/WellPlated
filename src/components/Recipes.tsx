import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRecipes } from "./RecipeContext";

interface RecipesCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  calories: number;
  isFavorite?: boolean;
  toggleFavorite: (id: number) => void;
}

const recipeSuggestions = [
  "githeri",
  "Ugali & Sukuma Wiki",
  "Pilau (Swahili Pilau)",
  "Mukimo",
  "Chapati",
  "Rice",
  "Nyama Choma",
  "Beef Stew",
  "Wet Fry Chicken",
];

//React.FC denotes a functional component
const RecipeCard: React.FC<RecipesCardProps> = ({
  id,
  title,
  description,
  image,
  calories,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <Link to={`/recipes/${id}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
          <p className="text-orange-500 mt-2 text-sm font-medium">
            ~ {calories} kcal
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(id);
            }}
            className="absolute top-3 right-3 text-xl bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </Link>
  );
};

const Recipes: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const { recipes, toggleFavorite } = useRecipes();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    } else {
      const filtered = recipeSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🍽️ Explore Healthy Recipes
        </h1>
        <p className="text-gray-600 mb-6">
          Find recipes that match your taste and health goals
        </p>

        {/* Search Bar */}
        <div className="flex justify-center relative">
          <input
            type="text"
            placeholder="Search for a recipe..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg hover:bg-orange-600 transition duration-300">
            Search
          </button>
          {showSuggestions && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg max-w-md mx-auto z-10">
              {filteredSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
            calories={recipe.calories}
            isFavorite={recipe.isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
