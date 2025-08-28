  // src/firebase.js
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  const firebaseConfig = {
  apiKey: "AIzaSyD3S75dvd4oc8RSgdgo5rX5B_TLoEqCm8s",
  authDomain: "smart-tutor-51b33.firebaseapp.com",
  databaseURL: "https://smart-tutor-51b33-default-rtdb.firebaseio.com",
  projectId: "smart-tutor-51b33",
  storageBucket: "smart-tutor-51b33.firebasestorage.app",
  messagingSenderId: "431452852107",
  appId: "1:431452852107:web:6bd3efe98afdb5df44a98e",
  measurementId: "G-4KYW0SEDDY"
};

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { app, auth, db };
