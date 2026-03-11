import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDk__TyA3-eNGEQ0XPpxoccJscGbgfmG9Y",
  databaseURL: "https://fir-database-3dc7c-default-rtdb.firebaseio.com",
  authDomain: "fir-database-3dc7c.firebaseapp.com",
  projectId: "fir-database-3dc7c",
  storageBucket: "fir-database-3dc7c.firebasestorage.app",
  messagingSenderId: "1047229883065",
  appId: "1:1047229883065:web:879187e3dec13e312ef168",
  measurementId: "G-13T87VCMMF"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);