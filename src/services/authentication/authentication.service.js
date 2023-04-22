import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBc4sphssedxRcLqdS15BFIWPMNiJ4hCno",
  authDomain: "mealstogo-1cf0b.firebaseapp.com",
  projectId: "mealstogo-1cf0b",
  storageBucket: "mealstogo-1cf0b.appspot.com",
  messagingSenderId: "20431761922",
  appId: "1:20431761922:web:e2849a45d339561e152d1b",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
