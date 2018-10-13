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

//action
import{
    searchProductsByName
} from "actions/products";
import { constants } from "fs";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(nextProps) {
        // Search lan thu 2 se k dc vi minh chua xu li o day
        // Day la xu li khi user dang o trang search ma tiep tuc search voi tu khoa khac :)))
        // this.handleSearch(nextProps.match.params.keyword);
        // check keyword moi neu khac keyword cu thi search
        // nextProps la cai props moi
        // this.porps la cai props cu
        if (nextProps.match.params.keyword !== this.props.match.params.keyword) {
            // Khac nhau thi search
            this.handleSearch(nextProps.match.params.keyword);
        }
    }

    componentDidMount() {
        // Lay text trong url search
        this.handleSearch(this.props.match.params.keyword);
    }

    handleSearch = keyword => {
        // Ta goi api search o day
        // Api nam trong action
        // action cua minh la searchProductsByName(keyword)
        // ham dispatch nay dung de chay action
        this.props.dispatch(searchProductsByName(keyword)); 
    }

    render() {
        return (
            <div className="Search">
                <SliderProducts 
                    products={this.props.products.searchedProducts}
                />
                <Delivery />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    // dispatch(searchProductsByName());  // Cai ni vo li vi search sao k truyen keyword vao :)))
    return {
        dispatch
    }
}

// cho nay can connect toi redux de co dc dispatch
// Ham connect nay co 2 tham so la chuyen state tu store zo props
// va 1 ham lay dispatch cua redux de goi action
// Connect thi ta moi lay dc products search trong reudcers

export default connect(mapStateToProps, mapDispatchToProps)(Search);