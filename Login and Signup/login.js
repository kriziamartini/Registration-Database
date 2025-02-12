import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBa1e4Wn9Flsxc7dQjZdOLEJa2Yqcc9bxI",
  authDomain: "registration-with-database.firebaseapp.com",
  projectId: "registration-with-database",
  storageBucket: "registration-with-database.appspot.com",
  messagingSenderId: "446131508929",
  appId: "1:446131508929:web:e5faf79e81f930979d2640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const login = document.getElementById("login");
login.addEventListener("click", function (event) {
  event.preventDefault()

  // inputs
  const email = document.getElementById('login_email').value;
  const password = document.getElementById('login_password').value

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.location.href = "http://127.0.0.1:5500/Landing%20Page/index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
})