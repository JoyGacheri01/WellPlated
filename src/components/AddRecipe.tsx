import { useState } from "react";
import { useRecipes } from "./RecipeContext";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState<number>(0);
  const { addRecipe } = useRecipes();
  return (
    <div className="space-y-6">
      <div className="space-y-4 max-w-md mx-auto mt-10">
        <label className="block font-medium mb-1">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Recipe Title"
        />
      </div>
      <div className="space-y-4 max-w-md mx-auto mt-10">
        <label className="block font-medium mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Description"
        />
      </div>
      <div className="space-y-4 max-w-md mx-auto mt-10">
        <label className="block font-medium mb-1">Ingredients</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Ingredients"
        />
      </div>
      <div className="space-y-4 max-w-md mx-auto mt-10">
        <label className="block font-medium mb-1">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Image URL"
        />
      </div>
      <div className="space-y-4 max-w-md mx-auto mt-10">
        <label className="block font-medium mb-1">Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Enter Calories"
        />
      </div>
      {title || description || ingredients || image ? (
        <div className="mt-6 max-w-md mx-auto p-4 border border-green-300 rounded bg-green-50">
          {image && (
            <img src={image} alt={title} className="w-full h-40 object-cover" />
          )}
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">
              {title || "Recipe Title"}
            </h2>
            <p className="tect-gray-700 mb-2">
              {description || "Recipe Description...."}
            </p>
            {ingredients && <p className="text-gray-700">{ingredients}</p>}
          </div>
        </div>
      ) : null}

      <button
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 block mx-auto"
        onClick={() => {
          if (title && description && ingredients && image && calories > 0) {
            const newRecipe = {
              id: Date.now(), // Simple ID generation
              title,
              description,
              ingredients,
              image,
              calories,
            };
            addRecipe(newRecipe);
            // Reset form
            setTitle("");
            setDescription("");
            setIngredients("");
            setImage("");
            setCalories(0);
            alert("Recipe added successfully!");
          } else {
            alert(
              "Please fill in all fields and ensure calories is greater than 0."
            );
          }
        }}
      >
        Save Recipe
      </button>
    </div>
  );
}
