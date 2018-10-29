import React from "react";
import { Switch, Route } from "react-router-dom";
import { Icon } from 'antd';
import { Dashboard as DashContainer } from "components/common";

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
        id: 2,
        key: "products",
        name: "Products",
        path: "/owners/products",
        icon: <Icon type="save" theme="outlined" />
    },
    {
        id: 3,
        key: "orders",
        name: "Orders",
        path: "/owners/orders",
        icon: <Icon type="shopping-cart" theme="outlined" />
    },
    {
        id: 4,
        key: "store",
        name: "store",
        path: "/owners/store",
        icon: <Icon type="appstore" theme="outlined" />
    },
    {
        id: 5,
        key: "information",
        name: "Information",
        path: "/owners/information",
        icon: <Icon type="radius-bottomleft" theme="outlined" />
    },
    {
        id: 5,
        key: "remove",
        name: "Remove",
        path: "/owners/remove",
        icon: <Icon type="delete" theme="outlined" />
    }

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
                    onClickLogout={this.onClickLogout}
                >
                    <Switch>
                    </Switch>
                </DashContainer>
            </div>
        )
    }
}

export default Owners;