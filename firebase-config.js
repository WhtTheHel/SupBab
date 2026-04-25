import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDlM0PNLlrUejkgW1774fjZDBaDJZT4lDM", 
  authDomain: "qr-scan-f3702.firebaseapp.com",
  projectId: "qr-scan-f3702",
  storageBucket: "qr-scan-f3702.firebasestorage.app",
  messagingSenderId: "149512346733",
  appId: "1:149512346733:web:150bf0231cfb79519f3364"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
