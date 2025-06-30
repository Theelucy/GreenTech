// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import {
  getFirestore,
  query,
  where,
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmGmu8XArmqQr0NwveVein2zaCFnx1kx8",
  authDomain: "TerraBloom-6f0d6.firebaseapp.com",
  databaseURL: "https://TerraBloom-6f0d6-default-rtdb.firebaseio.com",
  projectId: "TerraBloom-6f0d6",
  storageBucket: "TerraBloom-6f0d6.appspot.com",
  messagingSenderId: "969297735735",
  appId: "1:969297735735:web:463b0b963cfd4d3a54cfb2",
  measurementId: "G-776RF8FZQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!recaptchaResponse) {
    document.getElementById('responseMessage').textContent = "Please complete the reCAPTCHA";
    return;
}

try {
    // Query Firestore for the user document with the matching username
    const q = query(collection(firestore, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      responseMessage.textContent = "Invalid username or password.";
      return;
    }

    // Extract the user's email from the document data
    const userData = querySnapshot.docs[0].data();
    const email = userData.email;

    // Sign in with Firebase Auth using the retrieved email and provided password
    await signInWithEmailAndPassword(auth, email, password);

    // Save user data to local storage
    localStorage.setItem('username', username);

    responseMessage.textContent = 'Login successful! Redirecting...';
    window.location.href = 'home.html';
  } catch (error) {
    responseMessage.textContent = "Error: " + error.message;
  }
});