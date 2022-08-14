// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOMWfDWKw5hgqhbWhM0bG7Qag5y0BYBiw",
    authDomain: "clone-e4fd5.firebaseapp.com",
    projectId: "clone-e4fd5",
    storageBucket: "clone-e4fd5.appspot.com",
    messagingSenderId: "1012569243789",
    appId: "1:1012569243789:web:caad49b0f72d008f14e2c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };