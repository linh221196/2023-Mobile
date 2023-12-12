// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPEA8CqYi6JAvtrCVKeza4RRG1LUQ-amY",
  authDomain: "project1-signin.firebaseapp.com",
  projectId: "project1-signin",
  storageBucket: "project1-signin.appspot.com",
  messagingSenderId: "400577180280",
  appId: "1:400577180280:web:983927841381c1cb38738d"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
let firebaseAuth;
try {
  // Try to get the existing auth instance
  firebaseAuth = getAuth(firebaseApp);
} catch (error) {
  // If it doesn't exist, initialize it
  firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}
export const firebaseStore = getFirestore(firebaseApp)
export {firebaseAuth}