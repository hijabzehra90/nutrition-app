import React from 'react';

// Sample mock data of recipes
const recipes = [
  {
    id: 1,
    name: 'Grilled Chicken Salad',
    servings: 2,
    nutrition: { calories: 300, protein: 25, carbs: 15, fats: 10 },
    ingredients: ['Chicken', 'Lettuce', 'Tomatoes', 'Olive Oil', 'Salt'],
  },
  {
    id: 2,
    name: 'Cauliflower Rice',
    servings: 4,
    nutrition: { calories: 150, protein: 5, carbs: 20, fats: 3 },
    ingredients: ['Cauliflower', 'Salt', 'Pepper', 'Olive Oil'],
  },
  {
    id: 3,
    name: 'Beef Stir Fry',
    servings: 3,
    nutrition: { calories: 400, protein: 35, carbs: 18, fats: 15 },
    ingredients: ['Beef', 'Bell Peppers', 'Onions', 'Soy Sauce', 'Garlic'],
  },
  // New high-protein Pakistani recipes
  {
    id: 4,
    name: "Chicken Biryani",
    servings: 4,
    nutrition: {
      calories: 600,
      protein: 35,
      carbs: 75,
      fats: 20,
    },
    ingredients: [
      "Chicken",
      "Basmati Rice",
      "Onions",
      "Tomatoes",
      "Yogurt",
      "Spices",
      "Cilantro",
      "Mint",
    ],
  },
  {
    id: 5,
    name: "Beef Karahi",
    servings: 4,
    nutrition: {
      calories: 500,
      protein: 40,
      carbs: 10,
      fats: 35,
    },
    ingredients: [
      "Beef",
      "Tomatoes",
      "Green Chilies",
      "Ginger",
      "Garlic",
      "Cilantro",
      "Spices",
    ],
  },
  {
    id: 6,
    name: "Chana Dal",
    servings: 4,
    nutrition: {
      calories: 350,
      protein: 25,
      carbs: 50,
      fats: 10,
    },
    ingredients: [
      "Chana Dal",
      "Onions",
      "Tomatoes",
      "Spices",
      "Cilantro",
      "Ginger",
      "Green Chilies",
    ],
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    servings: 4,
    nutrition: {
      calories: 300,
      protein: 30,
      carbs: 5,
      fats: 15,
    },
    ingredients: [
      "Chicken",
      "Yogurt",
      "Lemon Juice",
      "Tandoori Masala",
      "Garlic",
      "Ginger",
      "Spices",
    ],
  },
  {
    id: 8,
    name: "Palak Paneer",
    servings: 4,
    nutrition: {
      calories: 400,
      protein: 28,
      carbs: 15,
      fats: 30,
    },
    ingredients: [
      "Spinach",
      "Paneer",
      "Onions",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Spices",
    ],
  },
  {
    id: 9,
    name: "Egg Curry",
    servings: 4,
    nutrition: {
      calories: 320,
      protein: 20,
      carbs: 15,
      fats: 20,
    },
    ingredients: [
      "Eggs",
      "Onions",
      "Tomatoes",
      "Spices",
      "Cilantro",
      "Green Chilies",
    ],
  },
  {
    id: 10,
    name: "Chicken Seekh Kebabs",
    servings: 4,
    nutrition: {
      calories: 250,
      protein: 30,
      carbs: 10,
      fats: 15,
    },
    ingredients: [
      "Ground Chicken",
      "Onions",
      "Ginger",
      "Garlic",
      "Spices",
      "Cilantro",
    ],
  },
  {
    id: 11,
    name: "Moong Dal",
    servings: 4,
    nutrition: {
      calories: 300,
      protein: 24,
      carbs: 45,
      fats: 5,
    },
    ingredients: [
      "Moong Dal",
      "Onions",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Spices",
      "Cilantro",
    ],
  },
  {
    id: 12,
    name: "Karachi Beef Kebab",
    servings: 4,
    nutrition: {
      calories: 400,
      protein: 35,
      carbs: 10,
      fats: 25,
    },
    ingredients: [
      "Beef Mince",
      "Onions",
      "Spices",
      "Cilantro",
      "Green Chilies",
    ],
  },
  {
    id: 13,
    name: "Prawn Masala",
    servings: 4,
    nutrition: {
      calories: 350,
      protein: 30,
      carbs: 15,
      fats: 20,
    },
    ingredients: [
      "Prawns",
      "Onions",
      "Tomatoes",
      "Spices",
      "Cilantro",
      "Coconut Milk",
    ],
  },
];


function RecipeList({ ingredient, onRecipeSelect }) {
  // Filter recipes based on the selected ingredient
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.ingredients.some((ing) => ing.toLowerCase() === ingredient.toLowerCase()
  ));

  return (
    <div>
      <h3>Recipes for {ingredient}</h3>
      {filteredRecipes.length > 0 ? (
        <ul>
          {filteredRecipes.map((recipe) => (
            <li key={recipe.id}>
              <h4>{recipe.name}</h4>
              <p>Servings: {recipe.servings}</p>
              <p>Calories: {recipe.nutrition.calories} kcal</p>
              <button onClick={() => onRecipeSelect(recipe)}>
                View Details
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found for {ingredient}.</p>
      )}
    </div>
  );
}

export default RecipeList;
