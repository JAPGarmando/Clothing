import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const FIRE_BASE_DATA = {
    apiKey: "AIzaSyBscmGLsx1x2XGf9yPrFPaMF4qDtJc3wdw",
    authDomain: "e-commercecrwn.firebaseapp.com",
    databaseURL: "https://e-commercecrwn.firebaseio.com",
    projectId: "e-commercecrwn",
    storageBucket: "e-commercecrwn.appspot.com",
    messagingSenderId: "828129967626",
    appId: "1:828129967626:web:16b99d1b316c593b0d29f3",
    measurementId: "G-1XP3P49B9T"
  }

  firebase.initializeApp(FIRE_BASE_DATA);
  
  export const auth =  firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
