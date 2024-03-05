// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBb92RbAQGG5JSFl4A2DA0K120qGZJ0G_o",
    authDomain: "clone-ee36f.firebaseapp.com",
    projectId: "clone-ee36f",
    storageBucket: "clone-ee36f.appspot.com",
    messagingSenderId: "58138685029",
    appId: "1:58138685029:web:f138279ed17271c783608c",
    measurementId: "G-J3DBJ5WMX0"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };