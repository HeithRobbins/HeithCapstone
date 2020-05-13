import React, { useState, } from "react";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
// import { userContext } from "./profilePage";

const PasswordReset = () => {

    const [email, setEmail] = useState("");
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const onChangeHandler = event => {
        const { name, value } = event.currentTarget;

        if (name === "userEmail") {
            setEmail(value);
        }
    };

    const sendResetEmail = event => {
        event.preventDefault();
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };

    return (
        <div className="mt-8">
            <div><h1 className="textResetpw">
                Reset your Password
            </h1>
                <div className="borderForEmail">
                    <form action="">
                        {emailHasBeenSent && (
                            <div className="borderForEmailBeenSent">
                                An email has been sent to you!
                            </div>
                        )}
                        {error !== null && (
                            <div className="error-alert">
                                {error}
                            </div>
                        )}
                        <label htmlFor="userEmail" className="block">
                            Email:
                    </label>
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            value={email}
                            placeholder="Input your email"
                            onChange={onChangeHandler}
                            className="emailInput"
                        />
                        <button
                            className="pwChange"
                            onClick={event => {
                                sendResetEmail(event);
                            }}
                        >
                            Sended link
                    </button>
                    </form>
                    <Link
                        to="/SignIn"
                        className="backToSignIn"
                    >
                        &larr; back to sign in page
                </Link>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;