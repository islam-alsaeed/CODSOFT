const express = require('express');
const { createJobType, displayAllJobType } = require('../controllers/jobTypeController');
const { ifAuthenticated } = require('../middleware/authentication ');
const router = express.Router();


// job type routes
router.post('/jobtype/create',ifAuthenticated,createJobType)
router.get('/jobtype/jobs',displayAllJobType)



module.exports = router;