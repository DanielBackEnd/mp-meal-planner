import asyncHandler from '../middleware/asyncHandler.js';
import Fridge from '../models/fridgeModel.js';

// create fridge
// POST /api/fridge
// private
const createFridge = asyncHandler(async (req, res) => {
  res.send('create fridge');
});

// get user fridge
// GET /api/fridge
// private
const getUserFridge = asyncHandler(async (req, res) => {
  res.send('get user fridge');
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
