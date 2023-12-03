const express = require('express');
const router = express.Router();
const { signin, signup, logout, userProfile } = require("../controllers/authiController");
const { ifAuthenticated } = require('../middleware/authentication ');

// Auth routes

// signin page route
router.route('/signin').post(signin); // Handle POST /signin
// signup page route
router.post('/signup', signup)
// logout route
router.get('/logout', logout)
// User profile route
router.get('/profile', ifAuthenticated, userProfile)

module.exports = router;