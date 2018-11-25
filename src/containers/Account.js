import React from "react";
import { connect } from "react-redux";

import { _url } from "config/utils";

import {
    authLogin,
    authRegister,
    editProfle,
    authLogout
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
    handleLogout = () => this.props.dispatch(authLogout())

    render() {
        return (
            <div className="Account">
                <AccountComponent
                    userAuth={this.props.userAuth}
                    onLogin={this.handleLogin}
                    onRegister={this.handleRegister}
                    onEditProfile={this.handleEditProfile}
                    loginSuccess={() => {
                        this.props.history.push("/");
                    }}
                    onLogout={this.handleLogout}
                />
            </div>
        )
    }
}

export default connect((store) => ({
    userAuth: store.session.userAuth
}))(Account);