  // Import the functions you need from the SDKs you need
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";


  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD5TXDIaAWXMsEIfaS3MxcrVJ5AwyDagAQ",
    authDomain: "firegram-netninja-884cf.firebaseapp.com",
    projectId: "firegram-netninja-884cf",
    storageBucket: "firegram-netninja-884cf.appspot.com",
    messagingSenderId: "228445110527",
    appId: "1:228445110527:web:78a7d7008defd4bdb30cca"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };

