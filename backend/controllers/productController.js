import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// get all products
// GET /api/products
// private
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(500);
    throw new Error('Products not found');
  }
});

// get product details
// GET /api/products/:id
// private
const getProductDetails = asyncHandler(async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);

  if (product) {
    res.status(200).json({
      _id: product._id,
      name: product.name,
      weight: product.weight,
      mark: product.mark,
    });
  } else {
    res.status(500);
    throw new Error('Invalid id product');
  }
});

// add new product
// POST /api/products
// private
const addNewProduct = asyncHandler(async (req, res) => {
  const { name, weight, mark } = req.body;

  const product = await Product.create({
    name,
    weight,
    mark,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      weight: product.weight,
      mark: product.mark,
    });
  } else {
    res.status(400);
    throw new Error('Invalid product data');
  }
});

// update product
// PUT /api/products/:id
// private
const updateProduct = asyncHandler(async (req, res) => {
  res.send('update prodcut');
});

export { getAllProducts, getProductDetails, addNewProduct, updateProduct };
