import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALmkwZMtzn6cM1AyJ0W8KIvEVFB-u1hD8',
  authDomain: 'my-social-profile-pet-project.firebaseapp.com',
  projectId: 'my-social-profile-pet-project',
  storageBucket: 'my-social-profile-pet-project.appspot.com',
  messagingSenderId: '395545269934',
  appId: '1:395545269934:web:f7f2e7dae48895e2447f3f',
  measurementId: 'G-NZQZQ6F6EY',
  databaseURL: 'https://my-social-profile-pet-project.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
