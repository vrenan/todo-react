import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAnOp8hJEP44jiVqG2tnUBJgn3ibwYPhCs",
    authDomain: "ideiasinovapan.firebaseapp.com",
    databaseURL: "https://ideiasinovapan.firebaseio.com",
    projectId: "ideiasinovapan",
    storageBucket: "",
    messagingSenderId: "938803858593",
    appId: "1:938803858593:web:6dc9433d1f5a7240a3b4e0"
}

export const firebaseService = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();