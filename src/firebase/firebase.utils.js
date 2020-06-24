import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAiOqTahgjR2ArnuAayZawwd9ziZSZyGfs",
  authDomain: "crwn-db-afed8.firebaseapp.com",
  databaseURL: "https://crwn-db-afed8.firebaseio.com",
  projectId: "crwn-db-afed8",
  storageBucket: "crwn-db-afed8.appspot.com",
  messagingSenderId: "380247988293",
  appId: "1:380247988293:web:5ab90f3ad1cef201c42b2c"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
