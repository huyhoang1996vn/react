import React from "react";
import { message } from 'antd';

import request from "api/request";


// Componenets
import {
    CategoryForm
} from "./index";

class AddCategory extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmitForm = (data) => {
        request().post(`/category/`, data).then(res => {
            if (res.data) message.success('Add successful');
        }).catch(er => {
            message.error('Add error');
        });
    }

    render() {
        return (
            <div className="AddCategory" >
                <h3>Add new category</h3>
                <div style={{ padding: "15px 15px" }}>
                    <CategoryForm
                        type="Add"
                        onSubmitForm={this.onSubmitForm}
                    />
                </div>
            </div>
        )
    }
}

export default AddCategory;