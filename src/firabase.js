// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhSfw71viRn_wU6Dg9PtMuteA--meTtE8",
    authDomain: "apple-clone-334417.firebaseapp.com",
    projectId: "apple-clone-334417",
    storageBucket: "apple-clone-334417.appspot.com",
    messagingSenderId: "648932187573",
    appId: "1:648932187573:web:ad06438193e82c25df4dfc"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };