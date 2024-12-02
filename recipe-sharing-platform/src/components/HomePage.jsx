import React from "react";
import data from "../data.json";
import { useEffect, useState } from "react";

function HomePage() {
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    setrecipes(data)
  }, []);

  return (
    <>
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
              <p className="text-sm text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default HomePage;
