import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAcCvqdyu7zLejskt9IZfs-93-RlG3JeJ0",
  authDomain: "rider-39541.firebaseapp.com",
  projectId: "rider-39541",
  storageBucket: "rider-39541.appspot.com",
  messagingSenderId: "511841292236",
  appId: "1:511841292236:web:d6392b517433229c33d769"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
