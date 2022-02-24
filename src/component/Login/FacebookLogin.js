import React, { useState } from 'react';
import { handleFbSignIn } from './LoginAuth';

const FacebookLogin = () => {
    
    const [fbUser, setfbUser] = useState({
        isSignedIn: false,
        userName: '',
        photo: '',
        email: ''
      })

      const handleFbLogin = () => {
        handleFbSignIn()
        .then ((res) => {
            setfbUser(res);
        })
    }

    return (
        <div>
            
            <div>
                {
                    fbUser.isSignedIn ? 
                    <button> Fb sign out</button> : 
                    <button onClick={handleFbLogin}>Fb Login</button>
                }
                {
                    fbUser.isSignedIn &&
                    <div>
                    <h3>Welcome {fbUser.userName}</h3>
                    <p>Email: {fbUser.email}</p>
                    <img src={fbUser.photo} alt="kk" />
                    </div> 
                }
                </div>
                <button><a href="/">Back to Login Page</a></button>
        </div>
    );
};

export default FacebookLogin;