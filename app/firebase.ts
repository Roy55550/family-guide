import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";
import { Firestore, getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAohQfW1PmgfAx1nZVZMm8mVRJ9USZ2MYk",
  authDomain: "family-guide-7d87e.firebaseapp.com",
  projectId: "family-guide-7d87e",
  storageBucket: "family-guide-7d87e.appspot.com",
  messagingSenderId: "722177267915",
  appId: "1:722177267915:web:70645b3b6e7272467de34e",
  measurementId: "G-E6WDTK0XL1"
};

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;
let db: Firestore | undefined;

function initFirebase() {
  if (typeof window !== 'undefined' && !getApps().length) {
    try {
      app = initializeApp(firebaseConfig);
      console.log("Firebase app initialized");
      analytics = getAnalytics(app);
      console.log("Firebase analytics initialized");
      db = getFirestore(app);
      console.log("Firestore initialized");
    } catch (error) {
      console.error("Error initializing Firebase:", error);
    }
  }
}

function getFirebaseComponents() {
  if (!app) initFirebase();
  return { 
    app, 
    db, 
    analytics, 
    logEvent: (analytics && firebaseLogEvent) || (() => {}), 
    doc: db ? doc : (() => {}), 
    setDoc: db ? setDoc : (() => Promise.resolve()) 
  };
}

export default getFirebaseComponents;