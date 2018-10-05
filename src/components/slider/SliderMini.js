import React from "react";

import { _staticUrl } from "config/utils";


// Components

class SliderMini extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SliderMini">
                <div className="container">
                    <div data-vc-full-width="true" data-vc-full-width-init="false" className="vc_row wpb_row vc_row-fluid vc_custom_1535439900603 vc_row-has-fill">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="top-category klb-product-cat">
                                        <div className="owl-carousel owl-carousel-category">
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/beverages/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/3-3.jpg")} alt />
                                                    <h6>Beverages</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/biscuits-snacks-chocolates/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/9-2.jpg")} alt />
                                                    <h6>Biscuits, Snacks &amp; Chocolates</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/breakfast-dairy/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Breakfast &amp; Dairy</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/fruits-vegetables/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Fruits &amp; Vegetables</h6>
                                                    <p>12 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/furnishing-home-needs/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Furnishing &amp; Home Needs</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/grocery-staples/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Grocery &amp; Staples</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/home-kitchen/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Home &amp; Kitchen</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/household-needs/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Household Needs</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/meats-frozen-seafood/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Meats, Frozen &amp; Seafood</h6>
                                                    <p>2 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/noodles-sauces-instant-food/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Noodles, Sauces &amp; Instant Food</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/personal-care/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Personal Care</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                            <div className="item">
                                                <div className="category-item"><a href="/product-category/pet-care/"><img className="img-fluid" src={_staticUrl("/groci/wp-content/uploads/2018/08/8-2.jpg")} alt />
                                                    <h6>Pet Care</h6>
                                                    <p>1 Items</p>
                                                </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                </div>


            </div>
        )
    }
}

export default SliderMini;