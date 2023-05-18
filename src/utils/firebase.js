// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnohGmEaakpr06al3A9XJhpGtp3k6jWts",
  authDomain: "blogit-4e99f.firebaseapp.com",
  projectId: "blogit-4e99f",
  storageBucket: "blogit-4e99f.appspot.com",
  messagingSenderId: "422462204029",
  appId: "1:422462204029:web:b9db4a257240da2121a914",
  measurementId: "G-EY9R593FJJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const signUpWithEmailAndPassword = async (email, password) => {
  const authService = getAuth();
  const userCredentials = await createUserWithEmailAndPassword(
    authService,
    email,
    password
  );
  console.log(userCredentials);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  const authService = getAuth();
  return signInWithEmailAndPassword(authService, email, password);
};

export const signInWithFacebook = async () => {
  const authService = getAuth();
  const provider = new FacebookAuthProvider();
  const credential = await signInWithPopup(authService, provider);

  return {
    id: credential.user.uid,
    displayName: credential.user.displayName,
    phoneNumber: credential.user.phoneNumber,
    email: credential.user.email,
    photoURL: credential.user.photoURL,
    emailVerified: credential.user.emailVerified,
  };
};

export const signInUserWithGoogle = async () => {
  const authService = getAuth();
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(authService, provider);

  return {
    id: credential.user.uid,
    displayName: credential.user.displayName,
    phoneNumber: credential.user.phoneNumber,
    email: credential.user.email,
    photoURL: credential.user.photoURL,
    emailVerified: credential.user.emailVerified,
  };
};

export const signInWithGithub = async () => {
  const authService = getAuth();
  const provider = new GithubAuthProvider();
  const credential = await signInWithPopup(authService, provider);

  return {
    id: credential.user.uid,
    displayName: credential.user.displayName,
    phoneNumber: credential.user.phoneNumber,
    email: credential.user.email,
    photoURL: credential.user.photoURL,
    emailVerified: credential.user.emailVerified,
  };
};