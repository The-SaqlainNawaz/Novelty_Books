// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAviAJLJK8VXOReiABfNs6ZI6nV2f1yjm0",
  authDomain: "fir-practice-36cb0.firebaseapp.com",
  projectId: "fir-practice-36cb0",
  storageBucket: "fir-practice-36cb0.appspot.com",
  messagingSenderId: "798766376264",
  appId: "1:798766376264:web:ae9773a41020ce535bbf7d",
  measurementId: "G-YXYH8Z0DSW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
