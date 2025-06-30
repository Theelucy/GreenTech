// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmGmu8XArmqQr0NwveVein2zaCFnx1kx8",
  authDomain: "TerraBloom-6f0d6.firebaseapp.com",
  databaseURL: "https://TerraBloom-6f0d6-default-rtdb.firebaseio.com",
  projectId: "TerraBloom-6f0d6",
  storageBucket: "TerraBloom-6f0d6.appspot.com",
  messagingSenderId: "969297735735",
  appId: "1:969297735735:web:463b0b963cfd4d3a54cfb2",
  measurementId: "G-776RF8FZQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Handling form submission
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Account created successfully");
        window.location.href = "index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorMessage}`);
      });
});
