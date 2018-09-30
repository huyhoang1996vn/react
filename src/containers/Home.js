import React from "react";

import { _url } from "config/utils";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <header className="Header">
                    <div className="Header__mini">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <span>20% cashback for all users | Code: <b>OGOFERS13</b></span>
                                </div>
                                <div className="col-md-6 text-right">
                                    <a href=""><i className="fas fa-sign-in-alt"></i> Sign In</a>
                                    <a href=""><i className="fas fa-sign-out-alt"></i> Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Header__main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="logo"><img src={_url("/assets/images/logo.png")} alt="" /></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="Header__main__search">
                                        <div className="Header__main__search--input">
                                            <input type="text" placeholder="Enter Keyword Here ..." />
                                        </div>
                                        <div className="Header__main__search--btn">
                                            <button className="btn__main"><i className="fas fa-search"></i> SEARCH</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-right">
                                    <div className="Header__main__cart btn btn-link border-none" datatoggle="offcanvas">
                                        <span><i className="fas fa-cart-plus"></i> <span className="Header__main__cart--num-items">3</span> My Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <nav className="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile" style={{ margin: "0" }}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul id="menu-menu-1" className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                                <li className="nav-item menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active"><a
                                    className="nav-link" href="http://klbtheme.com/groci/">Home</a></li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="http://klbtheme.com/groci/about-us/">About
							Us</a></li>
                                <li className="nav-item menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a className="nav-link" href="http://klbtheme.com/groci/product-category/fruits-vegetables/">Fruits
							&amp; Vegetables</a></li>
                                <li className="nav-item dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a
                                    className="nav-link dropdown-toggle" href="http://klbtheme.com/groci/shop/">Shop</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/shop/"><i className="fas fa-caret-right"></i> Products Grid</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-product"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/"><i className="fas fa-caret-right"></i>
                                            Product Detail</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/my-account/"><i className="fas fa-caret-right"></i> My
									account</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/checkout/"><i className="fas fa-caret-right"></i> Checkout</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/cart/"><i className="fas fa-caret-right"></i> Cart</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a
                                    className="nav-link dropdown-toggle" href="http://klbtheme.com/groci/#">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/blog/"><i className="fas fa-caret-right"></i> Blog List</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-post"><a className="nav-link dropdown-item"
                                            href="http://klbtheme.com/groci/blog/2018/08/12/restaurant-employer-read-clients-orders-on-his-ipad/"><i className="fas fa-caret-right"></i> Blog Detail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="http://klbtheme.com/groci/faq/">FAQ</a></li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="http://klbtheme.com/groci/contact-us/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" className="vc_row wpb_row vc_row-fluid vc_custom_1533409668310 vc_row-has-fill vc_row-no-padding"
                    style={{ position: "relative", left: "15px", boxSizing: "border-box", width: "1319px", margin: "0" }}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner  ">
                            <div className="wpb_wrapper">
                                <section className="carousel-slider-main text-center">
                                    <div className="owl-carousel owl-carousel-slider owl-theme" style={{ opacity: 1, display: "block", }}>
                                        <div className="owl-wrapper-outer">
                                            <div className="owl-wrapper" style={{ "width": "5396px", "left": "0px", "display": "block", "transition": "all 800ms ease 0s", "transform": "translate3d(-1349px, 0px, 0px)" }}>
                                                <div className="owl-item" style={{ width: "1349px" }}>
                                                    <div className="item"><a href="http://klbtheme.com/groci/shop/" target=" _blank" title="slider1"><img className="img-fluid"
                                                        src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/slider1.jpg" alt="slide" /></a></div>
                                                </div>
                                                <div className="owl-item" style={{ width: "1349px" }}>
                                                    <div className="item"><a href="http://klbtheme.com/groci/product/green-seedless-grapes/" target=" _blank" title="slider2"><img
                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/slider2.jpg" alt="slide" /></a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-controls clickable">
                                            <div className="owl-pagination">
                                                <div className="owl-page"><span className=""></span></div>
                                                <div className="owl-page active"><span className=""></span></div>
                                            </div>
                                            <div className="owl-buttons">
                                                <div className="owl-prev"><i className="fas fa-caret-left"></i></div>
                                                <div className="owl-next"><i className="fas fa-caret-right"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1535439900603 vc_row-has-fill"
                        style={{ "position": "relative", "left": "-89.5px", "boxSizing": "border-box", "width": "1319px", "paddingLeft": "89.5px", "paddingRight": "89.5px" }}>
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="top-category klb-product-cat">
                                        <div className="owl-carousel owl-carousel-category owl-theme" style={{ "opacity": "1", "display": "block" }}>
                                            <div className="owl-wrapper-outer">
                                                <div className="owl-wrapper" style={{ "width": "3336px", "left": "0px", "display": "block", "transition": "all 1000ms ease 0s", "transform": "translate3d(0px, 0px, 0px)" }}>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/beverages/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/3-3.jpg" alt="" />
                                                                <h6>Beverages</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/biscuits-snacks-chocolates/"><img
                                                                className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/9-2.jpg" alt="" />
                                                                <h6>Biscuits, Snacks &amp; Chocolates</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/breakfast-dairy/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/8-2.jpg" alt="" />
                                                                <h6>Breakfast &amp; Dairy</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/fruits-vegetables/"><img
                                                                className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/1-4.jpg" alt="" />
                                                                <h6>Fruits &amp; Vegetables</h6>
                                                                <p>12 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/furnishing-home-needs/"><img
                                                                className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/5-2.jpg" alt="" />
                                                                <h6>Furnishing &amp; Home Needs</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/grocery-staples/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/2-4.jpg" alt="" />
                                                                <h6>Grocery &amp; Staples</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/home-kitchen/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/4-2.jpg" alt="" />
                                                                <h6>Home &amp; Kitchen</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/household-needs/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/6-2.jpg" alt="" />
                                                                <h6>Household Needs</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/meats-frozen-seafood/"><img
                                                                className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/12-2.jpg" alt="" />
                                                                <h6>Meats, Frozen &amp; Seafood</h6>
                                                                <p>2 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/noodles-sauces-instant-food/"><img
                                                                className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/10-2.jpg" alt="" />
                                                                <h6>Noodles, Sauces &amp; Instant Food</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/personal-care/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/7-2.jpg" alt="" />
                                                                <h6>Personal Care</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "139px" }}>
                                                        <div className="item">
                                                            <div className="category-item"><a href="http://klbtheme.com/groci/product-category/pet-care/"><img className="img-fluid"
                                                                src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/11-2.jpg" alt="" />
                                                                <h6>Pet Care</h6>
                                                                <p>1 Items</p>
                                                            </a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-controls clickable">
                                                <div className="owl-buttons">
                                                    <div className="owl-prev"><i className="fas fa-caret-left"></i></div>
                                                    <div className="owl-next"><i className="fas fa-caret-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix"></div>
                </div>



                <div className="container">
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <section className="product-items-slider section-padding">
                                        <div className="section-header">
                                            <h5 className="heading-design-h5">Top Savers Today <span className="badge badge-primary" style={{ "backgroundColor": "#007bff" }}>20%
										OFF</span><a className="float-right text-secondary" href="http://klbtheme.com/groci/#" title="View All" target=" _blank">View
										All</a></h5>
                                        </div>
                                        <div className="owl-carousel owl-carousel-featured owl-theme" style={{ "opacity": "1", "display": "block" }}>
                                            <div className="owl-wrapper-outer">
                                                <div className="owl-wrapper" style={{ "width": "2664px", "left": "0px", "display": "block", "transition": "all 200ms ease 0s", "transform": "translate3d(-222px, 0px, 0px)" }}>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><a href="http://klbtheme.com/groci/product/organic-broccoli/"><img
                                                                    className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/1-1.jpg" alt="Organic Broccoli" /></a><span
                                                                        className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-broccoli/">
                                                                    <h5>Organic Broccoli</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=63" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><a
                                                                    href="http://klbtheme.com/groci/product/washed-sugar-snap-peas/"><img className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/2-1.jpg"
                                                                        alt="Washed Sugar Snap Peas" /></a><span className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/washed-sugar-snap-peas/">
                                                                    <h5>Washed Sugar Snap Peas</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>4.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=61" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><a href="http://klbtheme.com/groci/product/organic-italian-parsley/"><img
                                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/3-1.jpg" alt="Organic Italian Parsley" /></a><span
                                                                            className="non-veg text-danger mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-italian-parsley/">
                                                                    <h5>Organic Italian Parsley</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval"><i className="fas fa-check-circle"></i></span> Out of stock</strong></h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>3.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/product/organic-italian-parsley/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Read more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><a href="http://klbtheme.com/groci/product/organic-strawberry/"><img
                                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/4-1.jpg" alt="Organic Strawberry" /></a><span
                                                                            className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-strawberry/">
                                                                    <h5>Organic Strawberry</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>12.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=59" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><a
                                                                        href="http://klbtheme.com/groci/product/organic-vegetable/"><img className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/5-1.jpg"
                                                                            alt="Organic Vegetable" /></a><span className="non-veg text-danger mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-vegetable/">
                                                                    <h5>Organic Vegetable</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval"><i className="fas fa-check-circle"></i></span> Out of stock</strong></h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/product/organic-vegetable/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Read more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><span
                                                                        className="badge badge-success">38%</span><a href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/"><img
                                                                            className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/6-1.jpg" alt="Jumbo Rainier Cherries" /></a><span
                                                                                className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/">
                                                                    <h5>Jumbo Rainier Cherries</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>80.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>50.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=29" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-controls clickable">
                                                <div className="owl-buttons">
                                                    <div className="owl-prev"><i className="fas fa-caret-left"></i></div>
                                                    <div className="owl-next"><i className="fas fa-caret-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <section className="product-items-slider section-padding">
                                        <div className="section-header">
                                            <h5 className="heading-design-h5">Top Savers Today <span className="badge badge-primary" style={{ "backgroundColor": "#007bff" }}>20%
										OFF</span><a className="float-right text-secondary" href="http://klbtheme.com/groci/#" title="View All" target=" _blank">View
										All</a></h5>
                                        </div>
                                        <div className="owl-carousel owl-carousel-featured owl-theme" style={{ "opacity": "1", "display": "block" }}>
                                            <div className="owl-wrapper-outer">
                                                <div className="owl-wrapper" style={{ "width": "2664px", "left": "0px", "display": "block", "transition": "all 200ms ease 0s", "transform": "translate3d(-222px, 0px, 0px)" }}>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><a href="http://klbtheme.com/groci/product/organic-broccoli/"><img
                                                                    className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/1-1.jpg" alt="Organic Broccoli" /></a><span
                                                                        className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-broccoli/">
                                                                    <h5>Organic Broccoli</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=63" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><a
                                                                    href="http://klbtheme.com/groci/product/washed-sugar-snap-peas/"><img className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/2-1.jpg"
                                                                        alt="Washed Sugar Snap Peas" /></a><span className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/washed-sugar-snap-peas/">
                                                                    <h5>Washed Sugar Snap Peas</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>4.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=61" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><a href="http://klbtheme.com/groci/product/organic-italian-parsley/"><img
                                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/3-1.jpg" alt="Organic Italian Parsley" /></a><span
                                                                            className="non-veg text-danger mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-italian-parsley/">
                                                                    <h5>Organic Italian Parsley</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval"><i className="fas fa-check-circle"></i></span> Out of stock</strong></h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>3.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/product/organic-italian-parsley/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Read more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><a href="http://klbtheme.com/groci/product/organic-strawberry/"><img
                                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/4-1.jpg" alt="Organic Strawberry" /></a><span
                                                                            className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-strawberry/">
                                                                    <h5>Organic Strawberry</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>12.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=59" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><a
                                                                        href="http://klbtheme.com/groci/product/organic-vegetable/"><img className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/5-1.jpg"
                                                                            alt="Organic Vegetable" /></a><span className="non-veg text-danger mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-vegetable/">
                                                                    <h5>Organic Vegetable</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval"><i className="fas fa-check-circle"></i></span> Out of stock</strong></h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/product/organic-vegetable/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Read more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><span
                                                                        className="badge badge-success">38%</span><a href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/"><img
                                                                            className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/6-1.jpg" alt="Jumbo Rainier Cherries" /></a><span
                                                                                className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/">
                                                                    <h5>Jumbo Rainier Cherries</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>80.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>50.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=29" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-controls clickable">
                                                <div className="owl-buttons">
                                                    <div className="owl-prev"><i className="fas fa-caret-left"></i></div>
                                                    <div className="owl-next"><i className="fas fa-caret-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="vc_row wpb_row vc_row-fluid">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <section className="product-items-slider section-padding">
                                        <div className="section-header">
                                            <h5 className="heading-design-h5">Top Savers Today <span className="badge badge-primary" style={{ "backgroundColor": "#007bff" }}>20%
										OFF</span><a className="float-right text-secondary" href="http://klbtheme.com/groci/#" title="View All" target=" _blank">View
										All</a></h5>
                                        </div>
                                        <div className="owl-carousel owl-carousel-featured owl-theme" style={{ "opacity": "1", "display": "block" }}>
                                            <div className="owl-wrapper-outer">
                                                <div className="owl-wrapper" style={{ "width": "2664px", "left": "0px", "display": "block", "transition": "all 200ms ease 0s", "transform": "translate3d(-222px, 0px, 0px)" }}>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><a href="http://klbtheme.com/groci/product/organic-broccoli/"><img
                                                                    className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/1-1.jpg" alt="Organic Broccoli" /></a><span
                                                                        className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-broccoli/">
                                                                    <h5>Organic Broccoli</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=63" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><a
                                                                    href="http://klbtheme.com/groci/product/washed-sugar-snap-peas/"><img className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/2-1.jpg"
                                                                        alt="Washed Sugar Snap Peas" /></a><span className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/washed-sugar-snap-peas/">
                                                                    <h5>Washed Sugar Snap Peas</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>4.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=61" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><a href="http://klbtheme.com/groci/product/organic-italian-parsley/"><img
                                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/3-1.jpg" alt="Organic Italian Parsley" /></a><span
                                                                            className="non-veg text-danger mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-italian-parsley/">
                                                                    <h5>Organic Italian Parsley</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval"><i className="fas fa-check-circle"></i></span> Out of stock</strong></h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>3.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/product/organic-italian-parsley/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Read more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><a href="http://klbtheme.com/groci/product/organic-strawberry/"><img
                                                                        className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/4-1.jpg" alt="Organic Strawberry" /></a><span
                                                                            className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-strawberry/">
                                                                    <h5>Organic Strawberry</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>12.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=59" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><a
                                                                        href="http://klbtheme.com/groci/product/organic-vegetable/"><img className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/5-1.jpg"
                                                                            alt="Organic Vegetable" /></a><span className="non-veg text-danger mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/organic-vegetable/">
                                                                    <h5>Organic Vegetable</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval"><i className="fas fa-check-circle"></i></span> Out of stock</strong></h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/product/organic-vegetable/" className="btn btn-secondary outofstock btn-sm button product_type_simple ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Read more</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{ width: "222px" }}>
                                                        <div className="item">
                                                            <div className="product">
                                                                <div className="product-header"><span className="badge badge-success">30%</span><span className="badge badge-success">20%</span><span
                                                                    className="badge badge-success">70%</span><span className="badge badge-success">42%</span><span className="badge badge-success">50%</span><span
                                                                        className="badge badge-success">38%</span><a href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/"><img
                                                                            className="img-fluid" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/6-1.jpg" alt="Jumbo Rainier Cherries" /></a><span
                                                                                className="veg text-success mdi mdi-circle"><i className="fas fa-circle"></i></span></div>
                                                                <div className="product-body"><a href="http://klbtheme.com/groci/product/jumbo-rainier-cherries/">
                                                                    <h5>Jumbo Rainier Cherries</h5>
                                                                </a>
                                                                    <h6><strong><span className="mdi mdi-approval text-success"><i className="fas fa-check-circle"></i></span> In Stock</strong> - 1 kg</h6>
                                                                </div>
                                                                <div className="product-footer">
                                                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>80.00</span></del>
                                                                        <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>50.00</span></ins></p><a
                                                                            href="http://klbtheme.com/groci/?add-to-cart=29" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i
                                                                                className="fas fa-cart-plus"></i> Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-controls clickable">
                                                <div className="owl-buttons">
                                                    <div className="owl-prev"><i className="fas fa-caret-left"></i></div>
                                                    <div className="owl-next"><i className="fas fa-caret-right"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1533636970064 vc_row-has-fill"
                        style={{ "position": "relative", "left": "-89.5px", "boxSizing": "border-box", "width": "1319px", "paddingLeft": "89.5px", "paddingRight": "89.5px" }}>

                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  klb_xs_vc_custom_1534495490041">
                                <div className="wpb_wrapper">
                                    <div className="feature-box"><i className="fas fa-shipping-fast"></i>
                                        <h6>Free &amp; Next Day Delivery</h6>
                                        <p>Lorem ipsum dolor sit amet, cons...</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  klb_xs_vc_custom_1534495495125">
                                <div className="wpb_wrapper">
                                    <div className="feature-box"><i className="fas fa-shopping-basket"></i>
                                        <h6>100% Satisfaction Guarantee</h6>
                                        <p>Rorem Ipsum Dolor sit amet, cons...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="feature-box"><i className="fas fa-tags"></i>
                                        <h6>Great Daily Deals Discount</h6>
                                        <p>Lorem ipsum dolor sit amet, cons...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix"></div>
                </div>




                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="klbfooterwidget widget_text">
                                    <div className="textwidget">
                                        <p><img className="mb-4 mt-0 alignnone size-full wp-image-127" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/logo-footer-1.png"
                                            alt="" width="127" height="38" /></p>
                                        <p className="mb-0"><a className="text-dark" href="http://klbtheme.com/groci/#"><i className="fas fa-phone"></i> +61 525
									240 310</a></p>
                                        <p className="mb-0"><a className="text-dark" href="http://klbtheme.com/groci/#"><i className="fas fa-mobile-alt"></i>
                                            12345 67890, 56847-98562</a></p>
                                        <p className="mb-0"><a className="text-success" href="http://klbtheme.com/groci/#"><i className="fas fa-envelope"></i>
                                            yourmail@gmail.com</a></p>
                                        <p className="mb-0"><a className="text-primary" href="http://klbtheme.com/groci/#"><i className="fas fa-globe"></i>
                                            www.klbtheme.com</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <div className="klbfooterwidget widget_nav_menu">
                                    <h6 className="mb-4">TOP CITIES</h6>
                                    <div className="menu-top-cities-container">
                                        <ul id="menu-top-cities" className="menu">
                                            <li id="menu-item-181" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-181"><a href="http://klbtheme.com/groci/#">New
										Delhi</a></li>
                                            <li id="menu-item-198" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-198"><a href="http://klbtheme.com/groci/#">Bengaluru</a></li>
                                            <li id="menu-item-199" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-199"><a href="http://klbtheme.com/groci/#">Hyderabad</a></li>
                                            <li id="menu-item-200" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-200"><a href="http://klbtheme.com/groci/#">Kolkata</a></li>
                                            <li id="menu-item-201" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-201"><a href="http://klbtheme.com/groci/#">Gurugram</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <div className="klbfooterwidget widget_nav_menu">
                                    <h6 className="mb-4">CATEGORIES</h6>
                                    <div className="menu-categories-container">
                                        <ul id="menu-categories" className="menu">
                                            <li id="menu-item-206" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-206"><a
                                                href="http://klbtheme.com/groci/product-category/fruits-vegetables/">Vegetables</a></li>
                                            <li id="menu-item-207" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-207"><a href="http://klbtheme.com/groci/#">Grocery
										&amp; Staples</a></li>
                                            <li id="menu-item-208" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-208"><a href="http://klbtheme.com/groci/#">Breakfast
										&amp; Dairy</a></li>
                                            <li id="menu-item-209" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-209"><a href="http://klbtheme.com/groci/#">Soft
										Drinks</a></li>
                                            <li id="menu-item-210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-210"><a href="http://klbtheme.com/groci/#">Biscuits
										&amp; Cookies</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <div className="klbfooterwidget widget_nav_menu">
                                    <h6 className="mb-4">ABOUT US</h6>
                                    <div className="menu-about-us-container">
                                        <ul id="menu-about-us" className="menu">
                                            <li id="menu-item-225" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="http://klbtheme.com/groci/about-us/">Company
										Information</a></li>
                                            <li id="menu-item-202" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-202"><a href="http://klbtheme.com/groci/#">Careers</a></li>
                                            <li id="menu-item-203" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-203"><a href="http://klbtheme.com/groci/#">Store
										Location</a></li>
                                            <li id="menu-item-204" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-204"><a href="http://klbtheme.com/groci/#">Affillate
										Program</a></li>
                                            <li id="menu-item-205" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-205"><a href="http://klbtheme.com/groci/#">Copyright</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="klbfooterwidget widget_text">
                                    <h6 className="mb-4">Download App</h6>
                                    <div className="textwidget">
                                        <div className="app"><a href="http://klbtheme.com/groci/#"><img src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/google.png"
                                            alt="" /></a><a href="http://klbtheme.com/groci/#"><img src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/apple.png"
                                                alt="" /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="pt-4 pb-4 footer-bottom">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0 klbcopyright">
                                    Copyright 2018.KlbTheme . All rights reserved </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 text-right">
                                <img alt="payment-image" src="./Groci – Organic Food and Grocery Theme – KlbTheme_files/payment_methods.png" />
                            </div>
                        </div>
                    </div>
                </section>

                <div className="cart-sidebar">
                    <div className="cart-sidebar-header">
                        <h5>
                            My Cart <span className="text-success">(0 items)</span> <a datatoggle="offcanvas" className="float-right" href="http://klbtheme.com/groci/#"><i
                                className="mdi mdi-close"></i>
                            </a>
                        </h5>
                    </div>
                    <div className="cart-sidebar-body cart_list product_list_widget">
                        <div className="cart-list-product">
                            No products in the cart. </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home;