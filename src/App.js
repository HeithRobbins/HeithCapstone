import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import "./style/main.scss";
import Nav from "./Components/Navbar/navbar";

import UserProvider from "./userProvider"
import Application from "./Components/application"


import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import PasswordReset from './Components/resetpw';
import KeithCyndi from './Components/pages/Keith-Cyndi';
import Nathan from './Components/pages/Nathan';
import Emily from './Components/pages/Emily';
import Casey from './Components/pages/Casey';
import Heith from './Components/pages/Heith';
import Sena from './Components/pages/Sena';
import Jeremy from './Components/pages/Jeremy';
import Shanelle from './Components/pages/Shanelle';
import Sterling from './Components/pages/Sterling';


export default class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className='app'>
          <Nav />
          <Application />
          <Switch>
            <Route exact path="/SignIn" component={SignIn} />
            <SignUp path="/signUp" />
            <PasswordReset path="/resetpw" />
            <Route path="/KeithCyndi" component={KeithCyndi} />
            <Route path="/Nathan" component={Nathan} />
            <Route path="/Emily" component={Emily} />
            <Route path="/Casey" component={Casey} />
            <Route path="/Heith" component={Heith} />
            <Route path="/Sena" component={Sena} />
            <Route path="/Jeremy" component={Jeremy} />
            <Route path="/Shanelle" component={Shanelle} />
            <Route path="/Sterling" component={Sterling} />
            {/* <Route path="/blog" component={HomeBlog} /> */}
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}