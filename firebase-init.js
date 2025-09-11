// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js';

const firebaseConfig = {
      apiKey: "AIzaSyBoGCz-vsed4wS-X-W164cJ961q0U9nY7Y",
      authDomain: "amalmacpal-6b96e.firebaseapp.com",
      projectId: "amalmacpal-6b96e",
      storageBucket: "amalmacpal-6b96e.firebasestorage.app",
      messagingSenderId: "964816499138",
      appId: "1:964816499138:web:8b11c3293304bb92c5e65b",
      measurementId: "G-BX765JPW1J"
    };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
