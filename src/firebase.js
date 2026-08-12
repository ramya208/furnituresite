import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkt5IXqYAx1Kfs8WOslxdSZcb6BP-V4qc",
  authDomain: "furnituresite-65454.firebaseapp.com",
  projectId: "furnituresite-65454",
  storageBucket: "furnituresite-65454.firebasestorage.app",
  messagingSenderId: "77764906049",
  appId: "1:77764906049:web:5f49b5f7efddb430c7cac0",
  measurementId: "G-WXRX5C0202"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);