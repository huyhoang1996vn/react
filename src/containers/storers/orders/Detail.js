import React from "react";
import { connect } from "react-redux";
import { message } from "antd";

// components
import { FormOrder } from "./index";


// actions 
import {
    getOrder,
    editOrder
} from "actions/storers/orders";



class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {
                store: "",
                money: "",
                products: "",
                created: "",
                modified: "",
                order_code: "",
                transaction_id: "",
                payer_id: "",
                customer: "",
                status_payment: "",
                payment_method: "",
                status_order: "",
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            order: nextProps.order
        })   
    }

    componentDidMount() {
        this.getOrder();
    }

    getOrder = async () => {
        try {
            await this.props.dispatch(getOrder(
                this.props.match.params.order_id
            ))
        } catch (er) {
            this.props.history.push("/storers/orders");
        }
    }

    onClickStatus = (curData, status) => () => {
        this.setState({
            order: {
                ...this.state.order,
                [curData.key]: status
            }
        })
    }

    handleSubmitForm = async (data) => {
        try {
            await this.props.dispatch(editOrder({ ...this.state.order, ...data }));
            message.success("Edit successful!");
        } catch(er) {
            message.error("Edit failed!");
        }
    }

    render() {
        return (
            <div className="OrderDetail">
                OrderDetail
                <FormOrder
                    onSubmitForm={this.handleSubmitForm}
                    data={this.state.order}
                    onClickStatus={this.onClickStatus}
                    isChanged={JSON.stringify(this.props.order) !== JSON.stringify(this.state.order)}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    order: state.storers.orders.orderDetail
}))(OrderDetail);