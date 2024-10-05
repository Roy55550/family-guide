import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyAohQfW1PmgfAx1nZVZMm8mVRJ9USZ2MYk",
  authDomain: "family-guide-7d87e.firebaseapp.com",
  projectId: "family-guide-7d87e",
  storageBucket: "family-guide-7d87e.appspot.com",
  messagingSenderId: "722177267915",
  appId: "1:722177267915:web:70645b3b6e7272467de34e",
  measurementId: "G-E6WDTK0XL1"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, db, analytics as getAnalytics };