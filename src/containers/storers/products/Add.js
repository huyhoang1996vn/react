import React from "react";
import { connect } from "react-redux";
import { message } from "antd";

// components
import { FormProduct } from "./index";


// actions 
import {
    addProduct
} from "actions/storers/products";
import {
    getCategories
} from "actions/categories";


class AddProduct extends React.Component {
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
                is_active: true,
                status: "still",
            }
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            await this.props.dispatch(getCategories());
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
                        form_data.append(key, new Blob([image], { type: 'image/jpg' }), image.name);
                    })
                } else {
                    form_data.append(key, value);
                }
            })
            
            await this.props.dispatch(addProduct(form_data));
            message.success("Edit successful!");
        } catch (er) {
            message.error("Edit failed!");
        }
    }

    handleChangeItem = (key, data) => {
        this.setState({
            product: {
                ...this.state.product,
                [key]: data
            }
        })
    }

    render() {
        return (
            <div className="AddProduct">
                Add Product
                <FormProduct
                    categories={this.props.categories}
                    onSubmitForm={this.handleSubmitForm}
                    data={this.state.product}
                    onClickStatus={this.onClickStatus}
                    onChangeItem={this.handleChangeItem}
                    type="Add"
                />
            </div>
        )
    }
}

export default connect((state) => ({
    categories: state.categories
}))(AddProduct);