import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDAP5RZJ0h3JgLCVmN-GRG_C2A9MjG2Q9s",
    authDomain: "capstoneproject-eb89a.firebaseapp.com",
    databaseURL: "https://capstoneproject-eb89a.firebaseio.com",
    projectId: "capstoneproject-eb89a",
    storageBucket: "capstoneproject-eb89a.appspot.com",
    messagingSenderId: "803118349396",
    appId: "1:803118349396:web:6c9582c3d800d1fe3241c1",
    measurementId: "G-EL8THQ2G5P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const generateUserDocument = (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = userRef.get();

    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = uid => {
    if (!uid) return null;
    try {
        const userDocument = firestore.doc(`users/${uid}`).get();

        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};