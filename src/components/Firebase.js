// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdC-HQGd7ZecCkbGoIzgIxpwx6cWdFX80",
  authDomain: "fraser-website.firebaseapp.com",
  projectId: "fraser-website",
  storageBucket: "fraser-website.appspot.com",
  messagingSenderId: "722308919629",
  appId: "1:722308919629:web:0e421cdbd07d4dfad18704",
  measurementId: "G-GDZH79PTXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
 