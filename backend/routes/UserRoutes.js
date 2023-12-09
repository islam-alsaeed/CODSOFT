const express = require('express');
const router = express.Router();
const { ifAuthenticated, recruiter } = require('../middleware/authentication ');

// 'LoadAllUsers' or the name between curly braces must be the same variable used in exports.
// for example "exports.hello" the value must be "const {hello}= ..." 
const { LoadAllUsers, oneUser, editUser, deleteUser, addUserjobHistory } = require("../controllers/userController");

// Auth routes

// user routes

// for one user 
router.get('/user/:id', ifAuthenticated, oneUser)

// to limit access to recruiters 
router.get('/All_Users', ifAuthenticated,recruiter, LoadAllUsers)

// to edit user 
router.put('/user/edit/:id', ifAuthenticated, editUser)

// to delete user 
router.delete('/recruiter/user/delete/:id', ifAuthenticated,recruiter, deleteUser)

// to apply to job
router.post('/user/applyjob/',ifAuthenticated, addUserjobHistory)


module.exports = router;