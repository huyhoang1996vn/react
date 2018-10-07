import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import AdminApp from "containers/admin/App"; 
import Owners from "containers/owners/App"; 



// Components
import {
    Header,
    Footer,
} from "components/layouts"

import {
    ClientApp
} from "./index";

function NotFound() {
    return(
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
                    <Route path="/admin" component={AdminApp} />
                    <Route path="/owners" component={Owners} />
                    <Route path="/not-found" component={NotFound} />

                    <Route path="/" component={ClientApp} />
                </Switch>
            </div>
        );
    }
}

export default App;
