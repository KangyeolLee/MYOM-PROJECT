import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import fbConfig from './config/fbConfig';

import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// const store= createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true})
//   )
// );

// store.firebaseAuthIsReady.then(() => {
//   ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//   serviceWorker.unregister();
// })

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
