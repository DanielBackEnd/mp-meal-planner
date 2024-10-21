import asyncHandler from '../middleware/asyncHandler.js';
import Fridge from '../models/fridgeModel.js';

// create fridge
// POST /api/fridge
// private
const createFridge = asyncHandler(async (req, res) => {
  const fridgeExists = await Fridge.findOne({ user: req.user._id });

  if (fridgeExists) {
    res.status(400);
    throw new Error('Fridge already exists for this user');
  }

  const fridge = await Fridge.create({
    user: req.user._id,
    products: [],
  });

  if (fridge) {
    res.status(201).json({
      _id: fridge._id,
      user: fridge.user,
      products: fridge.products,
    });
  } else {
    res.status(400);
    throw new Error('Something wrong, can not create fridge for this user');
  }
});

// get user fridge
// GET /api/fridge
// private
const getUserFridge = asyncHandler(async (req, res) => {
  const fridge = await Fridge.findOne({ user: req.user._id });

  if (fridge) {
    res.status(201).json({
      _id: fridge._id,
      user: fridge.user,
      products: fridge.products,
    });
  } else {
    res.status(404);
    throw new Error('Fridge not found');
  }
});

// add product to fridge
// POST /api/fridge/add
// private
const addProductToFridge = asyncHandler(async (req, res) => {
  res.send('add product ro fridge');
});

// delete product from fridge
// DELETE /api/fridge/delete
// private
const deleteProductFromFridge = asyncHandler(async (req, res) => {
  res.send('remove product from fridge');
});

export {
  createFridge,
  getUserFridge,
  addProductToFridge,
  deleteProductFromFridge,
};
