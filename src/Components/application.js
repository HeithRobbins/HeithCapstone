import React, { useContext } from "react";
import { Router } from "react-router-dom";

import SignIn from "./signIn";
import SignUp from "./signUp";
import UserProvider from "../userProvider";
import ProfilePage from "../Components/profilePage";
import { UserContext } from "../userProvider";
import PasswordReset from "./resetpw";


function Application() {
    const user = useContext(UserContext);

    return (
        user ?
        <ProfilePage />
        :
        <Router>
        <UserProvider />
                <SignUp path="/signUp" render={props => <SignUp {...props} />} />
                <SignIn path="/signIn" render={props => <SignIn {...props} />} />
                <PasswordReset path="/resetpw" render={props => <PasswordReset {...props} />} />
            </Router>

    );
}

export default Application;