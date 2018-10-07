import React from "react";
import { Switch, Route } from "react-router-dom";
import { Icon } from 'antd';
import { Dashboard as DashContainer } from "components/common";

// containers
import {
    Dashboard,
    Users,
    UserDetail,
    AddUser
} from "./index";

const menuAdmin = [
    {
        id: 1,
        key: "dashboard",
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <Icon type="dashboard" theme="outlined" />
    },
    {
        id: 1,
        key: "users",
        name: "Users",
        path: "/admin/users",
        icon: <Icon type="user" theme="outlined" />
    }
]

const findMenu = (key, value) => (data) => data.find(item => item[key] == value) || {}

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickMenuItem = (item) => {
        this.props.history.push(findMenu('key', item.key)(menuAdmin).path)
    }

    onClickLogout = () => {
        alert("onClickLogout");
    }

    render() {
        return (
            <div className="Admin">
                <DashContainer
                    onClickMenuItem={this.onClickMenuItem}
                    menu={menuAdmin}
                    menuSelected={findMenu('path', this.props.history.location.pathname)(menuAdmin).key}
                    onClickLogout={this.onClickLogout}
                >
                    <Switch>
                        <Route exact path="/admin/dashboard" component={Dashboard} />
                        <Route exact path="/admin/users" component={Users} />
                        <Route exact path="/admin/user/add" component={AddUser} />
                        <Route exact path="/admin/user/:user_id" component={UserDetail} />
                    </Switch>
                </DashContainer>
            </div>
        )
    }
}

export default Admin;