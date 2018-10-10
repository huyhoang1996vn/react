import React from "react";

import { connect } from "react-redux";
import { _url } from "config/utils";

// Components
import {
    Delivery,
} from "components/layouts"

import {
    SliderProducts
} from "components/slider"

// actions
import {
    getProductsByCategory
} from "actions/products";

class CategoryProducts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.category_id !== this.props.match.params.category_id)
            this.getProducts(nextProps.match.params.category_id);
    }

    componentWillMount() {
        this.getProducts(this.props.match.params.category_id);
    }

    getProducts = (category_id) => {
        this.props.dispatch(getProductsByCategory(category_id));
    }

    render() {
        return (
            <div className="CategoryProducts">
                <SliderProducts 
                    products={this.props.categoryProducts.products}
                />
                <Delivery />
            </div>
        )
    }
}

export default connect((store) => ({
    categoryProducts: store.products.categoryProducts,
}))(CategoryProducts);