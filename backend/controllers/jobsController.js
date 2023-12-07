const Job = require('../models/jobModel');
const errorResponse = require('../utils/errorResponse');

// job creation 
exports.createJob = async (req, res, next) => {
    try {

        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            salary: req.body.salary,
            jobType: req.body.jobType,
            user: req.user.id,
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
exports.OneJob = async (req, res, next) => {
    try {

        const job = await Job.findById(req.params.id);
        res.status(200).json({
            succuss: true,
            job
        })
    } catch (error) {
        next(error);
    }
}
// display all job 
exports.DisplayJobs = async (req, res, next) => {
    // enable multi pages
    const sizeOfPage = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({}).estimatedDocumentCount(); //to count jobs
    try {

        const jobs = await Job.find().skip(sizeOfPage*(page-1)).limit(sizeOfPage);
        res.status(200).json({
            succuss: true,
            jobs,
            page,
            pages: Math.ceil(count/sizeOfPage),
            count
        })
    } catch (error) {
        next(error);
    }
}

// edit job
exports.editJob = async (req, res, next) => {
    try {

        const job = await Job.findByIdAndUpdate(req.params.job_id, req.body, { new: true }).populate('jobType', 'JobTypeName').populate('user', 'firstName lastName');
        res.status(200).json({
            succuss: true,
            job
        })
    } catch (error) {
        next(error);
    }
}