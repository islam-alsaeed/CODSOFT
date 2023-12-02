const express=require("express");
const { signin } = require("../controllers/authiController");
const router=express.Router();

// 
router.get('/',signin);
module.exports=router;