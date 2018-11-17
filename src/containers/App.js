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

function TestPaypal(props) {
    const clickBtn = (e) => { 
        request().get("/paypal/redirect?money=2")
            .then(res => {
                console.log(res);
                window.location.replace(res.data);
            })
    }
    return (
        <div>
            <button onClick={clickBtn}>Click to payment</button>
        </div>
    )
}

function Confirm(props) {
    const clickBtn = (e) => {
        request().get("/paypal/confirm" + props.location.search)
            .then(res => {
                const data = res.data.message;
                request().post("/paypal/payment/", {
                    "product": {
                        "6": [
                            { "product_id": 91, "quantity": 2 }
                        ]
                    },
                    "money": parseInt(data.money),
                    "phone": "0905137940",
                    "first_name": "hoang",
                    "last_name": "huy",
                    "address": "356 ha noi",
                    "token": data.TOKEN,
                    "PayerID": data.PAYERID
                }).then(res => {
                    console.log("SUCCESS", res);
                })
                // window.location.replace(res.data);
            })
    }
    return (
        <div>
            <button onClick={clickBtn}>Click to confirm</button>
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

                    <Route path="/test-paypal" component={TestPaypal} />
                    <Route path="/checkout-confirm" component={Confirm} />


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
