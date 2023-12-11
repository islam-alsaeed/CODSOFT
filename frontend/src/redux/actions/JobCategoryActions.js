import { JOB_CATE_LOAD_FAIL, JOB_CATE_LOAD_REQUEST, JOB_CATE_LOAD_SUCCESS } from "../constants/JobCategoryConstant";
import axios from "axios";

export const jobCateLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_CATE_LOAD_REQUEST });
    try {
        const { data } = await axios.get('/jobtype/jobs')
        dispatch({
            type: JOB_CATE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_CATE_LOAD_FAIL,
            payload: error.response.data.error
        });

    }
}