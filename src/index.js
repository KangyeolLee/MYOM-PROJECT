import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance, getFirestore, reduxFirestore  } from 'redux-firestore';
import fbConfig from './config/fbConfig';
import rootReducer from './store/reducers/rootReducer';

// import { createFirestoreInstance, getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
// import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
// import firebase from 'firebase/app';

// import 'firebase/firestore';
// import 'firebase/auth';

// const store= createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true})
//   )
// );

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
}

const middleware = [
  thunk.withExtraArgument({ getFirestore }),
]

// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   firestore: firestoreReducer
// })

const store = createStore(rootReducer,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig)
  ));

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
