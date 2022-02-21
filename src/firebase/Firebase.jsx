import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCfGYlZYrT2AwipcHemc3gPVSx5UtEINo",
  authDomain: "jobportal-bc766.firebaseapp.com",
  projectId: "jobportal-bc766",
  storageBucket: "jobportal-bc766.appspot.com",
  messagingSenderId: "427743699282",
  appId: "1:427743699282:web:59347467a3b3ec84659a8b",
  measurementId: "G-9MT4P16Z39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;