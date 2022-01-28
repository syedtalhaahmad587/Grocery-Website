// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
      GoogleAuthProvider,
      FacebookAuthProvider,
     } from "firebase/auth";
      import { getDatabase, 
        set, 
        push,  
        remove, 
        ref, 
        onValue, 
        onChildAdded, 
        child
        } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkmALSe9G37IYcHeRNZNjHEDKPzY59ndw",
  authDomain: "grocery-website-d3fb1.firebaseapp.com",
  projectId: "grocery-website-d3fb1",
  storageBucket: "grocery-website-d3fb1.appspot.com",
  messagingSenderId: "814424698140",
  appId: "1:814424698140:web:092faa1c4f139402fcded9",
  measurementId: "G-8JESXKKWSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, 
         db,
    GoogleAuthProvider, 
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    set, 
    push,  
    remove, 
    ref, 
    onValue, 
    onChildAdded, 
    child
};

