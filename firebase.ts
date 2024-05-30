import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

interface firebaseConfigProps {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
  storageBucket: string | undefined;
  messagingSenderId: string | undefined;
  appId: string | undefined;
}

// Your web app's Firebase configuration
const firebaseConfig: firebaseConfigProps = {
  apiKey: "AIzaSyBDXp0ATCCkZ0qsQLCdhJGf8k3VLw6u3_0",
  authDomain: "eyex-cbc4b.firebaseapp.com",
  projectId: "eyex-cbc4b",
  storageBucket: "eyex-cbc4b.appspot.com",
  messagingSenderId: "805406332145",
  appId: "1:805406332145:web:639bdd360deadc7b088550",
  // apiKey: process.env.GOOGLE_API_KEY,
  // authDomain: process.env.GOOGLE_AUTH_DOMAIN,
  // projectId: process.env.GOOGLE_PROJECT_ID,
  // storageBucket: process.env.GOOGLE_STORAGE_BUCKET,
  // messagingSenderId: process.env.GOOGLE_MESSAGING_SENDER_ID,
  // appId: process.env.GOOGLE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const storage = firebaseApp.storage();

export { db, auth, storage, firebaseApp };
