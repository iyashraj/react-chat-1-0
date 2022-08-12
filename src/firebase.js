// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5TQOoG57F--pQV6DHZw8TxobpbT_0pXs",
  authDomain: "chat-app-e852e.firebaseapp.com",
  projectId: "chat-app-e852e",
  storageBucket: "chat-app-e852e.appspot.com",
  messagingSenderId: "818873216795",
  appId: "1:818873216795:web:aeb7b66c86a963b88b6dbe",
  measurementId: "G-G52RT3G5XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)