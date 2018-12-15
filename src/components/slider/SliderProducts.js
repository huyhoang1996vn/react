import React from "react";
import { Link } from "react-router-dom";

import { _staticUrl, _apiUrl } from "config/utils";
import uuid from "uuid";
import { formatVnd } from "constants/func.utils";

// Components
import {
    withCartProductHOC
} from "components/HOC";


class SliderProducts extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddToCart = product => e => {
        e.preventDefault();
        this.props.addNewItemToCart(product);
    }

    render() {
        let listProducts = this.props.products.map(item => {
            let urlImage = _staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg");
            if (item.picture && item.picture[0] && item.picture[0].image) {
                if (!~item.picture[0].image.indexOf("http")) {
                    urlImage = _apiUrl(item.picture[0].image);
                } else {
                    urlImage = item.picture[0].image;
                }
                
            }
            return (
                <div className="item" key={item.id || item}
                    style={{ minWidth: "200px", width: "1px", alignSelf: "stretch" }}>
                    <div className="product">
                        <div className="product-header">
                            {/* <span className="badge badge-success">30%</span> */}
                            <Link to={`/product/${item.id}/`}>
                                <img
                                    className="img-fluid"
                                    src={urlImage}
                                    alt="Organic Broccoli" />
                            </Link>
                            <span className="veg text-success mdi mdi-circle" />
                        </div>
                        <div className="product-body"><a href="/product/organic-broccoli/">
                            <h5>{item.name.slice(0, 20)}...</h5>
                        </a>
                            <h6><strong><span className="mdi mdi-approval text-success" /> In Stock</strong> - 1 kg</h6>
                        </div>
                        <div className="product-footer">
                            <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol"></span></span></del>
                                <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{formatVnd(item.price)}</span></ins></p><a onClick={this.onAddToCart(item)} className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Add to cart</a>
                        </div>
                    </div>
                </div>)
        })
        return (
            <div className="SliderProducts">
                <div className="container">
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <section className="product-items-slider section-padding">
                                        <div className="section-header">
                                            <h5 className="heading-design-h5">{this.props.titleSlider || "Products"}
                                            <a className="float-right text-secondary" href="/" title="View All">View All</a></h5>
                                        </div>
                                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                            {listProducts}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withCartProductHOC(SliderProducts);