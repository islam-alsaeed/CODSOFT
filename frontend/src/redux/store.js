import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobTypeReducer } from './reducers/JobCategoryReducer';
import { loadJobReducer } from './reducers/jobReducer';

// combine reducers
const reducer = combineReducers({
  loadJobs: loadJobReducer,
  allJobType:loadJobTypeReducer
});

// initial state
let initialState = {};
// middleware should be an array
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
