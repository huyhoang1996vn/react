import React from "react";
import { connect } from "react-redux";
import { message } from "antd";

// components
import { FormProduct } from "./index";


// actions 
import {
    getProduct,
} from "actions/storers/products";


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                picture: "",
                name: "",
                expire_date: "",
                stores: "",
                created: "",
                price: "",
                tax: "",
                is_active: "",
                status: "",
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            product: nextProps.product
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            await this.props.dispatch(getProduct(
                this.props.match.params.product_id
            ))
        } catch (er) {
            this.props.history.push("/storers/products");
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
            await this.props.dispatch(getProduct({ ...this.state.order, ...data }));
            message.success("Edit successful!");
        } catch (er) {
            message.error("Edit failed!");
        }
    }

    render() {
        return (
            <div className="ProductDetail">
                ProductDetail
                <FormProduct
                    onSubmitForm={this.handleSubmitForm}
                    data={this.state.product}
                    onClickStatus={this.onClickStatus}
                // isChanged={JSON.stringify(this.props.order) !== JSON.stringify(this.state.order)}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    product: state.storers.products.productDetail
}))(ProductDetail);