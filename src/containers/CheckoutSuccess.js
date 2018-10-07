import React from "react";

import { _url } from "config/utils";




class CheckoutSuccess extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CheckoutSuccess">
                <section className="section-padding bg-dark inner-header klb-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">Checkout Success</h1>
                                <div className="breadcrumbs"><p className="mb-0 text-white"><a className="text-white" href="http://klbtheme.com/groci" title="Home" rel="bookmark">Home</a> / <span className="text-white">Checkout success</span></p></div>             </div>
                        </div>
                    </div>
                </section>


                <section className="checkout-page section-padding">
                    <div className="container">
                        <div className="woocommerce">
                            <div className="woocommerce-order">
                                <p className="woocommerce-notice woocommerce-notice--success woocommerce-thankyou-order-received">Thank you. Your
                order has been received.</p>
                                <ul className="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
                                    <li className="woocommerce-order-overview__order order">
                                        Order number: <strong>299</strong>
                                    </li>
                                    <li className="woocommerce-order-overview__date date">
                                        Date: <strong>September 30, 2018</strong>
                                    </li>
                                    <li className="woocommerce-order-overview__total total">
                                        Total: <strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>18.00</span></strong>
                                    </li>
                                    <li className="woocommerce-order-overview__payment-method method">
                                        Payment method: <strong>Direct bank transfer</strong>
                                    </li>
                                </ul>
                                <section className="woocommerce-order-details">
                                    <h2 className="woocommerce-order-details__title">Order details</h2>
                                    <table className="woocommerce-table woocommerce-table--order-details shop_table order_details">
                                        <thead>
                                            <tr>
                                                <th className="woocommerce-table__product-name product-name">Product</th>
                                                <th className="woocommerce-table__product-table product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="woocommerce-table__line-item order_item">
                                                <td className="woocommerce-table__product-name product-name">
                                                    <a href="groci/product/organic-broccoli/">Organic Broccoli</a> <strong className="product-quantity">× 1</strong>
                                                </td>
                                                <td className="woocommerce-table__product-total product-total">
                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span>
                                                </td>
                                            </tr>
                                            <tr className="woocommerce-table__line-item order_item">
                                                <td className="woocommerce-table__product-name product-name">
                                                    <a href="groci/product/washed-sugar-snap-peas/">Washed Sugar Snap Peas</a> <strong className="product-quantity">×
                          1</strong> </td>
                                                <td className="woocommerce-table__product-total product-total">
                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>4.00</span>
                                                </td>
                                            </tr>
                                            <tr className="woocommerce-table__line-item order_item">
                                                <td className="woocommerce-table__product-name product-name">
                                                    <a href="groci/product/organic-strawberry/">Organic Strawberry</a> <strong className="product-quantity">× 1</strong>
                                                </td>
                                                <td className="woocommerce-table__product-total product-total">
                                                    <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>7.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th scope="row">Subtotal:</th>
                                                <td><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>18.00</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Payment method:</th>
                                                <td>Direct bank transfer</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Total:</th>
                                                <td><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>18.00</span></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default CheckoutSuccess;