import React from "react";

import { _url } from "config/utils";
import Script from "react-load-script";

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


    render() {
        return (
            <div className="Home">
                <Header />

                <SliderMain />
                <SliderMini />
                <SliderProducts />


                <Delivery />
                <Footer />

                
                <Script url='/groci/wp-content/plugins/contact-form-7/includes/js/scripts.js?ver=5.0.3' />
                <Script url='/groci/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70' />
                <Script url='/groci/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4' />
                <Script url='/groci/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=3.4.4' />
                <Script url='/groci/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=3.4.4' />
                <Script url='/groci/wp-includes/js/comment-reply.min.js?ver=4.9.8' />
                <Script url='/groci/wp-content/themes/groci/vendor/bootstrap/js/bootstrap.bundle.min.js?ver=1.0' />
                <Script url='/groci/wp-content/plugins/woocommerce/assets/js/select2/select2.full.min.js?ver=4.0.3' />
                <Script url='/groci/wp-content/themes/groci/vendor/owl-carousel/owl.carousel.js?ver=1.0' />
                <Script url='/groci/wp-content/themes/groci/js/custom.js?ver=1.0' />
                <Script url='/groci/wp-includes/js/wp-embed.min.js?ver=4.9.8' />
                <Script url='/groci/wp-content/plugins/js_composer/assets/js/dist/js_composer_front.min.js?ver=5.5.2' />

            </div>
        )
    }
}

export default Home;