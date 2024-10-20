import express from 'express';
const router = express.Router();
import {
  getAllProducts,
  getProductDetails,
  addNewProduct,
  updateProduct,
} from '../controllers/productController.js';
import protect from '../middleware/authMiddleware.js';

router.route('/').get(protect, getAllProducts).post(protect, addNewProduct);
router
  .route('/:id')
  .get(protect, getProductDetails)
  .put(protect, updateProduct);

export default router;
