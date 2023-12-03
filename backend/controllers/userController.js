const User = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

// to load all users 
exports.LoadAllUsers = async (req,res,next)=>{
    // enable multi pages
    const sizeOfPage=10;
    const page=Number(req.query.pageNumber)||1;
    const usercount = await User.find({}).estimatedDocumentCount(); //to count users
    try {
        const allusers=await User.find().sort({createdAt: -1}).select('-password')//
        .skip(sizeOfPage*(page-1))
        .limit(sizeOfPage);
        
        res.status(200).json({
            success: true,
            allusers,
            page,
            pages: Math.ceil(usercount / sizeOfPage),
            usercount
        })
        next();//to go next 
    } catch (error) {
        return next(error)
    }

}
