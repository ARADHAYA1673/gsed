
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCzJcCQbZoTtVe4EWa8wCD3viSWi0iLcrk",
      authDomain: "lets-chat-7c9cb.firebaseapp.com",
      databaseURL: "https://lets-chat-7c9cb-default-rtdb.firebaseio.com",
      projectId: "lets-chat-7c9cb",
      storageBucket: "lets-chat-7c9cb.appspot.com",
      messagingSenderId: "919341033674",
      appId: "1:919341033674:web:60a5fb0673e3515d79ac33"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
