import express from 'express';
const router = express.Router();
import {
  getAllProducts,
  getProductDetails,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProductsByTerm,
} from '../controllers/productController.js';
import protect from '../middleware/authMiddleware.js';

router.route('/').get(protect, getAllProducts).post(protect, addNewProduct);
router
  .route('/:id')
  .get(protect, getProductDetails)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);
router.get('/search', protect, searchProductsByTerm);

export default router;
