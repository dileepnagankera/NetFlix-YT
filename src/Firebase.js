// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdh2fKtfN9z2nJk1I59zLzZC-mq8WPR_Y",
  authDomain: "netflix-4d5da.firebaseapp.com",
  projectId: "netflix-4d5da",
  storageBucket: "netflix-4d5da.appspot.com",
  messagingSenderId: "681404630906",
  appId: "1:681404630906:web:3bd1df0f12c36f982538c3",
  measurementId: "G-9Z9FNYK6JM",
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

