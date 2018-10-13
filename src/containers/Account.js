import React from "react";
import { connect } from "react-redux";

import { _url } from "config/utils";

import {
    authLogin,
    authRegister,
    editProfle
} from "actions/auth";


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

    handleLogin = data => this.props.dispatch(authLogin(data));
    handleRegister = data => this.props.dispatch(authRegister(data));
    handleEditProfile = data => this.props.dispatch(editProfle(data));

    render() {
        return (
            <div className="Account">
                <AccountComponent
                    userAuth={this.props.userAuth}
                    onLogin={this.handleLogin}
                    onRegister={this.handleRegister}
                    onEditProfile={this.handleEditProfile}
                />
            </div>
        )
    }
}

export default connect((store) => ({
    userAuth: store.session.userAuth
}))(Account);