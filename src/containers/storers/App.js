import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Icon } from 'antd';
import { Dashboard as DashContainer } from "components/common";


// components

import { withDashboardHOC } from "components/HOC";

import {
    OrdersTable,
    OrderDetail,
} from "containers/storers/orders";

import {
    ProductsTable,
    ProductDetail,
    AddProduct
} from "containers/storers/products";
import Dashboard from "./Dashboard";



const menuAdmin = [
    {
        id: 0,
        key: "dashboard",
        name: "Dashboard",
        path: "/storers",
        hidden: true,
        icon: <Icon type="dashboard" theme="outlined" />
    },
    {
        id: 1,
        key: "dashboard",
        name: "Dashboard",
        path: "/storers/dashboard",
        icon: <Icon type="dashboard" theme="outlined" />,
    },
    {
        id: 2,
        key: "products",
        name: "Products",
        path: "/storers/products",
        icon: <Icon type="save" theme="outlined" />
    },
    {
        id: 3,
        key: "orders",
        name: "Orders",
        path: "/storers/orders",
        icon: <Icon type="shopping-cart" theme="outlined" />
    },
    // {
    //     id: 4,
    //     key: "information",
    //     name: "Information",
    //     path: "/storers/information",
    //     icon: <Icon type="radius-bottomleft" theme="outlined" />
    // },
    // {
    //     id: 5,
    //     key: "remove",
    //     name: "Remove",
    //     path: "/storers/remove",
    //     icon: <Icon type="delete" theme="outlined" />
    // }
]

const findMenu = (key, value) => (data) => data.find(item => item[key] == value) || {}


class Storers extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickMenuItem = (item) => {
        this.props.history.push(findMenu('key', item.key)(menuAdmin).path)
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
                        <Route exact path="/storers" component={Dashboard} />
                        <Route exact path="/storers/orders" component={OrdersTable} />
                        <Route exact path="/storers/order/:order_id" component={OrderDetail} />
                        <Route exact path="/storers/products" component={ProductsTable} />
                        <Route exact path="/storers/product/add" component={AddProduct} />
                        <Route exact path="/storers/product/detail/:product_id" component={ProductDetail} />
                    </Switch>
                </DashContainer>
            </div>
        )
    }
}

export default withDashboardHOC(Storers);