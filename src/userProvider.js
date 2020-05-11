import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from "./firebase"



export const UserContext = createContext({ user: null });

class UserProvider extends Component {

    state = {
        user: null
    };


    componentDidMount = async () => {
        auth.onAuthStateChanged(async userAuth => {
            const user = await generateUserDocument(userAuth);
            this.setState({ user });
        });
    };

    render() {
        const { user } = this.state;

        return (     //having a action and you not updatea it you need a function that update this us have it go to KeithCyndi page
            <UserContext.Provider value={user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }

}
export default UserProvider;