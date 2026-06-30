// js/firebase-config.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDw5KNM94-PdM-kPFi4loJggjJT8CZXHSU",
  authDomain: "tomistudio.firebaseapp.com",
  projectId: "tomistudio",
  storageBucket: "tomistudio.firebasestorage.app",
  messagingSenderId: "895652128050",
  appId: "1:895652128050:web:c55b0b607fdf4b35d9232b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
