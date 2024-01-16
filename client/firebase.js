// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from  "firebase/firestore"
import { getStorage } from 'firebase/storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Ghva_tv7e6yxjPdqP1t5CBSwjNFOp8M",
  authDomain: "snap-calorie-86d29.firebaseapp.com",
  projectId: "snap-calorie-86d29",
  storageBucket: "snap-calorie-86d29.appspot.com",
  messagingSenderId: "984838005884",
  appId: "1:984838005884:web:d87f79e77711229613d5f9",
  measurementId: "G-4ZL7GYY6JE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);