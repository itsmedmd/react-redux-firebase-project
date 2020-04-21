import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDo2MgCeIJPkNSbEQM_fN1j65An9sMwWnE",
    authDomain: "dmd-react-redux-firebase.firebaseapp.com",
    databaseURL: "https://dmd-react-redux-firebase.firebaseio.com",
    projectId: "dmd-react-redux-firebase",
    storageBucket: "dmd-react-redux-firebase.appspot.com",
    messagingSenderId: "346280590774",
    appId: "1:346280590774:web:780162d3eb8a39ffb45517",
    measurementId: "G-NBM5ZVWEX2"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;