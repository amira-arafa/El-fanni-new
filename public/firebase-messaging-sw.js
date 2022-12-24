importScripts("https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDntFmJ2zyxaFkzmH-TnR4nTUSNNNpYB1Y",
  authDomain: "leadx-9cf70.firebaseapp.com",
  projectId: "leadx-9cf70",
  storageBucket: "leadx-9cf70.appspot.com",
  messagingSenderId: "144710243215",
  appId: "1:144710243215:web:5d8d0315941dea51a8b1fa",
  measurementId: "G-Y8B3NT5Q7W",
});

const messaging = firebase.messaging();