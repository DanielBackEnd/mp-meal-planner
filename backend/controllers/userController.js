import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import genToken from '../utils/genToken.js';

// login & get token
// GET /api/users/login
// public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    genToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// register
// POST /api/users/register
// public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    genToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// logout & clear token
// POST /api/users/logout
// private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('logout user');
});

// get user profile
// GET /api/users/profile
// private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('get user data');
});

// get user profile
// PUT /api/users/profile
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
