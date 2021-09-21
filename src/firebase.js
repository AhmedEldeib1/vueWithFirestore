import * as firebase from "firebase/app";
import { getFirestore, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDwT_J2k_DDh_bPCE6nzZaxumIjlIvRpQw",
  authDomain: "newone-6fcdf.firebaseapp.com",
  projectId: "newone-6fcdf",
  storageBucket: "newone-6fcdf.appspot.com",
  messagingSenderId: "713038654653",
  appId: "1:713038654653:web:4f4952871b8b8c87b81bd4",
  measurementId: "G-TWH47LMQE2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const thecollect = collection(db, "books");

export { thecollect };
