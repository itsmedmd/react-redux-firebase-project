// main stuff
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// other imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore,reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, isLoaded, getFirebase } from 'react-redux-firebase';

// created by me
import firebase from './config/firebaseConfig';
import rootReducer from './store/reducers/rootReducer';

const middleware = [ thunk.withExtraArgument({getFirebase, getFirestore}) ];

// create store
const store = createStore (
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(firebase) // <- needed if using firestore
  )
);

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
}

/// react-redux-firebase props for ReactReduxFirebaseProvider HOC
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

// checks user authentication status before loading content
function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
