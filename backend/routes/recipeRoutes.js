import express from 'express';
import {
  getAllRecipies,
  getRecipeDetails,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from '../controllers/recipeController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getAllRecipies).post(protect, createRecipe);
router
  .route('/:id')
  .get(protect, getRecipeDetails)
  .put(protect, updateRecipe)
  .delete(protect, deleteRecipe);

export default router;
