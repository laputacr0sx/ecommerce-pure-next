import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: "fsse2406-ecommerce-project.appspot.com",
  messagingSenderId: "745537381443",
  appId: "1:745537381443:web:830b4947a14e59e51f60f6",
  measurementId: "G-EXV67P2D9T",
};
