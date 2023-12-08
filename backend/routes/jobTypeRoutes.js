const express = require('express');
const { createJobType, displayAllJobType, updateJobType } = require('../controllers/jobTypeController');
const { ifAuthenticated, recruiter } = require('../middleware/authentication ');
const router = express.Router();


// job type routes
router.post('/jobtype/create',ifAuthenticated,recruiter,createJobType)
// display all job types
router.get('/jobtype/jobs',displayAllJobType)
// edit job type
router.put('/jobtype/edit/:type_id',ifAuthenticated,recruiter,updateJobType)



module.exports = router;