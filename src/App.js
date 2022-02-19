import { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import './App.css';

firebase.initializeApp(firebaseConfig);

function App() {


  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const [user, setUser] = useState({
    isSignedIn: false,
    userName: '',
    photo: '',
    email: ''
  })
  
  const handleClick = () =>{
    signInWithPopup(auth, provider)
    .then (res => {
      const {displayName, photoURL, email} = res.user;
      const userSignedIn = {
        isSignedIn: true,
        userName: displayName,
        photo: photoURL,
        email: email
      }
      setUser(userSignedIn);
      console.log(displayName, photoURL, email);
    }).catch (err => {
      console.log(err.massage);
    })
  }

  const handleSignedOut = () => {
    signOut(auth)
    .then (res => {
      const signedOut = {
      isSignedIn: false,
      userName: '',
      photo: '',
      email: ''
      }
      setUser(signedOut);
    }).catch (err => {
      console.log(err.massage);
    })
  }

  return (
    <div className="App">

        

        
        {
          user.isSignedIn ? 
          <button onClick={handleSignedOut}>sign out</button> : 
          <button onClick={handleClick}>sign in</button>
        }
        
        {
          user.isSignedIn &&
          <div>
            <h3>Welcome {user.userName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photo} alt="kk" />
          </div> 
        }
    </div>
  );
}

export default App;
