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
                                    <h2 style={{ color: '#e96125', textAlign: 'left' }} className="vc_custom_heading vc_custom_1533755550617">Save more with GO!
                  We give you the lowest prices on all your grocery needs.</h2>
                                    <h5 style={{ textAlign: 'left' }} className="vc_custom_heading">Our Vision</h5>
                                    <p style={{ textAlign: 'left' }} className="vc_custom_heading">It is a long established fact that a reader will be
                                      distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                                    <h5 style={{ textAlign: 'left' }} className="vc_custom_heading vc_custom_1533755583875">Our Goal</h5>
                                    <p style={{ textAlign: 'left' }} className="vc_custom_heading">When looking at its layout. The point of using Lorem Ipsum
                                      is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, Lorem Ipsum has
                  been the industry's standard dummy text ever since.</p>
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
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form, by injected humour.</p>
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
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text eve.</p>
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
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                    at its layout. The point of using.</p>
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
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                    literature from 45 BC.</p>
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
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
                    some form, by injected humour.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="klbiconbox">
                                        <div className="mt-4 mb-4"><i className="text-success mdi mdi mdi-tag-heart mdi-48px" /></div>
                                        <h5 className="mb-3 text-secondary">Great Daily Deals Discount</h5>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                    at its layout. The point of using.</p>
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
                                        <h2>Our Team</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t@media (max-width: 768px) and (min-width: 320px){\n\t\t\t\t\t\t.vc_row .klb_xs_vc_custom_1535180374885{margin-bottom: 30px !important;}\n\t\t\t\t\t}\n\t\t\t\t" }} />
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  klb_xs_vc_custom_1535180374885">
                                <div className="wpb_wrapper">
                                    <div className="team-card text-center"><img className="img-fluid mb-4" src="groci/wp-content/uploads/2018/08/1-3.jpg" alt="- Stave Martin" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Stave Martin</h6><small>Manager</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style dangerouslySetInnerHTML={{ __html: "\n\t\t\t\t@media (max-width: 768px) and (min-width: 320px){\n\t\t\t\t\t\t.vc_row .klb_xs_vc_custom_1535180380564{margin-bottom: 30px !important;}\n\t\t\t\t\t}\n\t\t\t\t" }} />
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  klb_xs_vc_custom_1535180380564">
                                <div className="wpb_wrapper">
                                    <div className="team-card text-center"><img className="img-fluid mb-4" src="groci/wp-content/uploads/2018/08/2-3.jpg" alt="- Mark Smith" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Mark Smith</h6><small>Designer</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wpb_column vc_column_container vc_col-sm-4">
                            <div className="vc_column-inner  ">
                                <div className="wpb_wrapper">
                                    <div className="team-card text-center"><img className="img-fluid mb-4" src="groci/wp-content/uploads/2018/08/3-2.jpg" alt="- Ryan Printz" />
                                        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                        <h6 className="mb-0 text-success">- Ryan Printz</h6><small>Marketing</small>
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