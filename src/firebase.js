// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6otBuTYH1hoez8yky1Yaz4bcQqfHFMMQ",
  authDomain: "bablyon-108a4.firebaseapp.com",
  projectId: "bablyon-108a4",
  storageBucket: "bablyon-108a4.appspot.com",
  messagingSenderId: "232639022659",
  appId: "1:232639022659:web:17bf3d776b37aa32f0f6f6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)