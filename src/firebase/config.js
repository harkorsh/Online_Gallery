// import * as firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";

// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwUsJn-4yqwRjDzHotZ8PL6Z_rscqRuAM",
  authDomain: "online-gallery-48731.firebaseapp.com",
  projectId: "online-gallery-48731",
  storageBucket: "online-gallery-48731.appspot.com",
  messagingSenderId: "813708701104",
  appId: "1:813708701104:web:7cbfd356db07a37d07ba75",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
