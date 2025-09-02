// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDODV8hhxAqje3IUZPBgvSH8C2A_qRW1Ww",
  authDomain: "estate-sphare.firebaseapp.com",
  projectId: "estate-sphare",
  storageBucket: "estate-sphare.firebasestorage.app",
  messagingSenderId: "875334940567",
  appId: "1:875334940567:web:6bde27f168cddac3edb6d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;