const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "First Name is required"],
        maxlength: 24,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "Last Name is required"],
        maxlength: 24,
    },
    password: {
        type: String,
        trim: true,
        required: [true, "password is required"],
        minlength: [8, 'Password must be at least 8 characters length'],
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        unique: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add valid email']
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

// 
const bcrypt = require("bcryptjs");
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 15)
})
// check if the password is matching 
userSchema.methods.checkpassword = async function (receivedPassword) {
    return await bcrypt.compare(receivedPassword, this.password)
}

const jwt = require('jsonwebtoken');
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET,
        { expiresIn: 3600 });//session expiration time
}
module.exports = mongoose.model("User", userSchema)