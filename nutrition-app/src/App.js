import React, { useState } from 'react';
import IngredientSearch from './components/IngredientSearch';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'; 
import ShoppingList from './components/ShoppingList';

function App() {
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredient(ingredient);
    setSelectedRecipe(null);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <IngredientSearch onIngredientSelect={handleIngredientSelect} />

      {selectedIngredient && (
        <RecipeList
          ingredient={selectedIngredient}
          onRecipeSelect={handleRecipeSelect}
        />
      )}

      {selectedRecipe && (
        <>
          <RecipeDetails recipe={selectedRecipe} /> {/* NEW: Display Recipe Details */}
          <ShoppingList recipe={selectedRecipe} />  {/*Already present */}
        </>
      )}
    </div>
  );
}

export default App;
