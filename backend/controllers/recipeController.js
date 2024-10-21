import asyncHandler from '../middleware/asyncHandler.js';
import Recipe from '../models/recipeModel.js';

// get all recipies
// GET /api/recipies
// private
const getAllRecipies = asyncHandler(async (req, res) => {
  res.send('get all recipies');
});

// get recipe details
// GET /api/recipies/:id
// private
const getRecipeDetails = asyncHandler(async (req, res) => {
  res.send('get recipe detail');
});

// create recipe
// POST /api/recipies
// private
const createRecipe = asyncHandler(async (req, res) => {
  res.send('create recipe');
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
