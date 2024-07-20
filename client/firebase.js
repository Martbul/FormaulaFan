import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDtCxBH4w_jjNfh8r1iNfgZm-1-osZ737Y",
  authDomain: "formulafan-38467.firebaseapp.com",
  projectId: "formulafan-38467",
  storageBucket: "formulafan-38467.appspot.com",
  messagingSenderId: "506817643804",
  appId: "1:506817643804:web:df5ef9403a982d168ba6d9",
  measurementId: "G-9R7EP24LXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
