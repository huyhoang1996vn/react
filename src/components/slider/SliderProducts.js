import React from "react";

import { _staticUrl } from "config/utils";


// Components

class SliderProducts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SliderProducts">
                <div className="container">
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <section className="product-items-slider section-padding">
                                        <div className="section-header">
                                            <h5 className="heading-design-h5">Top Savers Today <span className="badge badge-primary" style={{ backgroundColor: '#007bff' }}>20%
                        OFF</span><a className="float-right text-secondary" href="#" title="View All" target=" _blank">View All</a></h5>
                                        </div>
                                        <div className="owl-carousel owl-carousel-featured">
                                            <div className="item">
                                                <div className="product">
                                                    <div className="product-header"><span className="badge badge-success">30%</span><a href="/product/organic-broccoli/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg")} alt="Organic Broccoli" /></a><span className="veg text-success mdi mdi-circle" /></div>
                                                    <div className="product-body"><a href="/product/organic-broccoli/">
                                                        <h5>Organic Broccoli</h5>
                                                    </a>
                                                        <h6><strong><span className="mdi mdi-approval text-success" /> In Stock</strong> - 1 kg</h6>
                                                    </div>
                                                    <div className="product-footer">
                                                        <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                            <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a href="/?add-to-cart=63" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product">
                                                    <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><a href="/product/washed-sugar-snap-peas/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg")} alt="Washed Sugar Snap Peas" /></a><span className="veg text-success mdi mdi-circle" /></div>
                                                    <div className="product-body"><a href="/product/washed-sugar-snap-peas/">
                                                        <h5>Washed Sugar Snap Peas</h5>
                                                    </a>
                                                        <h6><strong><span className="mdi mdi-approval text-success" /> In Stock</strong> - 1 kg</h6>
                                                    </div>
                                                    <div className="product-footer">
                                                        <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></del>
                                                            <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>4.00</span></ins></p><a href="/?add-to-cart=61" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product">
                                                    <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span className="badge badge-success">70%</span><a href="/product/organic-italian-parsley/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg")} alt="Organic Italian Parsley" /></a><span className="non-veg text-danger mdi mdi-circle" /></div>
                                                    <div className="product-body"><a href="/product/organic-italian-parsley/">
                                                        <h5>Organic Italian Parsley</h5>
                                                    </a>
                                                        <h6><strong><span className="mdi mdi-approval" /> Out of stock</strong></h6>
                                                    </div>
                                                    <div className="product-footer">
                                                        <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                            <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>3.00</span></ins></p><a href="/product/organic-italian-parsley/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product">
                                                    <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span className="badge badge-success">70%</span><span className="badge badge-success">42%</span><a href="/product/organic-strawberry/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg")} alt="Organic Strawberry" /></a><span className="veg text-success mdi mdi-circle" /></div>
                                                    <div className="product-body"><a href="/product/organic-strawberry/">
                                                        <h5>Organic Strawberry</h5>
                                                    </a>
                                                        <h6><strong><span className="mdi mdi-approval text-success" /> In Stock</strong> - 1 kg</h6>
                                                    </div>
                                                    <div className="product-footer">
                                                        <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>12.00</span></del>
                                                            <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a href="/?add-to-cart=59" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product">
                                                    <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><a href="/product/organic-vegetable/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg")} alt="Organic Vegetable" /></a><span className="non-veg text-danger mdi mdi-circle" /></div>
                                                    <div className="product-body"><a href="/product/organic-vegetable/">
                                                        <h5>Organic Vegetable</h5>
                                                    </a>
                                                        <h6><strong><span className="mdi mdi-approval" /> Out of stock</strong></h6>
                                                    </div>
                                                    <div className="product-footer">
                                                        <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                            <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></ins></p><a href="/product/organic-vegetable/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Read more</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="product">
                                                    <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><span className="badge badge-success">38%</span><a href="/product/jumbo-rainier-cherries/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg")} alt="Jumbo Rainier Cherries" /></a><span className="veg text-success mdi mdi-circle" /></div>
                                                    <div className="product-body"><a href="/product/jumbo-rainier-cherries/">
                                                        <h5>Jumbo Rainier Cherries</h5>
                                                    </a>
                                                        <h6><strong><span className="mdi mdi-approval text-success" /> In Stock</strong> - 1 kg</h6>
                                                    </div>
                                                    <div className="product-footer">
                                                        <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>80.00</span></del>
                                                            <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>50.00</span></ins></p><a href="/?add-to-cart=29" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
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

export default SliderProducts;