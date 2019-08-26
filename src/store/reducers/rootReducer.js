import serviceReducer from './serviceReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import dashboardReducer from './dashboardReducer';
// import firebaseReducer from 'react-redux-firebase/lib/reducer'
// import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  services: serviceReducer,
  dashboard: dashboardReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;