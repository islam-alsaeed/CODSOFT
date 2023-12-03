const express=require('express');
const router=express.Router();
const { signin,signup, logout } = require("../controllers/authiController");

// Auth routes
router.route('/signin')
  .get(signin) // Handle GET /signin
  .post(signin); // Handle POST /signin
  
  // signup page
//   router.route('/signup')
//     .get(signup) // Handle GET /signin
//     .post(signup); // Handle POST /signin
router.post('/signup',signup)
router.get('/logout',logout)

module.exports=router;