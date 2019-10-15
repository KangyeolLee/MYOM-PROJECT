import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
  apiKey: "AIzaSyDcwIw85jFr_FWzuom76NTSliKyzEvlfI8",
  authDomain: "myom-d144a.firebaseapp.com",
  databaseURL: "https://myom-d144a.firebaseio.com",
  projectId: "myom-d144a",
  storageBucket: "myom-d144a.appspot.com",
  messagingSenderId: "72661219637",
  appId: "1:72661219637:web:cca11ad3254ace260cf47c",
  measurementId: "G-X02WGQ4BV5"
};
	// apiKey: "AIzaSyAsllc6_XjkUw5VXDDcbQhjDOWwCONoAjU",
	// authDomain: "myom-89a5a.firebaseapp.com",
	// databaseURL: "https://myom-89a5a.firebaseio.com",
	// projectId: "myom-89a5a",
	// storageBucket: "myom-89a5a.appspot.com",
	// messagingSenderId: "743485078692",
	// appId: "1:743485078692:web:72f1334c48a0f0d0"

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

export {
  storage, firebase as default
}