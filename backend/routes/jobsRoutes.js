const express = require('express');
const { ifAuthenticated } = require('../middleware/authentication ');
const { createJob, OneJob } = require('../controllers/jobsController');
const router = express.Router();

// job  routes

// Job creation route
router.post('/job/create',ifAuthenticated,createJob)

// display one job route
router.get('/job/:id',OneJob)

module.exports = router;