import React from "react";

import { _url } from "config/utils";


// Components
import {
    Delivery,
} from "components/layouts"

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
                <AccountComponent />
                <Delivery />
            </div>
        )
    }
}

export default Account;