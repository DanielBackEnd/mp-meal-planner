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
// POST /api/fridge/add/
// private
const addProductToFridge = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  let fridge = await Fridge.findOne({ user: req.user._id });

  if (!fridge) {
    fridge = Fridge.create({
      user: req.user._id,
      products: [],
    });
  }

  if (!fridge.products.includes(productId)) {
    fridge.products.push(productId);
    await fridge.save();
    res.status(200).json({
      message: 'Product has been add to fridge',
    });
  } else {
    res.status(400);
    throw new Error('Product already is in fridge');
  }
});

// delete product from fridge
// DELETE /api/fridge/delete
// private
const deleteProductFromFridge = asyncHandler(async (req, res) => {
  const { productId } = req.body;

  const fridge = await Fridge.findOne({ user: req.user._id });

  if (fridge) {
    fridge.products = fridge.products.filter(
      id => id.toString() !== productId.toString()
    );
    await fridge.save();
    res.status(200).json({
      message: 'Product has been removed',
    });
  } else {
    res.status(404);
    throw new Error('Fridge not found');
  }
});

export {
  createFridge,
  getUserFridge,
  addProductToFridge,
  deleteProductFromFridge,
};
