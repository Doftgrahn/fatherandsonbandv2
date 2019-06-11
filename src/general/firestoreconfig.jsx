
import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCc8mUy-VykPLuo7j5Y_9yTYXTIup3Hw6U",
    authDomain: "fatherandsonband-e023c.firebaseapp.com",
    databaseURL: "https://fatherandsonband-e023c.firebaseio.com",
    projectId: "fatherandsonband-e023c",
    storageBucket: "",
    messagingSenderId: "114567674874",
    appId: "1:114567674874:web:f7016cf575a552b3"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const storage = firebase.storage();
