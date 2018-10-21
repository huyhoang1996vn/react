import React from "react";
import { message } from 'antd';

import request from "api/request";


// Componenets
import {
    UserForm
} from "./index";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmitForm = (data) => {
        // request().post(`/category/`, data).then(res => {
        //     if (res.data) message.success('Add successful');
        // }).catch(er => {
        //     message.error('Add error');
        // });
    }

    render() {
        return (
            <div className="UserDetail" >
                <h3>User detail</h3>
                <div style={{ padding: "15px 15px" }}>
                    <UserForm
                        type="Edit"
                        data={{
                            email: "email@gmail.com",
                            fullname: "name",
                            address: "Address",
                            phone: "123456789",
                        }}
                        onSubmitForm={this.onSubmitForm}
                    />
                </div>
            </div>
        )
    }
}

export default UserDetail;