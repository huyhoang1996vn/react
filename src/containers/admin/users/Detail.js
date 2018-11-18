import React from "react";
import { connect } from "react-redux";
import { message } from 'antd';
import { GROUP_USERS } from "constants/index";

import request from "api/request";


// Componenets
import {
    UserForm
} from "./index";

// actions 
import {
    getDetail,
    updateDetail
} from "actions/admin/users";

const formatUserDetail = data => {
    if (data.groupUser) {
        data.groupUser = GROUP_USERS[data.groupUser]
    }
    return data;
}

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            userDetail: nextProps.userDetail
        })
    }


    componentWillMount() {
        this.props.dispatch(getDetail(this.props.match.params.user_id));
    }

    onSubmitForm = async (data) => {
        const { first_name, last_name, is_active } = data;
        try {
            await this.props.dispatch(updateDetail(this.state.userDetail.id, {
                first_name, 
                last_name, 
                is_active
            }));
            message.success('Edit successful!');

        } catch (error) {
            message.error('Edit error');
        }
    }

    onChangeData = data => {
        this.setState({
            userDetail: {
                ...this.state.userDetail,
                [data.key]: data.value
            }
        })
    }

    render() {
        return (
            <div className="UserDetail" >
                <h3>User detail</h3>
                <div style={{ padding: "15px 15px" }}>
                    <UserForm
                        data={this.state.userDetail}
                        onSubmitForm={this.onSubmitForm}
                        onChangeData={this.onChangeData}
                    />
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    userDetail: formatUserDetail(state.admin.users.detail),
}))(UserDetail);