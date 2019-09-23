import serviceReducer from './serviceReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import dashboardReducer from './dashboardReducer';
import postReducer from './postReducer';
import chatReducer from './chatReducer';
import editorReducer from './editorReducer';
// import firebaseReducer from 'react-redux-firebase/lib/reducer'
// import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  services: serviceReducer,
  posts: postReducer,
  chats: chatReducer,
  editors: editorReducer,
  dashboard: dashboardReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;