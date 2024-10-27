import express from 'express';
const router = express.Router();
import {
  getAllProducts,
  getProductDetails,
  addNewProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import protect from '../middleware/authMiddleware.js';

router.route('/').get(protect, getAllProducts).post(protect, addNewProduct);
router
  .route('/:id')
  .get(protect, getProductDetails)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

export default router;
