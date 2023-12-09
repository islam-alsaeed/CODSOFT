const express = require('express');
const { createJobType, displayAllJobType, updateJobType, deleteJobType } = require('../controllers/jobTypeController');
const { ifAuthenticated, recruiter } = require('../middleware/authentication ');
const router = express.Router();


// job type routes
router.post('/jobtype/create',ifAuthenticated,recruiter,createJobType)
// display all job types
router.get('/jobtype/jobs',displayAllJobType)
// edit job type
router.put('/jobtype/edit/:type_id',ifAuthenticated,recruiter,updateJobType)
// delete job type
router.delete('/jobtype/delete/:type_id',ifAuthenticated,recruiter,deleteJobType)



module.exports = router;