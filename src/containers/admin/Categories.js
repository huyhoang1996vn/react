import React from "react";
import { connect } from "react-redux";

import { Table, Divider, Tag, Button } from 'antd';

import {
    getCategories,
    updateCategory,
    deleteCategory
} from "actions/categories";



const data = [{
    "id": 19,
    "created": "2018-10-05T14:07:50.095196Z",
    "modified": "2018-10-05T14:07:50.095224Z",
    "name": "May do huyet ap",
    "detail": null,
    "is_active": true
},
{
    "id": 20,
    "created": "2018-10-05T14:08:00.315130Z",
    "modified": "2018-10-05T15:01:08.519697Z",
    "name": "Nhiet ke dien tu",
    "detail": "tử",
    "is_active": true
},
{
    "id": 21,
    "created": "2018-10-05T14:08:10.291686Z",
    "modified": "2018-10-05T14:08:10.291716Z",
    "name": "Boi bo co the",
    "detail": null,
    "is_active": true
},
{
    "id": 22,
    "created": "2018-10-05T14:08:16.015364Z",
    "modified": "2018-10-05T15:01:33.891239Z",
    "name": "Cai thien tim mach",
    "detail": "mạch",
    "is_active": true
},
{
    "id": 25,
    "created": "2018-10-20T07:52:52.272690Z",
    "modified": "2018-10-20T07:52:52.272734Z",
    "name": "thuoc bo mau",
    "detail": "thuoc tot cho nao",
    "is_active": false
}];

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }

        this.columns = [{
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Status',
            key: 'status',
            dataIndex: 'is_active',
            render: is_active => (
                <span>
                    {
                        is_active ?
                            <Tag color="blue">Active</Tag>
                            :
                            <Tag color="red">In Active</Tag>
                    }
                </span>
            ),
        }, {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
        }, {
            title: 'Action',
            key: 'action',
            dataIndex: 'id',
            render: (text, record) => (
                <span>
                    <a onClick={this.onClickAction("edit")(record)} href="javascript:;">Edit</a>
                    <Divider type="vertical" />
                    <a onClick={this.onClickAction("activation")(record)} href="javascript:;">{
                        record.is_active ? "Disable" : "Enable"
                    }</a>
                    <Divider type="vertical" />
                    <a onClick={this.onClickAction("delete")(record)} href="javascript:;">Delete</a>
                </span>
            ),
        }];

        props.dispatch(getCategories());
    }

    static getDerivedStateFromProps(props, state) {
        return {
            categories: props.categories,
        }
    }

    onClickAction = (type) => record => () => {
        console.log(record);
        switch (type) {
            case "edit": {
                return this.props.history.push(`/admin/categories/edit/${record.id}`);
            }
            case "activation": {
                return this.props.dispatch(
                    updateCategory({
                        ...record,
                        is_active: !record.is_active
                    })
                )
            }
            case "delete": {
                return this.props.dispatch(
                    deleteCategory(record.id)
                )
            }
            default: return;
        }
    }

    render() {
        return (
            <div className="Categories">
                <h1>Categories</h1>
                <Button onClick={() => this.props.history.push("/admin/categories/add")} type="primary" shape="circle" icon="plus" size="large" />
                <br />
                <br />
                <br />
                <Table
                    columns={this.columns}
                    dataSource={this.state.categories}
                    rowKey="id"
                />
            </div>
        )
    }
}

export default connect(state => (
    {
        categories: state.categories
    }
))(Categories);