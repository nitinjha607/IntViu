
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { get } from "http";

const firebaseConfig = {
  apiKey: "AIzaSyD97xvgmHvkfYUv0EGahxfan3AHCHPOae4",
  authDomain: "intviu-c6880.firebaseapp.com",
  projectId: "intviu-c6880",
  storageBucket: "intviu-c6880.firebasestorage.app",
  messagingSenderId: "724338808840",
  appId: "1:724338808840:web:c307f4bac8316e868a19bd",
  measurementId: "G-C9KXXL0X5P"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);