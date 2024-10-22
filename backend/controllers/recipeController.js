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
  const recipeId = req.params.id;

  const recipe = await Recipe.findById(recipeId);

  if (recipe) {
    recipe.name = req.body.name || recipe.name;
    recipe.indegrients = req.body.indegrients || recipe.indegrients;
    recipe.price = req.body.price || recipe.price;

    const updatedRecipe = await recipe.save();

    res.status(200).json({
      _id: updatedRecipe._id,
      user: updatedRecipe.user,
      name: updatedRecipe.name,
      indegrients: updatedRecipe.indegrients,
      price: updatedRecipe.price,
    });
  } else {
    res.status(404);
    throw new Error('Recipe not found');
  }
});

// delete recipe
// DELETE /api/recipies/:id
// private
const deleteRecipe = asyncHandler(async (req, res) => {
  const recipeId = req.params.id;

  const recipe = await Recipe.findById(recipeId);

  if (recipe) {
    await recipe.remove();
    res.status(200).json({ message: 'Recipe has been deleted' });
  } else {
    res.status(404);
    throw new Error('Recipe not found');
  }
});

export {
  getAllRecipies,
  getRecipeDetails,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
