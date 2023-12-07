const express = require('express');
const { ifAuthenticated, recruiter } = require('../middleware/authentication ');
const { createJob, OneJob, editJob, DisplayJobs } = require('../controllers/jobsController');
const router = express.Router();

// job  routes

// Job creation route
router.post('/job/create',ifAuthenticated,recruiter,createJob);

// edit job route
router.put('/job/edit/:job_id',ifAuthenticated,recruiter,editJob);

// display one job route
router.get('/job/:id',OneJob);

// display one job route
router.get('/jobs',DisplayJobs);


module.exports = router;