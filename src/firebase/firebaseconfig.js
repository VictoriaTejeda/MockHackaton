import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWRO0fqnmwk2LlyQfX-3p8HndpYNPgAjI",
  authDomain: "mocktalent-fest.firebaseapp.com",
  projectId: "mocktalent-fest",
  storageBucket: "mocktalent-fest.appspot.com",
  messagingSenderId: "226871619880",
  appId: "1:226871619880:web:167614caf5dd374bd7a01d",
  measurementId: "G-13VG122HX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth, signInWithEmailAndPassword, onAuthStateChanged,  signOut
}
