// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js';
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
const storage = getStorage(app, "gs://fruitwatchout.appspot.com");

export { storage }
