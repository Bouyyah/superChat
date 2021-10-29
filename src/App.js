import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';


// firebase SDK, db & authentication
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

// react-firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';

//Initialize app to identify the app 
firebase.initializeApp({
  apiKey: "AIzaSyC9rVW3X3l1H8F6IZdbQmv2f4Uk5IpZ8f8",
  authDomain: "bouyyah-superchat.firebaseapp.com",
  projectId: "bouyyah-superchat",
  storageBucket: "bouyyah-superchat.appspot.com",
  messagingSenderId: "604604682805",
  appId: "1:604604682805:web:dfe1549c3b018ee5fd977c",
  measurementId: "G-72S5ZS5DN1"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const[user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

  return (
    <div className="App">
      <header className="app-header">

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn onSignInWithGoogle = { signInWithGoogle }/>}
      </section>
    </div>
  );
}

export default App;
