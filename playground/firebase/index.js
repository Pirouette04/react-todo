import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDe1-3q9L7_kbYknbEVX5qd-j0vnsEGQkw",
    authDomain: "mead-todo-app-6a908.firebaseapp.com",
    databaseURL: "https://mead-todo-app-6a908.firebaseio.com",
    storageBucket: "mead-todo-app-6a908.appspot.com",
    messagingSenderId: "432385633575"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
