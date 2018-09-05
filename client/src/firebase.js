import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAUMk6S-Q47eC-fhCsDPe8wN7BqbiLS2No",
    authDomain: "crypto-1534927632988.firebaseapp.com",
    databaseURL: "https://crypto-1534927632988.firebaseio.com",
    projectId: "crypto-1534927632988",
    storageBucket: "crypto-1534927632988.appspot.com",
    messagingSenderId: "168888421930"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;