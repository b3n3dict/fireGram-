import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// firebase config
var firebaseConfig = {
    apiKey: "AIzaSyDiVPV033HvAhHTQFPpu7ISh-SmsJTSULc",
    authDomain: "ben-firegram.firebaseapp.com",
    databaseURL: "https://ben-firegram.firebaseio.com",
    projectId: "ben-firegram",
    storageBucket: "ben-firegram.appspot.com",
    messagingSenderId: "378296603213",
    appId: "1:378296603213:web:82ba627b0c9b7198958204"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()

  const projectFirestore = firebase.firestore()

  const {projectStorage,projectFirestore};