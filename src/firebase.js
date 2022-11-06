import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv55fyFd7Qw0LKuMpzEhlIa0WGw5by5uk",
  authDomain: "chat-ba202.firebaseapp.com",
  projectId: "chat-ba202",
  storageBucket: "chat-ba202.appspot.com",
  messagingSenderId: "545125420649",
  appId: "1:545125420649:web:ed09de04e9388ed2369cf8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();