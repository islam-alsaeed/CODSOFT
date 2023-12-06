const express = require('express');
const { ifAuthenticated } = require('../middleware/authentication ');
const { createJob } = require('../controllers/jobsController');
const router = express.Router();


// job  routes
router.post('/job/create',ifAuthenticated,createJob)

module.exports = router;