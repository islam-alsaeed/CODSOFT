const JobType = require('../models/jobTypeModel');
const errorResponse = require('../utils/errorResponse');

// job category creation 
exports.createJobType = async (req, res, next) => {
    try {

        const job_type = await JobType.create({
            JobTypeName: req.body.JobTypeName,
            user: req.user.id,
        });
        res.status(201).json({
            success: true,
            job_type
        })
    } catch (error) {
        next(error);
    }
}

// display all job types 
exports.displayAllJobType = async (req, res, next) => {
    try {

        const job_type = await JobType.find();
        res.status(200).json({
            success: true,
            job_type
        })
    } catch (error) {
        next(error);
    }
}

// update job type
exports.updateJobType = async (req, res, next) => {
    try {

        const job_type = await JobType.findByIdAndUpdate(req.params.type_id, req.body, {new: true});
        res.status(200).json({
            success: true,
            job_type
        })
    } catch (error) {
        next(error);
    }
}
// delete job type
exports.deleteJobType = async (req, res, next) => {
    try {

        const job_type = await JobType.findByIdAndDelete(req.params.type_id);
        res.status(200).json({
            success: true,
            message: "Job type deleted successfully"
        })
    } catch (error) {
        next(new errorResponse("server error",500));
    }
}