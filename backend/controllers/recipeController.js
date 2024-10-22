import asyncHandler from '../middleware/asyncHandler.js';
import Recipe from '../models/recipeModel.js';

// get all recipies
// GET /api/recipies
// private
const getAllRecipies = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const recipies = await Recipe.find({ user: userId });

  if (recipies) {
    res.status(200).json(recipies);
  } else {
    res.status(404).json({ message: 'Recipies not found' });
  }
});

// get recipe details
// GET /api/recipies/:id
// private
const getRecipeDetails = asyncHandler(async (req, res) => {
  const recipeId = req.params.id;

  const recipe = await Recipe.findById(recipeId);

  if (recipe) {
    res.status(200).json({
      _id: recipe._id,
      name: recipe.name,
      indegrients: recipe.indegrients,
      price: recipe.price,
    });
  } else {
    res.status(404);
    throw new Error('Recipe not found');
  }
});

// create recipe
// POST /api/recipies
// private
const createRecipe = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { name } = req.body;

  const recipe = await Recipe.create({
    user: userId,
    name,
    indegrients: [],
    price: 0,
  });

  if (recipe) {
    res.status(201).json({
      _id: recipe._id,
      user: recipe.user,
      name: recipe.name,
      indegrients: recipe.indegrients,
      price: recipe.price,
    });
  } else {
    res.status(400);
    throw new Error('Something went wrong');
  }
});

// update recipe
// PUT /api/recipies/:id
// private
const updateRecipe = asyncHandler(async (req, res) => {
  res.send('update recipe');
});

// delete recipe
// DELETE /api/recipies/:id
// private
const deleteRecipe = asyncHandler(async (req, res) => {
  res.send('delete recipe');
});

export {
  getAllRecipies,
  getRecipeDetails,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
