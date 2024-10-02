// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAohQfW1PmgfAx1nZVZMm8mVRJ9USZ2MYk",
  authDomain: "family-guide-7d87e.firebaseapp.com",
  projectId: "family-guide-7d87e",
  storageBucket: "family-guide-7d87e.appspot.com",
  messagingSenderId: "722177267915",
  appId: "1:722177267915:web:70645b3b6e7272467de34e",
  measurementId: "G-E6WDTK0XL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };