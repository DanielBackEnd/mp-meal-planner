import express from 'express';
import {
  createFridge,
  getUserFridge,
  addProductToFridge,
  deleteProductFromFridge,
} from '../controllers/fridgeController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createFridge).get(protect, getUserFridge);
router.post('/add', protect, addProductToFridge);
router.delete('/delete', protect, deleteProductFromFridge);

export default router;
