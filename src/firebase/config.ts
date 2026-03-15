import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Replace these with your actual Firebase project config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSiG3WjsHMwth9hW8MNXACTJ5o_fJ4Vvk",
  authDomain: "mitisana-narocanje.firebaseapp.com",
  projectId: "mitisana-narocanje",
  storageBucket: "mitisana-narocanje.firebasestorage.app",
  messagingSenderId: "267426485832",
  appId: "1:267426485832:web:6483af4dadec017f896a7d",
  measurementId: "G-RRME6D3PM9"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
