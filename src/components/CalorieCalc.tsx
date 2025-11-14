import { useState } from "react";

export default function CalorieCalc() {
  const [food, setFood] = useState("");
  const [amount, setAmount] = useState("");
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
          id={food}
          onChange={(e) => setFood(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="e.g Apple"
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="amount"
        >
          Amount (grams)
        </label>
        <input
          type="number"
          id={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="e.g. 100"
        />
      </div>
      <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
        Calculate
      </button>

      <div className="mt-6 p-4 border rounded bg-white">
        <h2 className="text-xl font-bold mb-2">Result will appear here</h2>
      </div>
    </div>
  );
}
