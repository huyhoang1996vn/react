import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class AuthRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAllowEnter: false,
            urlRedirect: null,
        }
    }

    componentDidMount() {
        Promise.all(this.props.middlewares.map(md => md(this.props.userAuth)))
        .then(() => {
            this.setState({
                isAllowEnter: true
            })
        })
        .catch(urlRedirect => {
            this.setState({
                urlRedirect,
            })
        })
    }


    render() {
        const { path, component: Component, ...rest } = this.props;
        return (
            <Route path={path} render={(props) => {
                if (this.state.isAllowEnter) {
                    return <Component {...props} {...rest} />
                }
                if (this.state.urlRedirect == null) return "LOADING";
                return <Redirect to={this.state.urlRedirect} />
            }} />
        );
    }
}



export default connect((state => ({
    userAuth: state.session.userAuth
})))(AuthRoute);