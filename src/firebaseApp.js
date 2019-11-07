import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAJCfLn-UM6SLxtO4gs9RFOJOiIVcIotrc",
    authDomain: "fitness-4bc9b.firebaseapp.com",
    databaseURL: "https://fitness-4bc9b.firebaseio.com",
    projectId: "fitness-4bc9b",
    storageBucket: "fitness-4bc9b.appspot.com",
    messagingSenderId: "852798924708",
    appId: "1:852798924708:web:3e17c547794144f529c331"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events');
export const mealsRef = firebaseApp.database().ref().child('meals');
