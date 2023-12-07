const express = require('express');
const { ifAuthenticated, recruiter } = require('../middleware/authentication ');
const { createJob, OneJob, editJob } = require('../controllers/jobsController');
const router = express.Router();

// job  routes

// Job creation route
router.post('/job/create',ifAuthenticated,recruiter,createJob);

// edit job route
router.put('/job/edit/:job_id',ifAuthenticated,recruiter,editJob);

// display one job route
router.get('/job/:id',OneJob);


module.exports = router;