import firebase from 'firebase/compat/app';
import "firebase/compat/storage"
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAbhbOQlC62fzj_3JzM1HZTbkA5J0ob3k0",
    authDomain: "facebook-2-4ec58.firebaseapp.com",
    projectId: "facebook-2-4ec58",
    storageBucket: "facebook-2-4ec58.appspot.com",
    messagingSenderId: "54950473733",
    appId: "1:54950473733:web:075b128ae0f6ce1c742c6c"
  };
const app=!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db= app.firestore();

const storage= firebase.storage();

export {app,db,storage};