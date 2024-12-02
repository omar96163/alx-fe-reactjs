import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Recipe Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{recipe.title}</h2>
                <p className="text-sm text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
