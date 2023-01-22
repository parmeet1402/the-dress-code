import { initializeApp, getApp, getApps } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = app ? getFirestore() : null;

export const getAllCreators = async () => {
  const creatorsColRef = collection(db, "creators");
  try {
    const querySnapshot = await getDocs(creatorsColRef);
    return querySnapshot;
  } catch (error) {
    // console.error(error);
    return null;
  }
};

export const getCreatorById = async id => {
  const creatorDocRef = doc(db, "creators", id);
  try {
    const querySnapshot = await getDoc(creatorDocRef);
    return querySnapshot;
  } catch (error) {
    return null;
  }
};

export const addCreatorDoc = async obj => {
  const creatorsColRef = collection(db, "creators");
  try {
    const querySnapshot = await addDoc(creatorsColRef, obj);
    return querySnapshot;
  } catch (error) {
    // console.error(error);
    return null;
  }
};

export const getUserByEmail = async emailId => {
  const userCollectionRef = collection(db, "user");
  const q = query(userCollectionRef, where("email", "==", emailId));
  const snapshot = getDocs(q);
  return snapshot;
};

export const addUserDoc = async userObj => {
  const userColRef = collection(db, "user");
  const snapshot = await addDoc(userColRef, userObj);
  return snapshot;
};
