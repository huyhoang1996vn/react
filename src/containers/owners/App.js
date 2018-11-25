import React from "react";
import { Switch, Route } from "react-router-dom";
import { Icon } from 'antd';
import { Dashboard as DashContainer } from "components/common";

import { withDashboardHOC } from "components/HOC";

import {
    AddUser,
    UserDetail,
    UserForm,
    UserTable
} from "./storers";
import Dashboard from "./Dashboard";

const menuAdmin = [
    {
        id: 0,
        key: "dashboard",
        name: "Dashboard",
        path: "/owners",
        hidden: true,
        icon: <Icon type="dashboard" theme="outlined" />
    },
    {
        id: 1,
        key: "dashboard",
        name: "Dashboard",
        path: "/owners/dashboard",
        icon: <Icon type="dashboard" theme="outlined" />,
    },
    {
        id: 4,
        key: "store",
        name: "storers",
        path: "/owners/storers",
        icon: <Icon type="appstore" theme="outlined" />
    },
]

const findMenu = (key, value) => (data) => data.find(item => item[key] == value) || {}


class Owners extends React.Component {
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
            <div className="Owners">
                <DashContainer
                    onClickMenuItem={this.onClickMenuItem}
                    menu={menuAdmin}
                    menuSelected={findMenu('path', this.props.history.location.pathname)(menuAdmin).key}
                    onClickLogout={this.props.onClickLogout}
                >
                    <Switch>
                        <Route exact path="/owners" component={Dashboard} />
                        <Route exact path="/owners/storers" component={UserTable} />
                        <Route exact path="/owners/storer/add" component={AddUser} />
                        <Route exact path="/owners/storer/:store_id" component={UserDetail} />
                    </Switch>
                </DashContainer>
            </div>
        )
    }
}

export default withDashboardHOC(Owners);