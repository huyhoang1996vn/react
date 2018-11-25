import React from "react";
import { connect } from "react-redux";
import { message } from "antd";
import qs from "qs";

import { _url } from "config/utils";
import { Link, withRouter } from "react-router-dom";
import request from "api/request";

import { vndToUsd } from "../constants/func.utils";

// actions 
import {
  getCart,
  orderProducts
} from "actions/cart"

const getIdEle = id => document.getElementById(id);
const totalCart = cart => cart.items.reduce((cur, next) => cur + +next.quantity * +next.product.price, 0);

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paypal: {
        TOKEN: null,
        PAYERID: null,
        currency: null,
        money: null,
      }
    }

    if (props.location.search) {
      // let body = props.location.search.slice(1).split("&").reduce((cur, next) => ({ ...cur, [next.split("=")[0]]: next.split("=")[1] }), {})
      let body = qs.parse(props.location.search.slice(1));
      body.list_order_code = eval(body.list_order_code);

      request().post("/paypal/payment/", body)
        .then(res => {
          if (res.data.message == "success") {
            this.coundown();
          }
        })
    }
  }

  coundown = (i = 3) => {
    if (i === 0) {
      return this.props.history.push("/my-orders");
    } else {
      message.success("Order successful, redirect to orders in " + i + "s");
      setTimeout(() => {
        this.coundown(i - 1)
      }, 1000);
    }
  }

  setPaypal = data => {
    this.setState({
      paypal: data
    })
    message.success("Now you can submit to make a payment with paypal!")
  }

  getBill = () => {
    const { cart } = this.props;
    const totalCartAmount = totalCart(cart);
    const bill = {
      "product": {
        ...cart.items.reduce((cur, next) => {
          return {
            ...cur,
            [next.product.stores[0] || next.product.stores]: [
              ...cur[next.product.stores[0] || next.product.stores] ? cur[next.product.stores[0] || next.product.stores] : [],
              {
                product_id: next.product.id,
                quantity: next.quantity,
              }
            ]
          }
        }, {}),
      },
      "money": parseFloat(totalCartAmount),
      "phone": getIdEle("billing_phone").value,
      "first_name": getIdEle("billing_first_name").value,
      "last_name": getIdEle("billing_last_name").value,
      "address": getIdEle("billing_address").value
    };

    if (bill.money && bill.phone && bill.first_name && bill.last_name && bill.address) {
      return bill;
    } else {
      return null;
    }
  }

  onSubmitCheckout = async (e) => {
    e.preventDefault();
    const bill = this.getBill();
    if (bill) {
      try {
        await this.props.dispatch(orderProducts(bill, this.state.paypal));
        this.coundown();
      } catch (er) {
        message.error("Cant create order");
      }
    }
  }

  onPaypal = (e) => {
    e.preventDefault();
    const bill = this.getBill();
    if (bill) {
      request().post("/paypal/redirect/", bill)
        .then(res => {
          if (res.data) {
            window.open(res.data);
          }
        })
        .catch(er => {
          message.error(er.message || "Can not submit form with paypal");
        })
    } else {
      message.error("Please fill all form");
    }
  }

  render() {
    const { cart } = this.props;
    const totalCartAmount = totalCart(cart);
    return (
      <div className="Checkout">
        <section className="section-padding bg-dark inner-header klb-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="mt-0 mb-3 text-white">Checkout</h1>
                <div className="breadcrumbs"><p className="mb-0 text-white"><a className="text-white" href="http://klbtheme.com/groci" title="Home" rel="bookmark">Home</a> / <span className="text-white">Checkout</span></p></div>             </div>
            </div>
          </div>
        </section>


        <section className="checkout-page section-padding">
          <div className="container">
            <div className="woocommerce">
              <div className="klb-product-tab">
                <div className="woocommerce-form-coupon-toggle">
                  <div className="woocommerce-info">Have a coupon? <a href="#" className="showcoupon">Click here to enter your code</a></div>
                </div>
                <form className="checkout_coupon woocommerce-form-coupon" method="post" style={{ display: 'none' }}>
                  <p>If you have a coupon code, please apply it below.</p>
                  <p className=" form-row-first">
                    <input required type="text" name="coupon_code" className="input-text" placeholder="Coupon code" id="coupon_code" />
                  </p>
                  <p className=" form-row-last">
                    <button type="submit" className="btn btn-secondary button" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                  </p>
                  <div className="clear" />
                </form>
              </div>
              <form onSubmit={this.onSubmitCheckout} name="checkout" className="checkout woocommerce-checkout" encType="multipart/form-data" noValidate="novalidate">
                <div className="klb-product-tab">
                  <div className="col2-set row" id="customer_details">
                    <div className="col-md-6">
                      <div className="woocommerce-billing-fields">
                        <h3>Billing details</h3>
                        <div className="woocommerce-billing-fields__field-wrapper">
                          <p className="form-row form-row-first validate-required" id="billing_first_name_field" data-priority={10}>
                            <label htmlFor="billing_first_name" >First name&nbsp;<abbr className="required" title="required">*</abbr></label>
                            <span className="woocommerce-input-wrapper"><input required type="text" className="input-text " name="billing_first_name" id="billing_first_name" autoComplete="given-name" /></span>
                          </p>
                          <p className="form-row form-row-last validate-required" id="billing_last_name_field" data-priority={20}>
                            <label htmlFor="billing_last_name" >Last name&nbsp;<abbr className="required" title="required">*</abbr></label>
                            <span className="woocommerce-input-wrapper"><input required type="text" className="input-text " name="billing_last_name" id="billing_last_name" autoComplete="family-name" /></span>
                          </p>
                          <p className="form-row form-row-wide address-field validate-required" id="billing_address_1_field" data-priority={50}><label htmlFor="billing_address" >Address&nbsp;<abbr className="required" title="required">*</abbr></label>
                            <span className="woocommerce-input-wrapper"><input required type="text" className="input-text " name="billing_address_1" id="billing_address" placeholder="House number and street name" autoComplete="address-line1" /></span>
                          </p>
                          <p className="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority={100}><label htmlFor="billing_phone" >Phone&nbsp;<abbr className="required" title="required">*</abbr></label><span className="woocommerce-input-wrapper"><input required type="tel" className="input-text " name="billing_phone" id="billing_phone" autoComplete="tel" /></span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="woocommerce-shipping-fields">
                      </div>
                      <div className="woocommerce-additional-fields">
                        <h3>Additional information</h3>
                        <div className="woocommerce-additional-fields__field-wrapper">
                          <p className="form-row notes" id="order_comments_field" data-priority><label htmlFor="order_comments" >Order notes&nbsp;<span className="optional">(optional)</span></label><span className="woocommerce-input-wrapper"><textarea name="order_comments" className="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows={2} cols={5} defaultValue={""} /></span></p>					</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="klb-product-tab order_review">
                  <h3 id="order_review_heading">Your order</h3>
                  <div id="order_review" className="woocommerce-checkout-review-order">
                    <table className="shop_table woocommerce-checkout-review-order-table">
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>{
                        cart.items.map((cartItem, index) => (
                          <tr key={index} className="cart_item">
                            <td className="product-name">
                              <Link to={`/product/${cartItem.product.id}`}>{cartItem.product.name}</Link>&nbsp; <strong className="product-quantity">x{cartItem.quantity}</strong>													</td>
                            <td className="product-total">
                              <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{cartItem.product.price * cartItem.quantity}</span>						</td>
                          </tr>
                        ))
                      }
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Subtotal</th>
                          <td><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{totalCartAmount}</span></td>
                        </tr>
                        <tr className="order-total">
                          <th>Total</th>
                          <td><strong><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{totalCartAmount}</span></strong> </td>
                        </tr>
                      </tfoot>
                    </table>
                    <div id="payment" className="woocommerce-checkout-payment">
                      <ul className="wc_payment_methods payment_methods methods">
                        <li className="wc_payment_method payment_method_bacs">
                          <input id="payment_method_bacs" type="radio" className="input-radio" name="payment_method" defaultValue="bacs" defaultChecked="checked" data-order_button_text style={{ display: 'none' }} />
                          {
                            this.state.paypal.TOKEN == null && <label>Direct bank transfer with <button onClick={this.onPaypal}><img style={{ width: "50px", height: "auto" }} src="/assets/images/paypal-btn.png" alt="" /></button></label>
                          }
                          <div className="payment_box payment_method_bacs">
                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                          </div>
                        </li>
                      </ul>
                      <div className="form-row place-order">
                        <div className="woocommerce-terms-and-conditions-wrapper">
                          <div className="woocommerce-privacy-policy-text"><p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="http://klbtheme.com/groci/?page_id=3" className="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-secondary button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
                        <input type="hidden" id="woocommerce-process-checkout-nonce" name="woocommerce-process-checkout-nonce" defaultValue="345c7e7346" /><input type="hidden" name="_wp_http_referer" defaultValue="/groci/?wc-ajax=update_order_review" />	</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  dispatch(getCart())
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);