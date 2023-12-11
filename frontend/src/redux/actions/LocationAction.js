// Assuming you have a LocationAction.js file

import { JOB_LOCATION_FILTER } from "../redux/constants/jobConstant";

export const LocationAction = (location) => (dispatch) => {
    dispatch({ type: JOB_LOCATION_FILTER, payload: { location } });
};
