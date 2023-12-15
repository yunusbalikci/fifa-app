import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";
import { Auth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBy8ulRk1y12K0fwbCF-WZXTNlezE931OM",
  authDomain: "fifa-app-4ca09.firebaseapp.com",
  projectId: "fifa-app-4ca09",
  storageBucket: "fifa-app-4ca09.appspot.com",
  messagingSenderId: "193129080308",
  appId: "1:193129080308:web:5763d644e85a5049dec5a1",
  measurementId: "G-5SVJCYB8ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;