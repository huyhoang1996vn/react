import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { _staticUrl, _apiUrl } from "config/utils";


// acitons
import {
	getProductById,
	getProductsByCategory
} from "actions/products";

const getUrlImage = product => {
	let urlImage = _staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg");

	if (product.id) {
		if (product.picture && product.picture[0] && product.picture[0].image) {
			if (!~product.picture[0].image.indexOf("http")) {
				urlImage = _apiUrl(product.picture[0].image);
			} else {
				urlImage = product.picture[0].image;
			}
		}
	}

	return urlImage;
}


class ProudctDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.product_id !== this.props.match.params.product_id)
			this.getProduct(nextProps.match.params.product_id);
	}

	componentWillMount() {
		this.getProduct(this.props.match.params.product_id);
	}


	getProduct = (id) => {
		this.props.dispatch(getProductById(id));
	}

	render() {
		const { product, relatedProducts } = this.props.detailProduct;

		let urlImage = getUrlImage(product);



		return (
			<div className="ProudctDetail">
				<section className="shop-single section-padding pt-3">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<img src={urlImage} alt="" />
							</div>
							<div className="col-md-6">
								<div className="shop-detail-right klb-product-right">
									<span className="badge badge-success">30% OFF</span>
									<h2>{product.name}</h2>
									<p className="price"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>10.00</span></del>
										<ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{product.price}</span></ins></p>
									<p className="stock in-stock">In Stock</p>
									<form className="cart" action="/groci/product/organic-broccoli/" method="post" encType="multipart/form-data">
										<div className="quantity">
											<label className="screen-reader-text" htmlFor="quantity_5bb07e4411474">Quantity</label>
											<input type="number" id="quantity_5bb07e4411474" className="input-text qty text" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" size={4} pattern="[0-9]*" inputMode="numeric" aria-labelledby />
										</div>
										<button type="submit" name="add-to-cart" value={63} className="btn btn-secondary btn-lg single_add_to_cart_button button alt"><i className="mdi mdi-cart-outline" /> Add to cart</button>
									</form>
									<div className="woocommerce-product-details__short-description short-description">
										<h5>Quick Overview</h5>
										<p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong> Nam fringilla augue nec est
                    tristique auctor. Donec non est at libero vulputate rutrum.</p>
										<p>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti
											sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at
                    ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.</p>
									</div>
									<div className="product_meta">
										<span className="sku_wrapper">SKU: <span className="sku">9S3M4N</span></span>
										<span className="posted_in">Categories: <a href="/groci/product-category/fruits-vegetables/" rel="tag">Fruits &amp;
                      Vegetables</a>, <a href="/groci/product-category/home-kitchen/" rel="tag">Home &amp; Kitchen</a></span>
									</div>
									<h6 className="mb-3 mt-4">Why shop from Groci?</h6>
									<div className="row">
										<div className="col-md-6">
											<div className="feature-box">
												<i className="mdi mdi-truck-fast" />
												<h6 className="text-info">Free Delivery</h6>
												<p>Lorem ipsum dolor...</p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="feature-box">
												<i className="mdi mdi-basket" />
												<h6 className="text-info">100% Guarantee</h6>
												<p>Lorem Ipsum Dolor sit...</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12">

								<section className="related products klb-product-tab">
									<h2>Related products</h2>
									<div className="row">
										{
											relatedProducts.slice(0, 4).map((item, index) => {
												let urlImage = getUrlImage(item);

												return (
													<div key={index} className="col-md-3">
														<a href="/groci/product/fresh-red-seedless-grapes/" className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
														</a><div className="product">
															<a href="/groci/product/fresh-red-seedless-grapes/"
																className="woocommerce-LoopProduct-link woocommerce-loop-product__link" />
															<Link to={`/product/${item.id}`}>
																<div className="product-header"><span className="badge badge-success">13%</span><img className="img-fluid" src={urlImage} alt="Fresh Red Seedless" /><span className="veg text-success mdi mdi-circle" /></div>
																<div className="product-body">
																	<h5>{item.name.slice(0, 20)}...</h5>
																	<h6><strong><span className="mdi mdi-approval text-success" /> In Stock</strong> - 1 kg</h6>
																</div>
															</Link><div className="product-footer"><a href="/groci/product/fresh-red-seedless-grapes/">
																<p className="offer-price mb-0"><del><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>8.00</span></del>
																	<ins><span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">£</span>{item.price}</span></ins></p></a><a href="/groci/product/organic-broccoli/?add-to-cart=69" className="btn btn-secondary btn-sm button product_type_simple add_to_cart_button ajax_add_to_cart"><i className="mdi mdi-cart-outline" /> Add to cart</a>
															</div>
														</div>
													</div>
												)
											})
										}

									</div>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default connect(store => ({
	detailProduct: store.products.detailProduct
}))(ProudctDetail);