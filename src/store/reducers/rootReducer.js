import serviceReducer from './serviceReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  services: serviceReducer
});

export default rootReducer;