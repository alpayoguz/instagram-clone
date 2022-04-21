import Firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// import { seedDatabase } from "../seed"




const config = {apiKey: "AIzaSyAhLnz6Bx_An8hTYCkGyWmBx5Ij_KeBREg",
  authDomain: "instagram-basrolbenim.firebaseapp.com",
  projectId: "instagram-basrolbenim",
  storageBucket: "instagram-basrolbenim.appspot.com",
  messagingSenderId: "275128498395",
  appId: "1:275128498395:web:cb2a9c0212d6dd3cb6b4fe"}

const firebase = Firebase.initializeApp(config);
const {FieldValue} =Firebase.firestore;



// seedDatabase(firebase)



export {firebase, FieldValue};


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAhLnz6Bx_An8hTYCkGyWmBx5Ij_KeBREg",
//   authDomain: "instagram-basrolbenim.firebaseapp.com",
//   projectId: "instagram-basrolbenim",
//   storageBucket: "instagram-basrolbenim.appspot.com",
//   messagingSenderId: "275128498395",
//   appId: "1:275128498395:web:cb2a9c0212d6dd3cb6b4fe"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
