const JobType=require('../models/jobTypeModel');
const errorResponse = require('../utils/errorResponse');

// job category creation 
exports.createJobType= async(req,res,next)=>{
    try {
        
        const job_type =await JobType.create({
            JobTypeName:req.body.JobTypeName,
            user:req.user.id,
        });
        res.status(201).json({
            succuss: true, 
            job_type
        })
    } catch (error) {
        next(error);
    }
}

// display all job types 
exports.displayAllJobType= async(req,res,next)=>{
    try {
        
        const job_type =await JobType.find();
        res.status(200).json({
            succuss: true, 
            job_type
        })
    } catch (error) {
        next(error);
    }
}