import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvIRrqh2aMwZRV7ZagGJHTSs-FHP99A_8",
  authDomain: "royalty-clothing-db-f60a1.firebaseapp.com",
  projectId: "royalty-clothing-db-f60a1",
  storageBucket: "royalty-clothing-db-f60a1.firebasestorage.app",
  messagingSenderId: "474406646324",
  appId: "1:474406646324:web:74e57d87634d7b1d7ed061",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    return userDocRef;
  }

  //check if user data exist
  //return userDocRef
  // if user data does not exist
};
