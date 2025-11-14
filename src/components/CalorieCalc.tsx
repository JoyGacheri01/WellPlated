import { useState } from "react";

const foodData: { name: string; caloriesPer100g: number }[] = [
  { name: "banana", caloriesPer100g: 89 },
  { name: "ugali", caloriesPer100g: 110 },
  { name: "rice", caloriesPer100g: 130 },
  { name: "chapati", caloriesPer100g: 297 },
  { name: "egg", caloriesPer100g: 155 },
  { name: "milk", caloriesPer100g: 42 },
  { name: "beef", caloriesPer100g: 250 },
];

export default function CalorieCalc() {
  const [food, setFood] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateCalories = () => {
    setError("");
    if (!food || !amount) {
      setError("Please enter both food and amount.");
      return;
    }
    const fooditem = foodData.find(
      (f) => f.name.toLowerCase() === food.toLowerCase()
    );
    if (!fooditem) {
      setError("Food not found. Try: banana, egg, chapati, rice...");
      return;
    }
    const grams = parseFloat(amount);
    if (isNaN(grams) || grams <= 0) {
      setError("Please enter a valid amount in grams.");
      return;
    }

    const totalCalories = (fooditem.caloriesPer100g / 100) * grams;
    setResult(totalCalories);
  };
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="food"
        >
          Food
        </label>
        <input
          type="text"
          id="food"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="e.g. banana"
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amount"
        />
          Amount (grams)
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="e.g. 100"
        />
        
      </div>
      <button
        onClick={calculateCalories}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300"
      >
        Calculate
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result !== null && (
        <div className="mt-6 p-4 border rounded bg-white">
          <h2 className="text-xl font-bold mb-2">Total Calories</h2>
          <p>
            Total Calories: <span className="font-bold">{result} kcal</span>
          </p>
        </div>
      )}
    </div>
  );
}
