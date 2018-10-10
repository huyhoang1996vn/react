import React from "react";

import { _url } from "config/utils";

// Components
import {
    Delivery,
} from "components/layouts"

import {
    SliderProducts
} from "components/slider"

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById("btn-run-slider").click();
    }

    render() {
        return (
            <div className="Search">
                <SliderProducts 
                    products={[]}
                />
                <Delivery />
                <div className="item-hidden" id="btn-run-slider">CLICK</div>
            </div>
        )
    }
}

export default Search;