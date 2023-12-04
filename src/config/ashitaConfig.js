// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD25pLTbUcnHfAZruzFUj6lbWBSAo_Eoc",
  authDomain: "ashita-e-no-tobira.firebaseapp.com",
  projectId: "ashita-e-no-tobira",
  storageBucket: "ashita-e-no-tobira.appspot.com",
  messagingSenderId: "309681260290",
  appId: "1:309681260290:web:8e82efd78ea10ff2d9641b",
};

const app = initializeApp(firebaseConfig);

export const ashitaProducts = getFirestore(app);