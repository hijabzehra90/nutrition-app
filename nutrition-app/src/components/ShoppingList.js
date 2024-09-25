// Import React library to use JSX and other React features
import React from 'react';

// Define the ShoppingList component, which takes 'recipe' as a prop
function ShoppingList({ recipe }) {
  // Ensure that we have recipe data to avoid errors
  if (!recipe) {
    return <div>No recipe selected.</div>;
  }

  return (
    <div>
      {/* Heading showing the name of the recipe */}
      <h3>Shopping List for {recipe.name}</h3>

      {/* Check if the recipe has ingredients */}
      {recipe.ingredients && recipe.ingredients.length > 0 ? (
        <ul>
          {/* Map through the list of ingredients */}
          {recipe.ingredients.map((ingredient, index) => (
            // Display each ingredient in a list item
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      ) : (
        // Message to display if there are no ingredients
        <p>No ingredients found for this recipe.</p>
      )}
    </div>
  );
}

// Export the component so it can be imported in App.js
export default ShoppingList;
