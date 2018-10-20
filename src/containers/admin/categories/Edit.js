import React from "react";
import { message } from 'antd';

import request from "api/request";


// Componenets
import {
    CategoryForm
} from "./index";

class EditCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                detail: "",
            }
        }

        this.getCategory(parseInt(props.match.params.category_id));
        
    }

    getCategory(id) {
        request().get(`/category/${id}/`)
        .then(res => {
            if (res.data) {
                this.setState({
                    data: res.data
                })
            }
        })
    }

    onSubmitForm = (data) => {
        const category = {
            ...this.state.data,
            ...data,
        }
        request().put(`/category/${category.id}/`, category).then(res => {
            if (res.data) message.success('Edit successful');
        }).catch(er => {
            message.error('Edit error');
        });
    }

    render() {
        return (
            <div className="EditCategory" >
                <h3>Edit category</h3>
                <div style={{ padding: "15px 15px" }}>
                    <CategoryForm
                        type="Edit"
                        data={this.state.data}
                        onSubmitForm={this.onSubmitForm}
                    />
                </div>
            </div>
        )
    }
}

export default EditCategory;