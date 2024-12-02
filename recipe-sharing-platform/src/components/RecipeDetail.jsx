import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto p-6 shadow">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4"/>
      <h1 className="text-4xl font-bold mb-4 text-green-600">{recipe.title}</h1>
      <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">How to prepare:</h2>
      <p className="text-lg">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
