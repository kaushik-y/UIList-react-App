// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvnz8KFavIKTYzLy0qh8W98WTT-KEl9K0",
  authDomain: "demoapis-f3c1d.firebaseapp.com",
  databaseURL: "https://demoapis-f3c1d-default-rtdb.firebaseio.com",
  projectId: "demoapis-f3c1d",
  storageBucket: "demoapis-f3c1d.appspot.com",
  messagingSenderId: "559657430007",
  appId: "1:559657430007:web:e9c3d92e497e595e819cf2",
  measurementId: "G-PB536489Y3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// var db = app.firestore();
const db = getFirestore(app);

export default db;
