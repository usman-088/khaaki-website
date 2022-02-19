import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';


// import firebase from 'firebase/app';
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB6YbpRt6j0CGNyrkGKZcuxmFP8NQ3IvIQ",
    authDomain: "khaaki-e9d3a.firebaseapp.com",
    projectId: "khaaki-e9d3a",
    storageBucket: "khaaki-e9d3a.appspot.com",
    messagingSenderId: "420585339523",
    appId: "1:420585339523:web:b259aa777e3dc5d24f39b6"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
