import React from "react";
import { connect } from "react-redux";

// components
import { FormOrder } from "./index";


// actions 
import {
    getOrder
} from "actions/storers";



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

    static getDerivedStateFromProps(props, state) {
        return {
            order: props.order
        }
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
        console.log(curData, status);
    }

    render() {
        return (
            <div className="OrderDetail">
                OrderDetail
                <FormOrder
                    data={this.state.order}
                    onClickStatus={this.onClickStatus}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    order: state.storers.orders.orderDetail
}))(OrderDetail);