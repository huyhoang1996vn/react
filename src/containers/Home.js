import React from "react";
import { connect } from "react-redux";

import { _url } from "config/utils";

// Components
import {
    Header,
    Footer,
    Delivery,
} from "components/layouts"

import {
    SliderMain,
    SliderMini,
    SliderProducts
} from "components/slider"

// actions 
import {
    getTopProducts,
    getByCategory
} from "actions/products";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        if (props.userAuth && props.userAuth.role && props.userAuth.role !== 'customer') {
            window.location.href = "/login"
        }
    }

    componentDidMount() {
        document.getElementById("btn-run-slider").click();
        
    }

    render() {
        return (
            <div className="Home">
                <SliderMain />
                <SliderMini 
                    products={this.props.products.topPropducts}
                />
                <SliderProducts 
                    products={this.props.products.topPropducts}
                />
                <Delivery />
                <div className="item-hidden" id="btn-run-slider">CLICK</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAuth: state.session.userAuth.data,
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    dispatch(getTopProducts());  
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);