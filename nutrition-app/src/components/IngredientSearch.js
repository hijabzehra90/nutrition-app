import React, { useState } from 'react';

function IngredientSearch({ onIngredientSelect }) {
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onIngredientSelect(inputValue); // Pass the ingredient back to parent
    setInputValue(''); // Clear the input after submission
  };

  return (
    <div>
      <h2>Search for an Ingredient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an ingredient (e.g., chicken)"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default IngredientSearch;
