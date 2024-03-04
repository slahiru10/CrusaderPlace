const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/signup
router.post('/signup', userController.signup);

// POST /api/auth/login
router.post('/login', userController.login);

// POST /api/auth/user/listings
router.get('/listings', userController.listing);

module.exports = router;