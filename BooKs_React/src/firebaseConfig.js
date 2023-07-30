import { initializeApp } from "firebase/app";
import { getsStorage } from "firebase/storage";
import { getsFirestore } from "firebase/firestore";
//import { getAuth } from 'firebase/authentication';



const firebaseConfig = {
    apiKey: "AIzaSyDG1seNDtcFixEvEc1OLkzXo3G2EOk4g5w",
    authDomain: "books-58480.firebaseapp.com",
    projectId: "books-58480",
    storageBucket: "books-58480.appspot.com",
    messagingSenderId: "790048667707",
    appId: "1:790048667707:web:bdca46f090e2089cab041e"
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const storage = geStorage(app);
const db = getFirestore(app);

export { app, storage, db };