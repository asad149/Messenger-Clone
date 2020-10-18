import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD16NG9PcBOiYd6uz2CSBjUL3JYp669NN8",
  authDomain: "messegner-clone.firebaseapp.com",
  databaseURL: "https://messegner-clone.firebaseio.com",
  projectId: "messegner-clone",
  storageBucket: "messegner-clone.appspot.com",
  messagingSenderId: "497445749339",
  appId: "1:497445749339:web:5574dbc331abbbbc36357e",
  measurementId: "G-9RRR9F2Y86",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
