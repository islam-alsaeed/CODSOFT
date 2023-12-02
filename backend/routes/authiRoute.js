const express=require("express");
const { signup } = require("../controllers/authiController");
const router=express.Router();

// signup page
router.post('/signup',signup)
module.exports=router;