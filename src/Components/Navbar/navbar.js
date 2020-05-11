import React from 'react';
import { Link } from 'react-router-dom'

import "../../style/main.scss"

// import firebase from 'firebase/app'
// import firestore from 'firebase/firestore'
// import UserProvider from "./userProvider"



function Nav() {

    return (
        <nav>
            <div className="nav-container">

                <div className="nav-wrapper">
                    <div className="nav-links">
                        <Link to="/SignIn">
                            <li>Register</li>
                        </Link>
                    </div>

                    <div className="nav-links">
                        <Link to="/KeithCyndi">
                            <li>Keith Cyndi</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Nathan">
                            <li>Nathan</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Emily">
                            <li>Emily</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Casey">
                            <li>Casey</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Heith">
                            <li>Heith</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Sena">
                            <li>Sena</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Jeremy">
                            <li>Jeremy</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Shanelle">
                            <li>Shanelle</li>
                        </Link>
                    </div>
                    <div className="nav-links">
                        <Link to="/Sterling">
                            <li>Sterling</li>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;