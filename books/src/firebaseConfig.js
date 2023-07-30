import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
// import { getAuth } from 'firebase/authentication';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJlG63CO_RESLEa2LJsG9yOvGenb79eGM",
  authDomain: "books-19d2d.firebaseapp.com",
  projectId: "books-19d2d",
  storageBucket: "books-19d2d.appspot.com",
  messagingSenderId: "1019171676981",
  appId: "1:1019171676981:web:06904f78de983e8907227c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, db, storage };