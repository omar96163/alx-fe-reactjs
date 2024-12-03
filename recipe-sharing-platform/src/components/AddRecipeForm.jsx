import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
      setError("Ingredients must include at least two items.");
      return;
    }

    // Log form data
    console.log({
      title,
      ingredients: ingredientsList,
      steps,
    });

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            placeholder="Recipe title"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            rows="4"
            placeholder="Ingredients"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            rows="4"
            placeholder="Preparation steps"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
