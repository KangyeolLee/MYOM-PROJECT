import serviceReducer from './serviceReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  services: serviceReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;