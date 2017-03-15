import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDe1-3q9L7_kbYknbEVX5qd-j0vnsEGQkw",
      authDomain: "mead-todo-app-6a908.firebaseapp.com",
      databaseURL: "https://mead-todo-app-6a908.firebaseio.com",
      storageBucket: "mead-todo-app-6a908.appspot.com",
      messagingSenderId: "432385633575"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
