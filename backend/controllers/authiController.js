const User = require('../models/userModel');
const errorResponse = require('../utils/errorResponse')

// sing in procedures
exports.signin = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        //validation
        if (!email) {//check if email not provided
            return next(new errorResponse("please Provid an email", 403));
        }
        if (!password) {//check if password not provided
            return next(new errorResponse("please Provid a password", 403));
        }

        //check user email wheather it is registered or not
        const user = await User.findOne({ email });
        if (!user) {
            return next(new errorResponse("invalid credentials", 400));
        }

        //check password if matched or not
        const MatchedPassword = await user.checkpassword(password);
        if (!MatchedPassword) {
            return next(new errorResponse("invalid credentials", 400));
        }

        sendTokenResponse(user, 200, res);

    } catch (error) {
        next(error);
    }
}

// signup procedures
exports.signup = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new errorResponse('Email already registred', 400));
    }
    try {
        const user = User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}

// logout mechanism
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}
const sendTokenResponse = async (user, statuscode, res) => {
    const token = await user.getJwtToken();
    res.status(statuscode).cookie('token', token, { maxAge: 60 * 60 * 1000, httponly: true })
        .json({ success: true, token, user })
}

// user profile
exports.userProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success: true,
        user
    })
}