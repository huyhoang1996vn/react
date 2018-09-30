import React from "react";

import { _url } from "config/utils";


// Components
import {
    Header,
    Footer,
    Delivery,
} from "components/layouts"

import {
    SliderMain,
    SliderMini,
    SliderProducts
} from "components/slider"

import {
    AccountComponent
} from "components/account";

class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Account">
                <Header />

                <AccountComponent />

                <Delivery />
                <Footer />
            </div>
        )
    }
}

export default Account;