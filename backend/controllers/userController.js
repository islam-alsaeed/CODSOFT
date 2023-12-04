const User = require('../models/userModel');
const errorResponse = require('../utils/errorResponse');

// load one user
exports.oneUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            user
        })
        next();
    } catch (error) {
        return next(error);
    }
}

// to load all users 
exports.LoadAllUsers = async (req, res, next) => {
    // enable multi pages
    const sizeOfPage = 10;
    const page = Number(req.query.pageNumber) || 1;
    const usercount = await User.find({}).estimatedDocumentCount(); //to count users
    try {
        const allusers = await User.find().sort({ createdAt: -1 }).select('-password')//
            .skip(sizeOfPage * (page - 1))
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


// edituser
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            user
        })
        next();
    } catch (error) {
        return next(error);
    }
}

// delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message:"user deleted successfully"
        })
        next();
    } catch (error) {
        return next(error);
    }
}