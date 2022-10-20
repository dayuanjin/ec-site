import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxTWsbgn9CtQau3PY0GH_KbLMDSWMXh1s",
  authDomain: "ec-site-c211a.firebaseapp.com",
  projectId: "ec-site-c211a",
  storageBucket: "ec-site-c211a.appspot.com",
  messagingSenderId: "108635433759",
  appId: "1:108635433759:web:ae033ec9bfdd3b63ac1e2a",
  measurementId: "G-FR5MQ63CMM",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
