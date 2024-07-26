import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY!,
  authDomain: "bloged-ebb76.firebaseapp.com",
  projectId: "bloged-ebb76",
  storageBucket: "bloged-ebb76.appspot.com",
  messagingSenderId: "795929117119",
  appId: "1:795929117119:web:19a98096522fde94dea10a",
  measurementId: "G-6MPYSV6NNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
