// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//auth y db importado por nosotros
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoeKWxEHsFr2UaHKIngbiKPJD4fQGlMB8",
  authDomain: "journal-vite-react.firebaseapp.com",
  projectId: "journal-vite-react",
  storageBucket: "journal-vite-react.appspot.com",
  messagingSenderId: "791025799463",
  appId: "1:791025799463:web:4cd6b0c65cc31f9682d902"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// exportamos firebaseapp con getAuth y firestore
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirestoreDB = getFirestore( FirebaseApp ); 

