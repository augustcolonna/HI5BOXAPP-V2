// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1XvVC1x65uHYynAdYkKEulyPVDdar_Yc",
  authDomain: "hi5-box-v2.firebaseapp.com",
  projectId: "hi5-box-v2",
  storageBucket: "hi5-box-v2.appspot.com",
  messagingSenderId: "883402648780",
  appId: "1:883402648780:web:81c7325c049123ae80a669",
  measurementId: "G-M3V6WEM9EY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
