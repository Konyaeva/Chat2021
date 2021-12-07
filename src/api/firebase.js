import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKqb3PYoyC5eravAkSWaZtDhlzHVipbX4",
  authDomain: "gb4-update.firebaseapp.com",
  databaseURL:
    "https://gb4-update-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb4-update",
  storageBucket: "gb4-update.appspot.com",
  messagingSenderId: "41387571236",
  appId: "1:41387571236:web:2ad9649a64ea01b0c4c0b1",
  measurementId: "G-38E5ZTVKE1",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();
