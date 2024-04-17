// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import 'dotenv/config'
// require('dotenv').config()
const firebaseConfig = {
  apiKey: "AIzaSyA6WshwhDnx6xa49xfEJtbD1bupPkHtW6c",
  authDomain: "rendom-try-app.firebaseapp.com",
  projectId: "rendom-try-app",
  storageBucket: "rendom-try-app.appspot.com",
  messagingSenderId: "1001670023756",
  appId: "1:1001670023756:web:572d84dab857a6d3a032e9",
  measurementId: "G-Z4XY70YY2X"
};
// console.log(process.env.REACT_APP_FIREBASE_API_KEY);

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
//   };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);