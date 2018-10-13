import React from "react";
import { connect } from "react-redux";

// actions
import {
    getCart,
    addNewItemToCart,
    updateItemInCart,
    postCart
} from "actions/cart";

const withCartProductHOC = (WrappComponent) => {
    class Hoc extends React.Component {
        render() {
            return (
                <WrappComponent
                    {...this.props}
                />
            )
        }
    }


    const mapStateToProps = (state) => ({});
    return connect(mapStateToProps, {
        getCart,
        addNewItemToCart,
        updateItemInCart,
        postCart
    })(Hoc);
}

export default withCartProductHOC;