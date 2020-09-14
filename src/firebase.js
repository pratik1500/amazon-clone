import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7Zsp68VckNpz4R934ndnYHC6Beu5vFJM",
  authDomain: "clone-8b780.firebaseapp.com",
  databaseURL: "https://clone-8b780.firebaseio.com",
  projectId: "clone-8b780",
  storageBucket: "clone-8b780.appspot.com",
  messagingSenderId: "76701303561",
  appId: "1:76701303561:web:153bce65e04f9a31b589d8",
  measurementId: "G-7H82F5TC28",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
