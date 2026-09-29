import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDummyKeyMaindsteelAutomotive2026',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'maindsteel-automotive.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'maindsteel-automotive',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'maindsteel-automotive.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '363828849680',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:363828849680:web:8942a1bc2d89e'
};

// Initialize Firebase App singleton
export const app: FirebaseApp = getApps().length === 0 
  ? initializeApp(firebaseConfig) 
  : getApp();

// Export Firebase Authentication, Firestore Database, and Firebase Storage
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

export default app;
