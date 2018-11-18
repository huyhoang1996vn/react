import React from "react";
import { connect } from "react-redux";
import { message } from 'antd';
import { GROUP_USERS } from "constants/index";

// Componenets
import {
    UserForm
} from "./index";

// actions 
import {
    add,
    updateDetail
} from "actions/admin/users";

const formatUserDetail = data => {
    if (data.groupUser) {
        data.groupUser = GROUP_USERS[data.groupUser]
    }
    return data;
}

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: {
                groupUser: 1,
            }
        }
    }
    
    onSubmitForm = async (data) => {
        try {
            await this.props.dispatch(add(data));
            message.success('Add successful!');

        } catch (error) {
            let mes = "Add error!";
            if (error.response.data) {
                mes = Object.entries(error.response.data)[0].join(": ")
            }
            message.error(mes);
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
            <div className="AddUser" >
                <h3>User detail</h3>
                <div style={{ padding: "15px 15px" }}>
                    <UserForm
                        type="add"
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
}))(AddUser);