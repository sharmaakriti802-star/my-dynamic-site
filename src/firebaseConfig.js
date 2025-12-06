import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 👇 paste your real config from Firebase here
const firebaseConfig = {
  apiKey: "AIzaSyA3vl6DHepSFe_yFUdmZoolEEw2lvFIRIw",
  authDomain: "whizzystack-dynamic.firebaseapp.com",
  projectId: "whizzystack-dynamic",
  storageBucket: "whizzystack-dynamic.firebasestorage.app",
  messagingSenderId: "813778351264",
  appId: "1:813778351264:web:1c6eb129f32e6e572545c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
