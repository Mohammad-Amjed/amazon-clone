import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArEDnuXQPHbkQNUGOveoIOIGtOibjuaXc",
  authDomain: "clone-d9893.firebaseapp.com",
  databaseURL: "https://clone-d9893.firebaseio.com",
  projectId: "clone-d9893",
  storageBucket: "clone-d9893.appspot.com",
  messagingSenderId: "43912791650",
  appId: "1:43912791650:web:3b742c7bedb892c6fdf33b",
  measurementId: "G-9F851WJ8DR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { db, auth, timestamp };
