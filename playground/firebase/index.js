import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDe1-3q9L7_kbYknbEVX5qd-j0vnsEGQkw",
    authDomain: "mead-todo-app-6a908.firebaseapp.com",
    databaseURL: "https://mead-todo-app-6a908.firebaseio.com",
    storageBucket: "mead-todo-app-6a908.appspot.com",
    messagingSenderId: "432385633575"
  };
  firebase.initializeApp(config);

var fbRef = firebase.database().ref();

fbRef.set({
    app:{
      name: "Todo App",
      version: "1.0.0"
    },
    user:{
      name: "Lucie",
      age: 20
    }
  });

var logData = (snapshot) => {
console.log("Got value", snapshot.val());
};

  fbRef.child("app/user").on("value", logData);

  fbRef.update({"user/name":"Chantal"});
