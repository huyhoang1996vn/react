import React from "react";
import { Avatar, Form, Select, Input, Button, Tag, Upload, Icon, DatePicker } from 'antd';
import _ from "lodash";
import uuid from "uuid";

import moment from 'moment';
const dateFormat = 'DD/MM/YYYY';


const FormItem = Form.Item;
const Option = Select.Option;
const formatDay = d => d.split("/").reverse().join("-")
const formType = {
    is_active: "tag",
    // status: "tag",
    picture: "img",
    name: "text",
    category: "select",
    expire_date: "datePicker",
    created: "text_disable",
    price: "text",
    tax: "text",
}

const PATTERN = {
    // "name": [/^111$/, "Name not match"],
    "price": [/^\d+(,\d{3})*(\.\d{1,2})?$/, "Price not match"],
}

const STATUS = {
    is_active: [true, false],
    status: ["coming_soon", "still", "oversell"],
}

class FormOrder extends React.Component {

    state = { product_pictures: {} }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.picture && JSON.stringify(nextProps.data.picture) !== JSON.stringify(this.props.data.picture)) {
            this.setState({
                product_pictures: nextProps.data.picture.reduce((cur, pic) => {
                    return {
                        ...cur,
                        [pic.id]: {
                            uid: pic.id,
                            name: pic.id,
                            status: "done",
                            url: pic.image
                        }
                    }
                }, {})
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmitForm({
                    ...values,
                    expire_date: moment(values["expire_date"]).format(dateFormat),
                    image: Object.values(this.state.product_pictures).filter(pic => pic.url === undefined).map(i => i.originFileObj),
                    id_images_delete: this.props.data.picture ? this.props.data.picture.filter(pic => {
                        return this.state.product_pictures[pic.id] === undefined
                    }).map(pic => pic.id) : []
                });
            }
        });
    }

    formatSelect = ({ key, data }) => {
        if (key == "category") {
            return (
                <Select placeholder="Please select product category">
                    {
                        this.props.categories.map(ct => (
                            <Option key={ct.id} value={ct.id}>{ct.name}</Option>
                        ))
                    }
                </Select>
            )
        }
    }


    formatStatus = ({ key, status }) => {
        return (
            <div>
                {
                    STATUS[key].map((status_item) => {
                        return (
                            <span key={status_item}><Tag
                                onClick={this.props.onClickStatus({ key, status }, status_item)}
                                color={`${status == status_item ? "green" : "blue"}`}
                            >{_.upperFirst(status_item)}</Tag>
                            </span>
                        )
                    })
                }
            </div>
        )
    }

    handleChange = ({ fileList }) => {
        this.setState({
            product_pictures: fileList.reduce((cur, pic) => ({
                ...cur,
                [pic.uid]: pic
            }), {})
        })
    }

    formatImgForm = ({ key, data }) => {
        return (
            <div>
                <Upload
                    name="picture"
                    listType="picture-card"
                    fileList={Object.values(this.state.product_pictures)}
                    onChange={this.handleChange}
                    beforeUpload={(file) => {
                        // this.product_pictures.push({
                        //     uid: uuid(),
                        //     name: file.name,
                        //     status: "done",
                        //     // url: pic.image
                        //     file
                        // })
                        // this.product_pictures[file.name] = file;
                        return false;
                    }}
                    onRemove={file => {
                        this.setState(preSate => {
                            delete preSate.product_pictures[file.name];
                            return preSate;
                        })
                    }}
                >
                    <div>
                        <Icon type="plus" />
                        <div className="ant-upload-text">Upload</div>
                    </div>
                </Upload>
            </div>
        )
    }

    getFormField = (type, { key, data }) => {
        switch (type) {
            case "text": return <Input />
            case "text_disable": return <Input disabled />
            case "datePicker": return <DatePicker />
            case "tag": return this.formatStatus({ key, status: data })
            case "img": return this.formatImgForm({ key, data })
            case "select": return this.formatSelect({ key, data })
            default: return <Input />
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 6,
                },
                sm: {
                    offset: 6,
                },
            },
        };

        return (
            <Form onSubmit={this.handleSubmit}>
                {
                    Object.keys(formType).map((key) => {
                        return (
                            <FormItem
                                key={key}
                                {...formItemLayout}
                                label={_.upperFirst(key)}
                            >
                                {getFieldDecorator(key, {
                                    rules: [{
                                        required: key !== "picture", 
                                        message: PATTERN[key] ? PATTERN[key][1] : 'Please input this feild!',
                                        pattern: PATTERN[key] ? PATTERN[key][0] : /./
                                    }],
                                })(
                                    this.getFormField(formType[key], { key, data: this.props.data[key] })
                                )}
                            </FormItem>
                        )
                    })
                }

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">{this.props.type}</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({
    mapPropsToFields(props) {
        if (props.type == "Add") {
            delete formType.created;
        }
        return Object.entries(formType).reduce((cur, [key, value]) => {
            if (key == "expire_date" && props.data[key]) props.data[key] = moment(props.data[key], dateFormat);
            return {
                ...cur,
                [key]: Form.createFormField({
                    value: props.data ? props.data[key] : "",
                })
            }
        }, {});
    }
})(FormOrder);
