import React from "react";
import { Switch, Route } from 'react-router-dom';

import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ProductMenu from "./pages/ProductMenu/ProductMenu";

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>

            <Route exact path="/menu">
                <ProductMenu />
            </Route>
        </Switch>
    );
}