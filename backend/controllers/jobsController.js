const Job=require('../models/jobModel');
const errorResponse = require('../utils/errorResponse');

// job creation 
exports.createJob= async(req,res,next)=>{
    try {
        
        const job =await Job.create({
            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            salary:req.body.salary,
            jobType:req.body.jobType,
            user:req.user.id,
        });
        res.status(201).json({
            succuss: true, 
            job
        })
    } catch (error) {
        next(error);
    }
}

// display one job 
exports.OneJob= async(req,res,next)=>{
    try {
        
        const job =await Job.findById(req.param.id);
        res.status(200).json({
            succuss: true, 
            job_type
        })
    } catch (error) {
        next(error);
    }
}