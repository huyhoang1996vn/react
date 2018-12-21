import React from "react";
import Script from "react-load-script";

import { _staticUrl } from "config/utils";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Footer">
                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="klbfooterwidget widget_text">
                                    <div className="textwidget">
                                        <p><img className="mb-4 mt-0 alignnone size-full wp-image-127" src={_staticUrl("/groci/wp-content/uploads/2018/08/logo-footer-1.png")} width={127} height={38} /></p>
                                        <p className="mb-0"><a className="text-dark" href="#/"><i className="mdi mdi-phone" /> +84 794 590 578</a></p>
                                        <p className="mb-0"><a className="text-dark" href="#/"><i className="mdi mdi-cellphone-iphone" /> 0794590578</a></p>
                                        <p className="mb-0"><a className="text-success" href="#/"><i className="mdi mdi-email" /> cnpm04_tmdt@gmail.com</a></p>
                                        <p className="mb-0"><a className="text-primary" href="http://jinsphan.tk/"><i className="mdi mdi-web" /> http://jinsphan.tk</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <div className="klbfooterwidget widget_nav_menu">
                                    <h6 className="mb-4">POLICIES</h6>
                                    <div className="menu-top-cities-container">
                                        <ul id="menu-top-cities" className="menu">
                                            <li id="menu-item-181" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-181"><a href="#/">Privacy Policy</a></li>
                                            <li id="menu-item-198" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-198"><a href="#/">Cookie Policy</a></li>
                                            <li id="menu-item-199" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-199"><a href="#/">Advertising Policy</a></li>
                                            <li id="menu-item-200" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-200"><a href="#/">Correction Policy</a></li>
                                            <li id="menu-item-201" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-201"><a href="#/">Terms of Use</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <div className="klbfooterwidget widget_nav_menu">
                                    <h6 className="mb-4">EDITIONS</h6>
                                    <div className="menu-categories-container">
                                        <ul id="menu-categories" className="menu">
                                            <li id="menu-item-206" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-206"><a href="#/">Tiếng Việt</a></li>
                                            <li id="menu-item-207" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-207"><a href="#/">English</a></li>
                                            <li id="menu-item-208" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-208"><a href="#/">Deutsch</a></li>
                                            <li id="menu-item-209" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-209"><a href="#/">Español</a></li>
                                            <li id="menu-item-210" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-210"><a href="#/">Français</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <div className="klbfooterwidget widget_nav_menu">
                                    <h6 className="mb-4">ABOUT US</h6>
                                    <div className="menu-about-us-container">
                                        <ul id="menu-about-us" className="menu">
                                            <li id="menu-item-225" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="#/">Company
                          Information</a></li>
                                            <li id="menu-item-202" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-202"><a href="#/">Careers</a></li>
                                            <li id="menu-item-203" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-203"><a href="#/">Store
                          Location</a></li>
                                            <li id="menu-item-205" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-205"><a href="#/">Copyright</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="klbfooterwidget widget_text">
                                    <h6 className="mb-4">Download App</h6>
                                    <div className="textwidget">
                                        <div className="app"><a href="#/"><img src={_staticUrl("/groci/wp-content/uploads/2018/08/google.png")} /></a><a href="#/"><img src={_staticUrl("/groci/wp-content/uploads/2018/08/apple.png")} /></a></div>
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
                                <img alt="payment-image" src={_staticUrl("/groci/wp-content/uploads/2018/08/payment_methods.png")} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Footer;