// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApQs6mFXmoDYi2JIvJSjHcBNAWH0bHRaU",
  authDomain: "fruitwatchout.firebaseapp.com",
  databaseURL: "https://fruitwatchout-default-rtdb.firebaseio.com",
  projectId: "fruitwatchout",
  storageBucket: "fruitwatchout.appspot.com",
  messagingSenderId: "723686244334",
  appId: "1:723686244334:web:ecaef0c20d8e99e808d8ff",
  measurementId: "G-TNNFVRMVWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Get a non-default Storage bucket
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://fruitwatchout.appspot.com");