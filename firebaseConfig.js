import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDk6Il6GFA5Sqzu1Zv3UkKSjjXe9ekA2ns",
  authDomain: "rafiki-assist-952be.firebaseapp.com",
  projectId: "rafiki-assist-952be",
  storageBucket: "rafiki-assist-952be.appspot.com",
  messagingSenderId: "775541551500",
  appId: "1:775541551500:web:df4d861b1c47e93fbf26a9",
  measurementId: "G-JZ3RBK5MSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Enable persistent auth state
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
