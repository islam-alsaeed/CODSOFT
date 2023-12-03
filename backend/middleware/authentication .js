const jwt = require('jsonwebtoken')
const user = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

exports.ifAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new errorResponse('not authorized to access here!', 401));

    }

    // here we verfiy the token
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await user.findById(decodedToken.id);
        next();//go to next 
    } catch (error) {
        return next(new errorResponse('not authorized to access here!', 401));
    }
} 

// for recruiter 
exports.recruiter =(req,res,next)=>{
    if(req.user.role===0){
        return next(new errorResponse('You are not authorized to access here you are not a recruiter !', 401));

    }
    next();
}