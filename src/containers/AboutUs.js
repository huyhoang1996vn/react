import React from "react";

import { _url } from "config/utils";


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="AboutUs">
                <section className="section-padding bg-dark inner-header klb-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="mt-0 mb-3 text-white">About Us</h1>
                                <div className="breadcrumbs">
                                    <p className="mb-0 text-white"><a className="text-white" href="groci" title="Home" rel="bookmark">Home</a> / <span className="text-white">About
                    Us</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container">
                    <div style={{ backgroundColor: "white" }} data-vc-full-width="true" data-vc-full-width-init="false" className="vc_row wpb_row vc_row-fluid vc_custom_1533712885081 vc_row-has-fill vc_row-o-content-middle vc_row-flex">
                        <div className="wpb_column vc_column_container vc_col-sm-5">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="wpb_single_image wpb_content_element vc_align_left">
                                        <figure className="wpb_wrapper vc_figure">
                                            <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={600} height={732} src="/groci/wp-content/uploads/2018/08/about.jpg" className="vc_single_image-img attachment-full" alt srcSet="/groci/wp-content/uploads/2018/08/about.jpg 600w, /groci/wp-content/uploads/2018/08/about-246x300.jpg 246w" sizes="(max-width: 600px) 100vw, 600px" /></div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-5 pr-5 wpb_column vc_column_container vc_col-sm-6">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <h2 style={{ color: '#e96125', textAlign: 'left' }} className="vc_custom_heading vc_custom_1533755550617">Save more with GROCI!
                  We give you the lowest prices on all your needs.</h2>
                                    <h5 style={{ textAlign: 'left' }} className="vc_custom_heading">Our Vision</h5>
                                    <p style={{ textAlign: 'left' }} className="vc_custom_heading">Our vision is delivering happiness to customers, employees and vendors.</p>
                                    <h5 style={{ textAlign: 'left' }} className="vc_custom_heading vc_custom_1533755583875">Our Goal</h5>
                                    <p style={{ textAlign: 'left' }} className="vc_custom_heading">We believe in the power of technology transformation and want to change the world better by providing the platform to connect buyers and sellers in the same community. 
                                    We continuously improve our platform to bring an enjoyable shopping experience to all our users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vc_row-full-width vc_clearfix" />
                </div>



                <div className="container">
                    <div style={{ padding: "30px" }} className="vc_row wpb_row vc_row-fluid vc_custom_1533800128579">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="section-title text-center mb-5">
                                        <h2>What We Provide?</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-shopping mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">Best Prices &amp; Offers</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-earth mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">Wide Assortment</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-refresh mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">Easy Returns</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-truck-fast mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">Free &amp; Next Day Delivery</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-basket mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">100% Satisfaction Guarantee</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-tag-heart mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">Prestige</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div style={{ backgroundColor: "white", padding: "30px" }} data-vc-full-width="true" data-vc-full-width-init="false" className="vc_row wpb_row vc_row-fluid vc_custom_1533802432786 vc_row-has-fill">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="section-title text-center mb-5">
                                        <h2>Our Location</h2>
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

export default AboutUs;