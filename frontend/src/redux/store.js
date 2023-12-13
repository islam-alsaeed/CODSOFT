import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobTypeReducer } from './reducers/JobCategoryReducer';
import { loadJobReducer } from './reducers/jobReducer';
import { userLoginReducer, userLogoutReducer, userProfileReducer } from './reducers/userReducer';

// combine reducers
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  allJobType:loadJobTypeReducer,
  login: userLoginReducer,
  userProfile:userProfileReducer,
  logout:userLogoutReducer
});

// initial state
let initialState = {
  login:{
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  }
};
// middleware should be an array
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
