const mongoose = require('mongoose');
const {ObjectId}=mongoose.Schema;
const jobTypeSchema = new mongoose.Schema({
    JobTypeName: {
        type: String,
        trim: true,
        required: [true, "Job type is required"],
        maxlength: 50,
    },
    user: {
        type: ObjectId,
        ref:'User',
        required: true
    },
    
}, { timestamps: true })
module.exports = mongoose.model("JobType", jobTypeSchema)