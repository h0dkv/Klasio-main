// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy8BjAFvptcamc_-G0ejcrMM5BJKPOkfw",
  authDomain: "klasio-80ff8.firebaseapp.com",
  projectId: "klasio-80ff8",
  storageBucket: "klasio-80ff8.firebasestorage.app",
  messagingSenderId: "472668431070",
  appId: "1:472668431070:web:5ab5ada5c40c3017bb184f",
  measurementId: "G-83LB7K29BN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
