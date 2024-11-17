// src/components/RecipeDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === Number(id)));

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>Ingredients: {recipe.ingredients?.join(', ') || 'Not specified'}</p>
      <p>Preparation Time: {recipe.prepTime || 'Not specified'} minutes</p>
    </div>
  );
};

export default RecipeDetails;
