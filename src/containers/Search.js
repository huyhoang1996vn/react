import React from "react";
import { connect } from "react-redux";
import request from "api/request";
import { _url } from "config/utils";

// Components
import {
    Delivery,
} from "components/layouts"
import { GoogleMapPosition } from "components/google-maps"

import {
    SliderProducts
} from "components/slider"

//action
import {
    searchProductsByName,
    getProductsByStorer
} from "actions/products";

const locationDn = {
    lat: 16.070220,
    lng: 108.153470
};

const StoreInfo = ({ data }) => {
    const location = data.location ? data.location.split(",").map(item => parseFloat(item.trim())) : [locationDn.lat, locationDn.lng]
    return (
        <div className="container">
            <h5 className="heading-design-h5">Thông tin cửa hàng:</h5>
            <p><b>Tên cửa hàng: </b>{data.name}</p>
            <p><b>Địa chỉ: </b>{data.address}</p>
            <p><b>Số điện thoại: </b>{data.phone}</p>
            <p><b>Ngày tạo: </b>{data.created}</p>
            <p><b>Hoạt động: </b>{data.is_active ? "Đang hoạt động" : "Đã dời tiệm"}</p>
            <div style={{ height: "30vh", margin: "0 auto" }}>
                <GoogleMapPosition iwDefaultLocation={{
                    lat: location[0],
                    lng: location[1],
                }} />
            </div>
        </div>
    )
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storer_id: null,
            storerData: {},
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.keyword !== this.props.match.params.keyword) {
            this.handleSearch(nextProps.match.params.keyword);
        }
    }

    componentDidMount() {
        this.handleSearch(this.props.match.params.keyword);
    }

    getStorerIdFromKeyword = (keyword) => keyword.split("=")[0] == "storer" ? keyword.split("=")[1] : null;

    handleSearch = keyword => {
        let storer_id = this.getStorerIdFromKeyword(keyword);
        if (storer_id) {
            this.searchByStore(storer_id);
        } else {
            this.props.dispatch(searchProductsByName(keyword));
        }
        this.setState({
            storer_id
        })
    }

    searchByStore = (storer_id) => {
        request().get(`/store/info/${storer_id}/`).then(res => {
            this.setState({
                storerData: res.data
            })
        }).catch(er => {
            this.setState({
                storerData: {}
            })
        })
        this.props.dispatch(getProductsByStorer(storer_id));
    }

    getTitleForSlider = () => {
        if (this.props.products.searchedProducts.length > 0) {
            if (this.state.storer_id == null) {
                return `Kết quả tìm kiếm với từ khóa: ${this.props.match.params.keyword}`
            }
            return `Tất cả products của cửa hàng:`
        };
        return `Không tìm thấy kết quả với từ khóa: ${this.props.match.params.keyword}`
    }

    render() {
        return (
            <div className="Search">
                {
                    this.state.storer_id && this.state.storerData.id &&
                    <StoreInfo data={this.state.storerData} />
                }
                <SliderProducts
                    titleSlider={this.getTitleForSlider()}
                    products={this.props.products.searchedProducts}
                />
                <Delivery />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);