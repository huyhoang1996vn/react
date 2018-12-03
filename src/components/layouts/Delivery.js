import React from "react";

import { _url } from "config/utils";

class Delivery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Delivery">
                <div className="container">
                    <div data-vc-full-width="true" data-vc-full-width-init="false" className="vc_row wpb_row vc_row-fluid vc_custom_1533636970064 vc_row-has-fill">
                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t@media (max-width: 768px) and (min-width: 320px){\n\t\t\t\t\t\t.vc_row .klb_xs_vc_custom_1534495490041{margin-bottom: 15px !important;}\n\t\t\t\t\t}\n\t\t\t\t" }} />
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  klb_xs_vc_custom_1534495490041">
                                <div className="wpb_wrapper">
                                    <div className="feature-box"><i className="mdi mdi mdi-truck-fast" />
                                        <h6>Free Delivery</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t@media (max-width: 768px) and (min-width: 320px){\n\t\t\t\t\t\t.vc_row .klb_xs_vc_custom_1534495495125{margin-bottom: 15px !important;}\n\t\t\t\t\t}\n\t\t\t\t" }} />
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  klb_xs_vc_custom_1534495495125">
                                <div className="wpb_wrapper">
                                    <div className="feature-box"><i className="mdi mdi mdi-basket" />
                                        <h6>100% Satisfaction Guarantee</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="feature-box"><i className="mdi mdi mdi-tag-heart" />
                                        <h6>Prestige </h6>
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

export default Delivery;