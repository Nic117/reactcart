import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc5n_xaKKFS9IY7Un5WZgyQtCM_LfLrWs",
  authDomain: "cart-main.firebaseapp.com",
  projectId: "cart-main",
  storageBucket: "cart-main.appspot.com",
  messagingSenderId: "782739672740",
  appId: "1:782739672740:web:e3bc74d5c7220479f86031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
