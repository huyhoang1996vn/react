import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import {
    Header,
    Footer,
} from "components/layouts"

import {
    Home,
    Account,
    ProudctDetail,
    Checkout,
    CheckoutSuccess,
    Search,
    AboutUs,
    CategoryProducts,
    MyOrders
} from "./index";



function NotFound() {
    return(
        <Redirect to="/not-found" />
    )
}

class ClientApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actived_header: "home"
        }

        this.setActiveHeader(props.location.pathname)
    }

    componentWillReceiveProps(nextProps) {
        this.setActiveHeader(nextProps.location.pathname)
    }

    setActiveHeader = (pathname) => {
        let active = "home";
        if (pathname == "/about-us") {
            active = "about-us";
        }
        if (pathname == "/my-orders") {
            active = "my-orders";
        }
        if (pathname.indexOf("category") >= 0) {
            active = "category"
        }
        this.setState({
            actived_header: active
        })
    }

    render() {
        return (
            <div className="Client-App">
                <Header 
                    actived={this.state.actived_header}
                />
                <Switch>
                    <Route exact path="/my-account" component={Account} />
                    <Route exact path="/product/:product_id" component={ProudctDetail} />
                    <Route exact path="/category/:category_id" component={CategoryProducts} />
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/checkout-confirm" component={Checkout} />

                    <Route exact path="/checkout-success" component={CheckoutSuccess} />
                    <Route exact path="/my-orders" component={MyOrders} />
                    <Route exact path="/search/:keyword" component={Search} />
                    <Route exact path="/about-us" component={AboutUs} />

                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default ClientApp;
