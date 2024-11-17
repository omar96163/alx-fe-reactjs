// src/recipeStore.js
import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Action to set the search term
  setSearchTerm: (term) => set((state) => {
    state.searchTerm = term;
    state.filterRecipes(); // Automatically filter when search term is updated
  }),

  // Action to filter recipes
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // AddRecipe action remains unchanged
  addRecipe: (newRecipe) => set((state) => {
    state.recipes = [...state.recipes, newRecipe];
    state.filterRecipes(); // Reapply filters when new recipes are added
  }),

  // DeleteRecipe action
  deleteRecipe: (id) => set((state) => {
    state.recipes = state.recipes.filter((recipe) => recipe.id !== id);
    state.filterRecipes(); // Reapply filters when a recipe is deleted
  }),
}));

export default useRecipeStore;
