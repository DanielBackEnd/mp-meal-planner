import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

// login & get token
// GET /api/users/login
// public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT.SECRET, {
      expiresIn: '30d',
    });

    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

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
  res.send('register user');
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
