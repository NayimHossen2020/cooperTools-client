// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCTKlByOqRul70dQ1x5pKwTndsX02uO3Q",
  authDomain: "tool-manufacturer-app.firebaseapp.com",
  projectId: "tool-manufacturer-app",
  storageBucket: "tool-manufacturer-app.appspot.com",
  messagingSenderId: "565729150014",
  appId: "1:565729150014:web:b3df553efefa6e023b7d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;