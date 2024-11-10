// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqBmVG3-vNOs765m3DI2JZnbDnky6Ermo",
  authDomain: "private-route-cfaa8.firebaseapp.com",
  projectId: "private-route-cfaa8",
  storageBucket: "private-route-cfaa8.firebasestorage.app",
  messagingSenderId: "1016428906099",
  appId: "1:1016428906099:web:c015257038868d7649cc06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
