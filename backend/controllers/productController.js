import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// get all products
// GET /api/products
// private
const getAllProducts = asyncHandler(async (req, res) => {
  res.send('get all products');
});

// get product details
// GET /api/products/:id
// private
const getProductDetails = asyncHandler(async (req, res) => {
  res.send('get product details');
});

// add new product
// POST /api/products
// private
const addNewProduct = asyncHandler(async (req, res) => {
  res.send('add new product');
});

// update product
// PUT /api/products/:id
// private
const updateProduct = asyncHandler(async (req, res) => {
  res.send('update prodcut');
});

export { getAllProducts, getProductDetails, addNewProduct, updateProduct };
