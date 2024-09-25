import React from 'react';

function RecipeDetails({ recipe }) {
  console.log(recipe);  // Check if recipe is being passed correctly
  return (
    <div>
      <h3>{recipe.name}</h3> {/* Recipe name */}
      <p>Servings: {recipe.servings}</p> {/* Number of servings */}
      <h4>Nutrition per serving:</h4>
      <ul>
        <li>Calories: {recipe.nutrition.calories} kcal</li> {/* Calories */}
        <li>Protein: {recipe.nutrition.protein} g</li> {/* Protein */}
        <li>Carbs: {recipe.nutrition.carbs} g</li> {/* Carbohydrates */}
        <li>Fats: {recipe.nutrition.fats} g</li> {/* Fats */}
      </ul>
    </div>
  );
}

export default RecipeDetails;
