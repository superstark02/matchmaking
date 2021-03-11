import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyAmSyhg-1t-FJp2xvZ-q67X08J1MCfZZ_8",
    authDomain: "matchmaking-3681b.firebaseapp.com",
    projectId: "matchmaking-3681b",
    storageBucket: "matchmaking-3681b.appspot.com",
    messagingSenderId: "1024779431784",
    appId: "1:1024779431784:web:950653306013fae60430dd",
    measurementId: "G-RH2N2NQTH7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const rdb = firebase.database();
  export const storage = firebase.storage();

  export default firebase;

  