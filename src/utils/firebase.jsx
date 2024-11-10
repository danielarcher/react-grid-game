// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAN0G3FfDvMBrw5S5jL3NTUPcsWwghp1u0",
    authDomain: "grid-game-f87de.firebaseapp.com",
    projectId: "grid-game-f87de",
    storageBucket: "grid-game-f87de.firebasestorage.app",
    messagingSenderId: "628144418081",
    appId: "1:628144418081:web:aa6e4ac5bb0313cab5a260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);