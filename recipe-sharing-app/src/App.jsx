// src/App.jsx
import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
