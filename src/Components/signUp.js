import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { auth, generateUserDocument } from "../firebase"
import firebase from 'firebase/app'
import { signInWithGoogle } from '../firebase'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
        event.preventDefault();
        try {
            console.log("You made it this far")
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            generateUserDocument(user, { displayName });
        }
        catch (error) {
            setError('Error Signing up with email and password');
        }

        setEmail("");
        setPassword("");
        setDisplayName("");
    };


    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
        } else if (name === "userPassword") {
            setPassword(value);
        } else if (name === "displayName") {
            setDisplayName(value);
        }
    };
    console.log(firebase.auth().currentUser)

    return (
        <div className="mt-8">
            <h1 className="textSignUp">Sign Up</h1>
            <div className="borderForlogin">
                {error !== null && (
                    <div className="error-alert">
                        {error}
                    </div>
                )}
                <form className="">
                    <label htmlFor="displayName" className="block">
                        Display Name:
          </label>
                    <input
                        type="text"
                        className="input-bar-name"
                        name="displayName"
                        value={displayName}
                        placeholder="Your name"
                        id="displayName"
                        onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userEmail" className="block">
                        Email:
          </label>
                    <input
                        type="email"
                        className="input-bar-email"
                        name="userEmail"
                        value={email}
                        placeholder="Your Email here"
                        id="userEmail"
                        onChange={event => onChangeHandler(event)}
                    />
                    <label htmlFor="userPassword" className="block">
                        Password:
          </label>
                    <input
                        type="password"
                        className="input-bar-password"
                        name="userPassword"
                        value={password}
                        placeholder="Your Password"
                        id="userPassword"
                        onChange={event => onChangeHandler(event)}
                    />
                    <button
                        className="btnForSignUp"
                        onClick={event => {
                            createUserWithEmailAndPasswordHandler(event, email, password);
                        }}
                    >
                        Sign up
          </button>
                </form>
                <p className="ptags-text">or</p>
                <button
                    onClick={() => {
                        try {
                            signInWithGoogle();
                        } catch (error) {
                            console.error("Error signing in with Google", error);
                        }
                    }}
                    className="btnGoogle"
                >
                    Sign In with Google
        </button>
                <p className="ptags-text">
                    Already have an account?{" "}
                    <Link to="/" className="btnForSignIn">
                        Sign in here
                    </Link>{" "}
                </p>
            </div>
        </div>
    );
};


export default SignUp;