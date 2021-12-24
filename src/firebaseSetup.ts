// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFJgfe5qCsz7z9Hcyn1AG4eeIlHL9S8mk",
  authDomain: "gooddoer-866b6.firebaseapp.com",
  projectId: "gooddoer-866b6",
  storageBucket: "gooddoer-866b6.appspot.com",
  messagingSenderId: "814437202725",
  appId: "1:814437202725:web:6931797894edfd5bc078cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
