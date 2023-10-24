// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtL8mJ44du5CzgeBaWX2iL6Vt0WRcyMIA",
  authDomain: "car-project-react.firebaseapp.com",
  projectId: "car-project-react",
  storageBucket: "car-project-react.appspot.com",
  messagingSenderId: "981689221910",
  appId: "1:981689221910:web:5f9a06cb8171d43a374637",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)