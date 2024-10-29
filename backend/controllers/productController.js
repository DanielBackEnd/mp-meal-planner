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
      price: product.price,
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
  const { name, weight, mark, price } = req.body;

  const product = await Product.create({
    name,
    weight,
    mark,
    price,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      weight: product.weight,
      mark: product.mark,
      price: product.price,
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
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.weight = req.body.weight || product.weight;
    product.mark = req.body.mark || product.mark;
    product.price = req.body.price || product.price;

    const updatedProduct = await product.save();

    res.status(200).json({
      _id: updatedProduct._id,
      name: updatedProduct.name,
      weight: updatedProduct.weight,
      mark: updatedProduct.mark,
      price: updateProduct.price,
    });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// delete product
// DELETE /api/products/:id
// private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.deleteOne();
    res.status(200).json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// search product by term
// GET /api/products/search
// private
const searchProductsByTerm = asyncHandler(async (req, res) => {
  const searchTerm = req.query.query;
  if (!searchTerm) {
    res.status(400);
    throw new Error('No products');
  }
  const products = await Product.find({
    name: { $regex: searchTerm, $options: 'i' },
  });

  res.json(products);
});

export {
  getAllProducts,
  getProductDetails,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProductsByTerm,
};
