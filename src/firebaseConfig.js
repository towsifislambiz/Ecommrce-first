import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDwZU50HIBEvQ53Ozg5j68l2OuSvsUdh44",
  authDomain: "todo-d59ad.firebaseapp.com",
  projectId: "todo-d59ad",
  storageBucket: "todo-d59ad.firebasestorage.app",
  messagingSenderId: "1011162415461",
  appId: "1:1011162415461:web:07a5f72fdef97802b6618c",
  measurementId: "G-LS3ENC4H86"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig