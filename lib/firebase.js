import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeCL2D314xvFbTuUUYknUzZ3SHh7ln9es",
  authDomain: "gift-card-demo-7c310.firebaseapp.com",
  projectId: "gift-card-demo-7c310",
  storageBucket: "gift-card-demo-7c310.firebasestorage.app",
  messagingSenderId: "205236516278",
  appId: "1:205236516278:web:6c3160cd532cab7cec3d17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
