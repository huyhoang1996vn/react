import React from "react";
import { connect } from "react-redux";
import { Table, Dropdown, Menu, Divider, Tag, Button, message, Icon } from 'antd';
import moment from "moment";

// actions 
import {
    getProducts,
    delProduct
} from "actions/storers/products";
import { SearchInput } from "components/common"

import {
    getCategories
} from "actions/categories";

const formatDay = d => d.split("/").reverse().join("-")

class ProductsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                category: {}
            },
            allProducts: [],
        }

        this.columns = [{
            title: 'Image',
            dataIndex: 'picture',
            key: 'picture',
            width: "10%",
            render: (picture) => {
                return picture[0] ? <img src={picture[0].image} alt="" /> : "No image"
            }
        }, {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            width: "20%",
        }, {
            title: 'Expired',
            dataIndex: 'expire_date',
            key: 'expire_date',
            sorter: (a, b) => moment(formatDay(a.expire_date)).diff(formatDay(b.expire_date), "days")
        }, {
            title: 'Created',
            dataIndex: 'created',
            key: 'created',
        }, {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
            sorter: (a, b) => parseFloat(a.price) - parseFloat(b.price),
        }, {
            title: 'In stock',
            key: 'count_in_stock',
            dataIndex: 'count_in_stock',
            sorter: (a, b) => parseFloat(a.count_in_stock) - parseFloat(b.count_in_stock),
        }, {
            title: 'Tax',
            key: 'tax',
            dataIndex: 'tax',
        }, {
            title: 'Actived',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (is_active) => {
                return (
                    <span>
                        <Tag color="blue">{is_active ? "Actived" : "Disabled"}</Tag>
                    </span>
                )
            }
        },
        // {
        //     title: 'Status',
        //     dataIndex: 'status',
        //     key: 'status',
        //     render: this.formatStatus
        // }, 
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'action',
            render: (id, record) => (
                <span>
                    <a onClick={this.onClickAction("detail")(record)} href="javascript:;">View</a>
                    <Divider type="vertical" />
                    <a onClick={this.onClickAction("delete")(record)} href="javascript:;">Delete</a>
                </span>
            ),
        }];
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            allProducts: nextProps.allProducts
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        this.props.dispatch(getProducts());
        this.props.dispatch(getCategories());
    }

    formatStatus = (st) => <Tag color="blue">{st}</Tag>

    onClickAction = (type) => record => () => {
        switch (type) {
            case "detail": {
                return this.props.history.push(`/storers/product/detail/${record.id}`);
            }
            case "delete": {
                this.props.dispatch(delProduct(record.id))
                return;
            }
            default: return;
        }
    }

    render() {
        const handleMenuClick = (e) => {
            if (e.key == 'all') {
                this.setState({
                    filter: {
                        category: {}
                    },
                    allProducts: this.props.allProducts
                })
                return;
            }
            this.setState(prev => {
                prev.filter.category = this.props.categories.find(ct => +ct.id === +e.key) || {}
                prev.allProducts = this.props.allProducts.filter(prd => +prd.category[0] == +prev.filter.category.id);
                return prev;
            })
        }

        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="all" >All</Menu.Item>
                {
                    this.props.categories.map(ct => (
                        <Menu.Item key={ct.id}>{ct.name}</Menu.Item>
                    ))
                }
            </Menu>
        );


        return (
            <div className="Users">
                <h1>Products Table</h1>
                <Button
                    onClick={
                        () => this.props.history.push("/storers/product/add")
                    }
                    type="primary"
                    shape="circle"
                    icon="plus"
                    size="large"
                />
                <div style={{ textAlign: "right" }}>
                    <Dropdown.Button trigger={['click']} overlay={menu}>
                        {this.state.filter.category.name || "All"}
                    </Dropdown.Button>
                </div>
                <br />
                <br />
                <br />
                <SearchInput
                    setState={this.setState.bind(this)}
                    meta={{
                        all: this.props.allProducts,
                        key: 'allProducts'
                    }}
                />
                <Table
                    columns={this.columns}
                    dataSource={this.state.allProducts}
                />
            </div>
        )
    }
}

export default connect((state) => ({
    allProducts: state.storers.products.allProducts,
    categories: state.categories
}))(ProductsTable);