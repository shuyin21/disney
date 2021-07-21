import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBUolt4WT1-vpqub4siSN3lj3NkgXWemSQ",
    authDomain: "disneyplus-clone-eeebd.firebaseapp.com",
    projectId: "disneyplus-clone-eeebd",
    storageBucket: "disneyplus-clone-eeebd.appspot.com",
    messagingSenderId: "43888462529",
    appId: "1:43888462529:web:bbcbbc05f0cde34b94a240"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;