import React from "react";

import { _url } from "config/utils";

// Components
import {
    Header,
    Footer,
    Delivery,
} from "components/layouts"

import {
    SliderMain,
    SliderMini,
    SliderProducts
} from "components/slider"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("btn-run-slider").click();
    }

    render() {
        return (
            <div className="Home">
                <Header />

                <SliderMain />
                <SliderMini />
                <SliderProducts />


                <Delivery />
                <Footer />

                <div className="item-hidden" id="btn-run-slider">CLICK</div>

            </div>
        )
    }
}

export default Home;