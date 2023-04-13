import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCTVkQgCNEuqPBkuTklz0w7xtnYw3GVF_Y",
    authDomain: "teamvotingapp-pro-c58.firebaseapp.com",
    databaseURL: "https://teamvotingapp-pro-c58-default-rtdb.firebaseio.com",
    projectId: "teamvotingapp-pro-c58",
    storageBucket: "teamvotingapp-pro-c58.appspot.com",
    messagingSenderId: "983688378339",
    appId: "1:983688378339:web:22a931e8339319fc2012d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();