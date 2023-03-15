import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDkBXQsOtEOa0tY-1SKDmhznQTeMVOVtYo",
  authDomain: "instaclone-c65f0.firebaseapp.com",
  projectId: "instaclone-c65f0",
  storageBucket: "instaclone-c65f0.appspot.com",
  messagingSenderId: "201364284631",
  appId: "1:201364284631:web:a5079502302da68d987c92",
});

const auth=firebase.auth();
const storage=firebase.storage();

export {storage,auth};