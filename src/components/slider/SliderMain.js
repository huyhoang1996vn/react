import React from "react";

import { _staticUrl } from "config/utils";


// Components

class SliderMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SliderMain">
                <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true" className="vc_row wpb_row vc_row-fluid vc_custom_1533409668310 vc_row-has-fill vc_row-no-padding">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner  ">
                            <div className="wpb_wrapper">
                                <section className="carousel-slider-main text-center">
                                    <div className="owl-carousel owl-carousel-slider">
                                        <div className="item"><a href="#/"  title="slider1">
                                        <img style={{ maxHeight: "65vh" }} className="img-fluid" src={_staticUrl("/assets/images/slide1.jpg")} alt="slide" /></a></div>
                                        <div className="item"><a href="#/"  title="slider2">
                                        <img style={{ maxHeight: "65vh" }} className="img-fluid" src={_staticUrl("/assets/images/slide2.jpg")} alt="slide" /></a></div>
                                        <div className="item"><a href="#/"  title="slider3">
                                        <img style={{ maxHeight: "65vh" }} className="img-fluid" src={_staticUrl("/assets/images/slide3.jpg")} alt="slide" /></a></div>
                                        <div className="item"><a href="#/"  title="slider4">
                                        <img style={{ maxHeight: "65vh" }} className="img-fluid" src={_staticUrl("/assets/images/slide4.jpg")} alt="slide" /></a></div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row-full-width vc_clearfix"></div>
            </div>
        )
    }
}

export default SliderMain;