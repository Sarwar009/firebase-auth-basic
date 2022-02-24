import React, { useState } from 'react';
import { handleGoogleSignIn, GoogleSignedOut } from './LoginAuth';

const GoogleLogin = () => {

    const [googleUser, setGoogleUser] = useState({
        isSignedIn: false,
        userName: '',
        photo: '',
        email: ''
      })

    const handleSignInClick = () => {
        handleGoogleSignIn()
        .then ((res => {
            setGoogleUser(res);
        }))
    }

    const handleGoogleSignOut = () => {
        GoogleSignedOut()
        .then ((res => {
            setGoogleUser(res)
        }))
    }

    return (
        <div>
        <div>
        {
            googleUser.isSignedIn ? 
            <button onClick={handleGoogleSignOut}>Google sign out</button> : 
            <button onClick={handleSignInClick}>Google sign in</button>
        }
        
        <div>
        {
            googleUser.isSignedIn &&
            <div>
            <h3>Welcome {googleUser.userName}</h3>
            <p>Email: {googleUser.email}</p>
            <img src={googleUser.photo} alt="kk" />
            </div> 
        }
        </div>
        </div> 
             <button><a href="/">Back to Login Page</a></button>
        </div>
    );
};

export default GoogleLogin;