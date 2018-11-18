import React from "react";
import { Switch, Route } from "react-router-dom";
import { Icon } from 'antd';
import { Dashboard as DashContainer } from "components/common";

// containers
import { withDashboardHOC } from "components/HOC";

import {
    Dashboard,
    Users,
    Categories
} from "./index";

import {
    AddCategory,
    EditCategory
} from "./categories";

import {
    AddUser,
    UserDetail
} from "./users";

const menuAdmin = [
    {
        id: 0,
        key: "dashboard",
        name: "Dashboard",
        path: "/admin",
        hidden: true,
        icon: <Icon type="dashboard" theme="outlined" />
    },
    {
        id: 1,
        key: "dashboard",
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <Icon type="dashboard" theme="outlined" />,
    },
    {
        id: 2,
        key: "users",
        name: "Users",
        path: "/admin/users",
        icon: <Icon type="user" theme="outlined" />
    },
    {
        id: 3,
        key: "categories",
        name: "Categories",
        path: "/admin/categories",
        icon: <Icon type="ordered-list" theme="outlined" />
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

    render() {
        return (
            <div className="Admin">
                <DashContainer
                    onClickMenuItem={this.onClickMenuItem}
                    menu={menuAdmin}
                    menuSelected={findMenu('path', this.props.history.location.pathname)(menuAdmin).key}
                    onClickLogout={this.props.onClickLogout}
                >
                    <Switch>
                        <Route exact path="/admin" component={Dashboard} />
                        <Route exact path="/admin/dashboard" component={Dashboard} />
                        <Route exact path="/admin/users" component={Users} />
                        <Route exact path="/admin/user/add" component={AddUser} />
                        <Route exact path="/admin/user/:user_id" component={UserDetail} />
                        <Route exact path="/admin/categories" component={Categories} />
                        <Route exact path="/admin/categories/add" component={AddCategory} />
                        <Route exact path="/admin/categories/edit/:category_id" component={EditCategory} />
                    </Switch>
                </DashContainer>
            </div>
        )
    }
}

export default withDashboardHOC(Admin);