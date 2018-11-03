import React from "react";
import { connect } from "react-redux";
import { Table, Divider, Tag, Button } from 'antd';


// actions 
import {
    getOrders,
    deleteOrder
} from "actions/storers/orders";


class OrdersTable extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [{
            title: 'Code',
            dataIndex: 'order_code',
            key: 'order_code',
            width: "10%",
        }, {
            title: 'Total Price',
            dataIndex: 'money',
            key: 'money',
        }, {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
        }, {
            title: 'Payment method',
            dataIndex: 'payment_method',
            key: 'payment_method',
        }, {
            title: 'Status payment',
            key: 'status_payment',
            dataIndex: 'status_payment',
            render: this.formatStatus
        }, {
            title: 'Status order',
            key: 'status_order',
            dataIndex: 'status_order',
            render: this.formatStatus
        }, {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
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
        this.props.dispatch(getOrders());
    }

    formatStatus = (st) => <Tag color="blue">{st}</Tag>

    onClickAction = (type) => record => () => {
        switch (type) {
            case "detail": {
                return this.props.history.push(`/storers/order/${record.id}`);
            }
            case "delete": {
                this.props.dispatch(deleteOrder(record.id))
                return;
            }
            default: return;
        }
    }

    render() {
        return (
            <div className="Users">
                <h1>Orders Table</h1>
                <br />
                <br />
                <br />
                <Table
                    columns={this.columns}
                    dataSource={this.props.allOrders}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    allOrders: state.storers.orders.allOrders
}))(OrdersTable);