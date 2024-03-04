// authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const user = await User.create({ name, email, password, phone });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error signing up' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    // Check password
    const isPasswordValid = await user.isValidPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, error: 'Incorrect password' });
    }
    // User authenticated
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error logging in' });
  }
};

exports.listing = async (req, res) => {
  try {
    //TODO: get a list of user list
    // if list legnth  == 0 => notice or pop up to user 
    // if list is long > 
  } catch (error) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Error getting users listing' });
  }
}


