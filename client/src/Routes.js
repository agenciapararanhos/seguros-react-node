import React from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './login'
import Logout from './logout'
import Home from "./Home"

export default function  Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path= "/"  exact component= {Home} />
            <Route path= "/login"  exact component= {Login} />
            <Route path= "/logout"   component= {Logout} />
            
        </Switch>
        </BrowserRouter>
    );
}