import React from "react";

import { Link } from "react-router-dom";

import { _staticUrl, _apiUrl } from "config/utils";


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
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            {
                                                this.props.products.map(item => {
                                                    let urlImage = _staticUrl("/groci/wp-content/uploads/2018/08/2-1.jpg");
                                                    if (item.picture && item.picture[0] && item.picture[0].image) {
                                                        urlImage = _apiUrl(item.picture[0].image);
                                                        if (~item.picture[0].image.indexOf("http")) {
                                                            urlImage = item.picture[0].image;
                                                        }
                                                    }
                                                    return (
                                                        <div className="item" key={item.id}>
                                                            <div className="category-item">
                                                                <Link to={`/product/${item.id}/`}><img className="img-fluid" src={urlImage} />
                                                                    <h6>{item.name.slice(0, 15)}</h6>
                                                                    <p>1 Items</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
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