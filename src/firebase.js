import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCosB67DNZ9GGTYen2x2l-T7aEsmqAmT8E",
  authDomain: "todoapp-5d64f.firebaseapp.com",
  projectId: "todoapp-5d64f",
  storageBucket: "todoapp-5d64f.appspot.com",
  messagingSenderId: "638340349037",
  appId: "1:638340349037:web:867cbd090745bd53125364",
  measurementId: "G-1RQ14V0MBZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
