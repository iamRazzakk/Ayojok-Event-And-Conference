// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiLbrM-YdDzRyjiRjnkZFP5Q4F4lVvRsI",
    authDomain: "ayojok-event-and-conference.firebaseapp.com",
    projectId: "ayojok-event-and-conference",
    storageBucket: "ayojok-event-and-conference.appspot.com",
    messagingSenderId: "502149941876",
    appId: "1:502149941876:web:b06dc838c2b9ce6ace1f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
