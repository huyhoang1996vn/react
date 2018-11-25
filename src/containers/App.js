import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import AdminApp from "containers/admin/App";
import Owners from "containers/owners/App";
import Storers from "containers/storers/App";


import request from "api/request";


// Components
import { AuthRoute } from "components";

import {
    Loading
} from "components/common";

import {
    ClientApp,
    SystemLogin
} from "./index";

// Midleware
import { AuthMiddleware } from "middlewares"


function NotFound() {

    return (
        <div>
            <h1>404 - NOT FOUND</h1>
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="Root-App">
                <Switch>
                    <AuthRoute
                        path="/admin"
                        middlewares={[AuthMiddleware.Admin]}
                        component={AdminApp}
                    />
                    <AuthRoute
                        path="/owners"
                        middlewares={[AuthMiddleware.Owner]}
                        component={Owners}
                    />
                    <AuthRoute
                        path="/storers"
                        middlewares={[AuthMiddleware.Storer]}
                        component={Storers}
                    />

                    <Route path="/login" component={SystemLogin} />
                    <Route path="/not-found" component={NotFound} />

                    <Route path="/" component={ClientApp} />
                </Switch>
                <Loading />
            </div>
        );
    }
}

export default App;
