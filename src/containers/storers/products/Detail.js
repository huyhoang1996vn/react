import React from "react";
import { connect } from "react-redux";
import { message } from "antd";

// components
import { FormProduct } from "./index";


// actions 
import {
    getProduct,
    updateProduct
} from "actions/storers/products";
import {
    getCategories
} from "actions/categories";


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                picture: "",
                name: "",
                expire_date: "",
                created: "",
                price: "",
                tax: "",
                is_active: "",
                status: "",
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            await this.props.dispatch(getCategories());
            await this.props.dispatch(getProduct(
                this.props.match.params.product_id
            ));

        } catch (er) {
            this.props.history.push("/storers/products");
        }
    }

    onClickStatus = (curData, status) => () => {
        this.setState({
            product: {
                ...this.state.product,
                [curData.key]: status
            }
        })
    }

    handleSubmitForm = async (data) => {
        try {
            let form_data = new FormData();
            delete data.picture;
            Object.entries(data).forEach(([key, value]) => {
                if (key === "image") {
                    value.forEach(image => {
                        form_data.append(key, new Blob([image]), image.name);
                    })
                } else {
                    form_data.append(key, value);
                }
            })
            
            await this.props.dispatch(updateProduct(
                this.state.product.id,
                form_data
            ));
            message.success("Edit successful!");
        } catch (er) {
            message.error("Edit failed!");
        }
    }

    handleChangeItem = (key, data) => {
        // if (key == "picture") {
        //     this.form_data.append(key, data);
        // }
        this.setState({
            product: {
                ...this.state.product,
                [key]: data
            }
        })
    }

    render() {
        return (
            <div className="ProductDetail">
                Product Detail
                <FormProduct
                    categories={this.props.categories}
                    onSubmitForm={this.handleSubmitForm}
                    data={this.state.product}
                    onClickStatus={this.onClickStatus}
                    onChangeItem={this.handleChangeItem}
                    type="Edit"
                // isChanged={JSON.stringify(this.props.order) !== JSON.stringify(this.state.order)}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    product: state.storers.products.productDetail,
    categories: state.categories
}))(ProductDetail);