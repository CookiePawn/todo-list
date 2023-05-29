// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0abcmCgCdZ7mTlG9XfAPtxWe3yxuVnaM",
  authDomain: "cookiepawn.firebaseapp.com",
  projectId: "cookiepawn",
  storageBucket: "cookiepawn.appspot.com",
  messagingSenderId: "50708141166",
  appId: "1:50708141166:web:5d47d7eb73ac82e1a5827f",
  measurementId: "G-CPDTK9PS1H"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);


export {db}   