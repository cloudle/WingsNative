import { createStore, combineReducers, applyMiddleware } from 'redux';

import applicationReducer from './reducer/applicationReducer';
import projectReducer from './reducer/projectReducer';

export default createStore(
  combineReducers({
    app: applicationReducer,
    project: projectReducer,
  })
);