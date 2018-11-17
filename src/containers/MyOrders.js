import React from "react";
import { connect } from "react-redux";
import { Steps, Button, Card, Tag, Divider } from 'antd';

import { _url, _staticUrl } from "config/utils";
import { STATUSES_ORDER, STATUS_COLOR } from "constants/index";
import { formatVnd } from "../constants/func.utils";

// actions
import {
    getOrders
} from "actions/orders";

const Step = Steps.Step;



const ordersStatus = (status) => (order) => order.status_order == status

class MyOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            ordersOnStep: [],
        }

        !props.isLogged && props.history.push("/my-account");
    }

    componentDidMount() {
        this.props.dispatch(getOrders());
        this.chooseOrder(STATUSES_ORDER.status_order[this.state.step])
    }

    chooseOrder = status => {
        let step = STATUSES_ORDER.status_order.indexOf(status);
        let ordersOnStep = this.props.orders.filter(ordersStatus(status))
        this.setState({
            step,
            ordersOnStep
        })
    }

    onClickSteper = (status) => () => {
        this.chooseOrder(status);
    }

    render() {
        return (
            <div className="MyOrders">
                <section className="section-padding bg-dark inner-header klb-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">My Orders</h1>
                                <div className="breadcrumbs"><p className="mb-0 text-white"><a className="text-white" href="http://klbtheme.com/groci" title="Home" rel="bookmark">Home</a> / <span className="text-white">Checkout success</span></p></div>             </div>
                        </div>
                    </div>
                </section>


                <section className="checkout-page section-padding">
                    <div className="container">
                        <div className="woocommerce">
                            <Steps current={this.state.step}>
                                {
                                    STATUSES_ORDER.status_order.map(status => (
                                        <Step key={status} title={<Button onClick={this.onClickSteper(status)} >{status}</Button>} description={"Orders " + status} />
                                    ))
                                }
                            </Steps>

                            <div className="steps-content">
                                {
                                    this.state.ordersOnStep.map(order => (
                                        <Card
                                            key={order.id}
                                            title={order.store}
                                            extra={<b>Payment: <Tag color={STATUS_COLOR[order.status_payment]} >{order.status_payment}</Tag></b>}
                                            style={{ marginBottom: "15px" }}
                                        >
                                            {
                                                order.products.map(product => (
                                                    <div key={product.id}>
                                                        <div className="row">
                                                            <div className="col-md-2">
                                                                <img style={{ width: "100%" }} src={_staticUrl("/groci/wp-content/uploads/2018/08/1-1.jpg")} alt=""/>
                                                            </div>
                                                            <div className="col-md-10">
                                                                <h3>{product.name}</h3>
                                                                <p>{product.detail}</p>
                                                                <h4>{formatVnd(product.price)}</h4>
                                                            </div>
                                                        </div>
                                                        <Divider />
                                                    </div>        
                                                ))
                                            }
                                            <h1 className="text-right">{formatVnd(order.money)}</h1>
                                        </Card>
                                    ))
                                }
                                {
                                     this.state.ordersOnStep.length == 0 && <p>No order with this status</p>
                                }
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default connect((state) => ({
    orders: state.orders,
    isLogged: state.session.userAuth.token !== ""
}))(MyOrders);