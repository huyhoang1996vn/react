import React from "react";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { _staticUrl } from "config/utils";

// actions 
import {
    authLogout
} from "actions/auth";
import {
    getCategories
} from "actions/products";

import {
    getCart,
    updateItemInCart
} from "actions/cart";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userAuth.token !== this.props.userAuth.token) {
            this.props.dispatch(getCart());
        }
    }

    componentWillMount() {
        this.props.dispatch(getCategories());
    }

    onSubmitSearch = (e) => {
        e.preventDefault();
        // trc tien phai get dc du lieu trong form search
        // Di tim form search :))
        // Dung document.getElementById la cach de nhat
        const text = document.getElementById("form-search-input");
        // Kiem tra neu co thi search k thi k search
        if (text.value !== "") {
            this.props.history.push("/search/" + text.value);
        }
    }

    onClickLogout = (e) => {
        e.preventDefault();
        this.props.dispatch(authLogout());
    }

    onClickRemoveItem = item => e => {
        e.preventDefault();
        this.props.dispatch(updateItemInCart({
            ...item,
            quanlity: 0
        }))
    }

    onChangeQuantityItemCart = (item) => e => {
        if (e.target.value && Math.abs(item.quanlity - e.target.value) == 1 ) {
            this.props.dispatch(updateItemInCart({
                ...item,
                quanlity: e.target.value
            })) 
        }
    }

    render() {
        const { cart } = this.props;
        const totalCartAmount = cart.items.reduce((cur, next) => cur + +next.quanlity * +next.product.price, 0);
        return (
            <div className="Header">
                <div className="navbar-top pt-2 pb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <a href="/shop" className="mb-0 text-white">
                                    20% cashback for all users | Code: <strong><span className="text-light">OGOFERS13 <span className="mdi mdi-tag-faces" /></span>
                                    </strong> </a>
                            </div>
                            <div className="col-md-6 text-right top-right-menu">
                                {
                                    this.props.userAuth.token === "" ?
                                        <ul id="menu-top-right" className="nav-top-right list-inline t-md-right">
                                            <li id="menu-item-260" className="mdi mdi-lock menu-item menu-item-type-post_type menu-item-object-page menu-item-260"><Link to="/my-account/">Sign In</Link></li>
                                            <li id="menu-item-261" className="mdi mdi-account-circle menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><Link to="/my-account/">Sign Up</Link></li>
                                        </ul>
                                        :
                                        <ul id="menu-top-right" className="nav-top-right list-inline t-md-right">
                                            <li id="menu-item-261" className="mdi mdi-account-circle menu-item menu-item-type-post_type menu-item-object-page menu-item-261"><a role="button" tabIndex="0" onClick={this.onClickLogout}>Log out</a></li>
                                        </ul>
                                }

                            </div>
                        </div>
                    </div>
                </div>



                <nav className="navbar navbar-light navbar-expand-lg bg-dark bg-faded osahan-menu klb-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6 col-md-3 klb-clear order-xs-first">
                                <Link className="navbar-brand" to="/" title="Groci – Organic Food and Grocery Theme">
                                    <img src={_staticUrl("/groci/wp-content/uploads/2018/08/logo-1.png")} alt="Groci – Organic Food and Grocery Theme" />
                                </Link>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div style={{ width: "100%" }} className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto top-categories-search-main">
                                    <div className="top-categories-search">
                                        <form className="search-form woocommerce-product-search" role="search" id="searchform" onSubmit={this.onSubmitSearch} >
                                            <div className="input-group">
                                                <input className="form-control" type="text" name="s" id="form-search-input" placeholder="Enter Keyword Here ..." autoComplete="off" />
                                                <span className="input-group-btn-s">
                                                    <button className="btn btn-secondary" type="submit"><i className="mdi mdi-file-find" /> Search</button>
                                                    <input type="hidden" name="post_type" defaultValue="product" />
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-3 klb-main-nav-right order-xs-second">
                                <div className="my-lg-0">
                                    <ul className="list-inline main-nav-right">
                                        <li className="list-inline-item cart-btn">
                                            <a role="button" tabIndex="0" data-toggle="offcanvas" className="btn btn-link border-none"><i className="mdi mdi-cart" /> My Cart
                      <small className="cart-value cart-contents">{cart.items.length}</small></a>
                                        </li>
                                    </ul>
                                </div>
                                <button className="navbar-toggler navbar-toggler-white" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>




                <nav className="navbar navbar-expand-lg navbar-light osahan-menu-2 pad-none-mobile">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul id="menu-menu-1" className="navbar-nav mr-auto mt-2 mt-lg-0 margin-auto">
                                <li className="nav-item menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="/about-us">About
                  Us</a></li>
                                <li className="nav-item menu-item menu-item-type-taxonomy menu-item-object-product_cat"><a className="nav-link" href="/product-category/fruits-vegetables/">Headache
                  &amp; Stomatche</a></li>
                                <li className="nav-item dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"><a className="nav-link dropdown-toggle" href="/shop/">Shop</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/shop/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Products Grid</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-product"><a className="nav-link dropdown-item" href="/product/jumbo-rainier-cherries/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Product
                      Detail</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><Link className="nav-link dropdown-item" to="/my-account"><i className="mdi mdi-chevron-right" aria-hidden="true" /> My account</Link></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/checkout/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Checkout</a></li>
                                        <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link dropdown-item" href="/cart/"><i className="mdi mdi-chevron-right" aria-hidden="true" /> Cart</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"><a className="nav-link dropdown-toggle" href="#">Categories</a>
                                    <ul className="dropdown-menu">
                                        {
                                            this.props.categories.map(item => (
                                                <li key={item.id} className="nav-item menu-item menu-item-type-post_type menu-item-object-page">
                                                    <Link className="nav-link dropdown-item" to={`/category/${item.id}`}>
                                                        <i className="mdi mdi-chevron-right" aria-hidden="true" /> {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="/faq/">FAQ</a></li>
                                <li className="nav-item menu-item menu-item-type-post_type menu-item-object-page"><a className="nav-link" href="/contact-us/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="cart-sidebar">
                    <div className="cart-sidebar-header">
                        <h5>
                            My Cart <span className="text-success">({cart.items.length} items)</span> <a role="button" tabIndex="0" data-toggle="offcanvas" className="float-right"><i className="mdi mdi-close" />
                            </a>
                        </h5>
                    </div>
                    <div className="cart-sidebar-body cart_list product_list_widget">
                        {
                            cart.items.map((cartItem, index) => (
                                <div key={index} className="cart-list-product">
                                    <a onClick={this.onClickRemoveItem(cartItem)} className="float-right remove-cart" ><i className="mdi mdi-close" /></a>
                                    <img className="img-fluid" src={cartItem.product.picture[0].image || _staticUrl("/groci/wp-content/uploads/2018/08/1-1.jpg")} alt="Washed Sugar Snap Peas" />
                                    <span className="badge badge-success">20 % OFF</span>
                                    <h5><Link to={`/product/${cartItem.product.id}`}>{cartItem.product.name}</Link></h5>
                                    <h6><strong><span className="mdi mdi-approval" /> </strong> - 1 kg</h6>
                                    <p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>5.00</span></del> <ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{cartItem.product.price}</span></ins></p>
                                    <div>
                                        <input onChange={this.onChangeQuantityItemCart(cartItem)} type="number" value={cartItem.quanlity}/>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="cart-sidebar-footer">
                            <div className="cart-store-details">
                                <p>Sub Total <strong className="float-right"><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{totalCartAmount}</span></strong></p>
                                <p>Delivery Charges <strong className="float-right text-danger">Free!</strong></p>
                            </div>
                            <Link to="/checkout"><button className="btn btn-secondary btn-lg btn-block text-left" type="button">
                                <span className="float-left"><i className="mdi mdi-cart-outline" /> Proceed to Checkout </span><span className="float-right"><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{totalCartAmount}</span></strong> <span className="mdi mdi-chevron-right" /></span></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        userAuth: store.session.userAuth,
        categories: store.products.categories,
        cart: store.cart
    }
}


export default connect(mapStateToProps)(withRouter(Header));