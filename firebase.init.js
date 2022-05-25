// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.RECT_APP_API_KEY,
  authDomain: process.env.RECT_APP_AUTH_DOMAIN,
  projectId: process.env.RECT_APP_APP_ID,
  storageBucket: process.env.RECT_APP_PROJECT_ID,
  appId: process.env.RECT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.RECT_APP_MESSAGING_SENDER_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;