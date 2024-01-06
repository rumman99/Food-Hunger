import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebaseConfig from './firebase_auth';
import { useContext, useState } from 'react';
import { CartContext } from '../../App';
import { Link } from 'react-router-dom';

const app = initializeApp(firebaseConfig);

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser]= useState({})
    const [setLoginUser]= useContext(CartContext);
    const handleLogin=()=>{
    const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) =>{
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoginUser(user);
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
    });
}

    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
            <h1>{user.displayName}</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Login;