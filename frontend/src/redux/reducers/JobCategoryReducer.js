// import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_RESET, JOB_LOAD_SUCCESS } from "../constants/jobConstant"

import { JOB_CATE_LOAD_FAIL, JOB_CATE_LOAD_REQUEST, JOB_CATE_LOAD_RESET, JOB_CATE_LOAD_SUCCESS } from "../constants/JobCategoryConstant"

export const loadJobTypeReducer = (state = { jobType: [] }, action) => {
    switch (action.type) {
        case JOB_CATE_LOAD_REQUEST:
            return {
                loading: true
            }
        case JOB_CATE_LOAD_SUCCESS:
            return {
                loading: false,
                jobType: action.payload.job_type
            }
        case JOB_CATE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_CATE_LOAD_RESET:
            return {
            }
        default:
            return state;
    }
}