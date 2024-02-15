// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("Inside The Page", import.meta.env.VITE_PASS);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDeJPujRsdg_UqrwAJBz1v3xC0vczTAWc",
  authDomain: "react-dragon-news-auth-ddac5.firebaseapp.com",
  projectId: "react-dragon-news-auth-ddac5",
  storageBucket: "react-dragon-news-auth-ddac5.appspot.com",
  messagingSenderId: "535718030391",
  appId: "1:535718030391:web:d8d577e9b9e3a887a2a3b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
