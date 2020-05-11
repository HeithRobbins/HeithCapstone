import React, { useContext } from "react";
import { UserContext } from "../userProvider";
import { auth } from "../firebase";


const ProfilePage = () => {
    const user = useContext(UserContext);
    const { displayName, email } = user;
    console.log(user);


    return (
        <div className="profile-container">
            <div className="profilebordertag">

                <div className="md:pl-4">
                    <h2 className="Nametagh2">{displayName}</h2>
                    <h3 className="Nametagh3">{email}</h3>
                </div>
            </div>
            <button className="btnSignOut" onClick={() => { auth.signOut() }}>Sign out</button>
        </div>
    )
};

export default ProfilePage;