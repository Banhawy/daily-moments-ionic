import firbase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvj-vtm6HXKnHcOlXMLDN2nMyiXv1hR2w",
    authDomain: "ionic-daily-moments.firebaseapp.com",
    projectId: "ionic-daily-moments",
    storageBucket: "ionic-daily-moments.appspot.com",
    messagingSenderId: "402359474975",
    appId: "1:402359474975:web:a2cc5246fbab3caf8c2e2a"
  };

const app = firbase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();