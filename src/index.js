// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// If you are using analytics, include the analytics module
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUal5qcJuU1rWJXml9eRh8rF5la79xMDM",
  authDomain: "fir-a708b.firebaseapp.com",
  projectId: "fir-a708b",
  storageBucket: "fir-a708b.appspot.com",
  messagingSenderId: "864337877034",
  appId: "1:864337877034:web:ddf31be90e30d7c7a70b53",
  measurementId: "G-JCPXHD7JLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Remove the following line if you're not using analytics
const analytics = getAnalytics(app);

console.log("Firebase is initializing");

const emailInput = document.getElementById("signup-email");
const passwordInput = document.getElementById("signup-password");
const errorMessage = document.getElementById("error-message");
const signbtn = document.getElementById("signup-btn");
const signinbtn = document.getElementById("signin-btn");
const auth = getAuth();
window.addEventListener('unhandledrejection', event => {
  console.error('Unhandled Promise Rejection:', event.reason);
});

signbtn.onclick = () => {
  console.log("button clicked");
  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user); 
    })
    .catch((error) => {
      console.error("Firebase authentication error:", error.code, error.message);
      errorMessage.innerHTML = error.message;
    });
};

signinbtn.onclick = () => {
  console.log("button clicked");
  var provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      var token = result.user.providerData[0].uid; 
      console.log(result.user);
    })
    .catch((error) => {
      console.log("Firebase authentication error:", error.code, error.message);
      errorMessage.innerHTML = error.message;
    });
};
