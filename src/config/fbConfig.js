import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
	apiKey: "AIzaSyAsllc6_XjkUw5VXDDcbQhjDOWwCONoAjU",
	authDomain: "myom-89a5a.firebaseapp.com",
	databaseURL: "https://myom-89a5a.firebaseio.com",
	projectId: "myom-89a5a",
	storageBucket: "myom-89a5a.appspot.com",
	messagingSenderId: "743485078692",
	appId: "1:743485078692:web:72f1334c48a0f0d0"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

export {
  storage, firebase as default
}