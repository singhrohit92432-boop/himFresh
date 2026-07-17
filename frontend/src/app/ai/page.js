"use client";

import { useState } from "react";

export default function AIRecipe() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);
const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    if (!ingredients.trim()) {
  alert("Please enter some ingredients.");
  return;
}
    setLoading(true);
    setRecipe("");

    try {
      const response = await fetch("http://localhost:5000/api/ai/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients,
        }),
      });

      const data = await response.json();

      setRecipe(data);
    } catch (error) {
      alert("Something went wrong.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          🍲 AI Recipe Generator
        </h1>

        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (e.g. Honey, Oats, Almonds)"
          className="w-full border rounded-lg p-3 h-32"
        />

        <button
          onClick={generateRecipe}
          className="mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Generate Recipe
        </button>

        {loading && (
          <p className="mt-6 text-center font-semibold">
            Generating Recipe...
          </p>
        )}

        {recipe && (
  <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-lg">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      🍲 {recipe.recipeName}
    </h2>

    <h3 className="text-xl font-semibold mb-2">🥣 Ingredients</h3>
    <ul className="list-disc ml-6 mb-4">
      {recipe.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h3 className="text-xl font-semibold mb-2">👨‍🍳 Steps</h3>
    <ol className="list-decimal ml-6 mb-4">
      {recipe.steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>

    <h3 className="text-xl font-semibold mb-2">💡 Cooking Tips</h3>
    <ul className="list-disc ml-6">
      {recipe.tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>

  </div>
)}
      </div>
    </div>
  );
}