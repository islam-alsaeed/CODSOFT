const express = require('express');
const router = express.Router();
const { ifAuthenticated, recruiter } = require('../middleware/authentication ');

// 'LoadAllUsers' or the name between curly braces must be the same variable used in exports.
// for example "exports.hello" the value must be "const {hello}= ..." 
const { LoadAllUsers, oneUser } = require("../controllers/userController");

// Auth routes

// user routes
// to limit access to recruiters 
router.get('/All_Users', ifAuthenticated,recruiter, LoadAllUsers)

// for one user 
router.get('/user/:id', ifAuthenticated, oneUser)

module.exports = router;