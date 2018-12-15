import React from "react";
import {
    Avatar, Rate, Button, Input, List, message,
} from 'antd';

import moment from 'moment';
const TextArea = Input.TextArea;


class FeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
            comment: "",
        }
    }

    onChangeForm = (type) => (e) => {
        switch (type) {
            case "rate": return this.setState({ rate: e })
            case "comment": return this.setState({ comment: e.target.value })
        }
    }

    onSubmit = () => {
        if (this.state.rate == 0 || this.state.comment == "") {
            message.error("Please input form");
        } else {
            this.props.onSubmitFeedBack(this.state);
        }
    }

    render() {
        const { feedbacks } = this.props;
        return (
            <div className="FeedBack">
                <Rate onChange={this.onChangeForm('rate')} />
                <div className="FeedBack__form">
                    <TextArea rows={4} onChange={this.onChangeForm('comment')} />
                    <div>
                        <br/>
                        <Button type="primary" onClick={this.onSubmit}>Add comment</Button>
                    </div>
                </div>
                <br />
                <br />
                <div className="FeedBack__list">
                    <div>
                        <List
                            itemLayout="horizontal"
                            dataSource={feedbacks.slice(0,10)}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="#">{item.customer} <Rate value={item.star} onChange={() => {}} /> <p>{item.modified}</p></a>}
                                        description={item.detail}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedBack;