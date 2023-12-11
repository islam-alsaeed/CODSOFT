const Job = require('../models/jobModel');
const JobType = require('../models/jobTypeModel');
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
            success: true,
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
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}
// display all job 
exports.DisplayJobs = async (req, res, next) => {
    // search jobs by keywords/title
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    //filter job by job type/category id
    let ids = [];
    const jobTypeCategory = await JobType.find({}, { _id: 1 });
    jobTypeCategory.forEach(cat => {
        ids.push(cat._id);
    })
    let cat = req.query.cat;
    let categ;
    if (cat !== '') {
        categ = cat
    }
    else if (cat == '' || cat == null) {
        categ = ids
    }

    // to filter jobs by location
    let locations = [];
    const jobsByLocation = await Job.find({}, { location: 1 });
    jobsByLocation.forEach(value => {
        locations.push(value.location);
    })
    let uniqueLocation = [...new Set(locations)];
    let location = req.query.location;
    let FliterdLocation// (location !== '' ? location : uniqueLocation);
    if (location !== '')
        FliterdLocation = location;
    else
        FliterdLocation = uniqueLocation

    // enable multi pages
    const sizeOfPage = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({ ...keyword, jobType: categ, location: FliterdLocation }).countDocuments(); //to count jobs

    try {
        const jobs = await Job.find({ ...keyword, jobType: categ, location: FliterdLocation }).sort({ createdAt: -1 }).skip(sizeOfPage * (page - 1)).limit(sizeOfPage);
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / sizeOfPage),
            count,
            uniqueLocation
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
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}