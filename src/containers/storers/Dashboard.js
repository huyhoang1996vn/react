import React from "react";
import { Col } from 'antd'
import { Color } from 'utils/theme'
import { connect } from "react-redux";

import NumberCard from "components/number-card/numberCard"

import { get } from "actions/overviews"

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        this.props.dispatch(get());
    }

    numberCards = Object.values(this.props.overview).map((item, key) => (
        <Col key={key} lg={6} md={12}>
            <NumberCard {...item} />
        </Col>
    ))

    render() {
        return (
            <div>
                {
                    this.numberCards
                }
            </div>
        )
    }
}

export default connect((state) => ({
    overview: state.overviews.storer
}))(Dashboard)