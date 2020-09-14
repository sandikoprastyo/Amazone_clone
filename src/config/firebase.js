import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTTDK4vkNR3nemXcapwq_g5yF9sjeIbSE",
  authDomain: "clone-9c6c6.firebaseapp.com",
  databaseURL: "https://clone-9c6c6.firebaseio.com",
  projectId: "clone-9c6c6",
  storageBucket: "clone-9c6c6.appspot.com",
  messagingSenderId: "249031550344",
  appId: "1:249031550344:web:493a438b21452ee90c463d",
  measurementId: "G-SBV49KRN6Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//db firestore dan auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
