import React from "react";
import { connect } from "react-redux";
import { Table, Divider, Tag, Button } from 'antd';


// actions 
import {
    getProducts
} from "actions/storers/products";


class ProductsTable extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [{
            title: 'Image',
            dataIndex: 'picture',
            key: 'picture',
            width: "10%",
            render: (picture) => {
                return <img src={picture[0].image} alt="" />
            }
        }, {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        }, {
            title: 'Expired',
            dataIndex: 'expire_date',
            key: 'expire_date',
        }, {
            title: 'Stores',
            dataIndex: 'stores',
            key: 'stores',
        }, {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
        }, {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
        }, {
            title: 'Tax',
            key: 'tax',
            dataIndex: 'tax',
        }, {
            title: 'Actived',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (is_active) => {
                return (
                    <span>
                        <Tag color="blue">{is_active ? "Actived" : "Disabled"}</Tag>
                    </span>
                )
            }
        }, {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: this.formatStatus
        }, {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (id, record) => (
                <span>
                    <a onClick={this.onClickAction("detail")(record)} href="javascript:;">View</a>
                    <Divider type="vertical" />
                    <a onClick={this.onClickAction("delete")(record)} href="javascript:;">Delete</a>
                </span>
            ),
        }];
    }

    componentDidMount() {
        this.props.dispatch(getProducts());
    }

    formatStatus = (st) => <Tag color="blue">{st}</Tag>

    onClickAction = (type) => record => () => {
        switch (type) {
            case "detail": {
                return this.props.history.push(`/storers/product/${record.id}`);
            }
            case "delete": {
                this.props.dispatch(getProducts(record.id))
                return;
            }
            default: return;
        }
    }

    render() {
        return (
            <div className="Users">
                <h1>Products Table</h1>
                <br />
                <br />
                <br />
                <Table
                    columns={this.columns}
                    dataSource={this.props.allProducts}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    allProducts: state.storers.products.allProducts
}))(ProductsTable);