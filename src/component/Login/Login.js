import React from 'react';
import './Login.css'

const Login = () => {

    
    return (
        <>
            <div className='login-container'>
                <button><a href="/google">Google Sign In</a></button>
                <br/>
                <button><a href="/button">Fb Login</a></button>
            </div>
        </>
    );
};

export default Login;