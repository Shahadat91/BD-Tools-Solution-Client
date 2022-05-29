// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAFGQ6XFmmPh0N4hImF6-A0R8KyTd5zR1U",
  authDomain: "bd-tools-solution.firebaseapp.com",
  projectId: "bd-tools-solution",
  storageBucket: "bd-tools-solution.appspot.com",
  messagingSenderId: "1053276500611",
  appId: "1:1053276500611:web:bad59d6e03ced9b48d61b6"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;