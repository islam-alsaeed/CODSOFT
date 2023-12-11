import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_RESET, JOB_LOAD_SUCCESS } from "../constants/jobConstant"

export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return {
                loading: true
            }
        case JOB_LOAD_SUCCESS:
            return {
                success: action.payload.success,
                loading: false,
                count: action.payload.count,
                pageNumber: action.payload.page,
                pages: action.payload.pages,
                uniqueLocation: action.payload.uniqueLocation,
                jobs: action.payload.jobs
            }
        case JOB_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case JOB_LOAD_RESET:
            return {
            }
        default:
            return state;
    }
}