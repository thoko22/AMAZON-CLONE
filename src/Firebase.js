import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-Ve-iwNFfj4phC2SCSX5dFn2jWaWmmRY",
    authDomain: "thoko--clone.firebaseapp.com",
    projectId: "thoko--clone",
    storageBucket: "thoko--clone.appspot.com",
    messagingSenderId: "115238151945",
    appId: "1:115238151945:web:0ff7d521fcca4ba405d5d8",
    measurementId: "G-ZY2Y5SJT55"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};