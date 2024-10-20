import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// login & get token
// GET /api/users/login
// public
const loginUser = asyncHandler(async (req, res) => {
  res.send('login user');
});

// register
// POST /api/users/register
// public
const registerUser = asyncHandler(async (req, res) => {
  res.send('register user');
});

// logout & clear token
// POST /api/users/logout
// private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// get user profile
// GET /api/users/:id
// private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user data');
});

// get user profile
// PUT /api/users/:id
// private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('update user prpfo;e');
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
