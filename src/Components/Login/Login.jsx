import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from './firebase_auth';
import { useContext, useState } from 'react';
import { LoginUserContext } from '../../App';
import { Link } from 'react-router-dom';

const app = initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser]= useState({isLogin: false, name: '', email: '', photo: '', password: ''})

//Google Auth Login
    const provider = new GoogleAuthProvider();
    const [loginUser, setLoginUser]= useContext(LoginUserContext);

    const handleLogin=(e)=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) =>{
        // The signed-in user info.
        const {displayName, email, photoURL} = result.user;
        const getUserInfo= {isLogin: true, name: displayName, email: email, photo: photoURL}
        setUser(getUserInfo);
        setLoginUser(getUserInfo);
        e.preventDefault()
    })
        .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

//Login with Email Auth

    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Login;