import React from "react";
import { connect } from "react-redux";

// actions
import {
    authLogout
} from "actions/auth";

const withDashboardHOC = (WrappComponent) => {
    class Hoc extends React.Component {

        onClickLogout = () => {
            this.props.authLogout();
            this.props.history.push("/login");
        }

        render() {
            return (
                <WrappComponent
                    onClickLogout={this.onClickLogout}
                    {...this.props}
                />
            )
        }
    }


    const mapStateToProps = (state) => ({});
    return connect(mapStateToProps, {
        authLogout
    })(Hoc);
}

export default withDashboardHOC;