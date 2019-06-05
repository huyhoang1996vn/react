import React from "react";
import { Form, Input, Button, Tag, Select } from 'antd';
import _ from "lodash";

import { GROUP_USERS } from "constants/index";

const FormItem = Form.Item;
const Option = Select.Option;

const formTypeEdit = {
    "email": "text_disabled",
    "groupUser": "text_disabled",
    "first_name": "text",
    "last_name": "text",
    "date_joined": "text_disabled",
    "is_active": "tag",
}

const formTypeAdd = {
    "groupUser": "tag",
    "email": "text",
    "password": "text",
    "first_name": "text",
    "last_name": "text",
}

const STATUS = {
    'is_active': [true, false]
}

const PATTERN = {
    "email": [/^[a-zA-Z][a-zA-Z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/, "Invalid email"],
    "password": [/^(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,50}$/, "Must include 6 character or longer. At least 1 upper character, 1 lower character."],
}


class FormOrder extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmitForm(values);
            }
        });
    }

    onChangeData = (data, newValue) => () => {
        this.props.onChangeData({
            key: data.key,
            value: newValue,
        })
    }

    formatTags = ({ key, tag }) => {
        if (key == "is_active") {
            return (
                <div>
                    {
                        STATUS[key].map((status_item) => {
                            return (
                                <span key={status_item}><Tag
                                    onClick={this.onChangeData({ key, tag }, status_item)}
                                    color={`${tag == status_item ? "green" : "grey"}`}
                                >{_.upperFirst(status_item.toString())}</Tag>
                                </span>
                            )
                        })
                    }
                </div>
            )
        }
        if (key == "groupUser") {
            return (
                <div>
                    {
                        Object.entries(GROUP_USERS).map(([group_id, group_name]) => (
                            <Tag
                                key={group_id}
                                color={`${tag == group_id ? "green" : "grey"}`}
                                onClick={this.onChangeData({ key, tag }, +group_id)}
                            >
                                {group_name}
                            </Tag>
                        ))
                    }
                </div>
            )
        }
    }

    getFormField = (type, { key, value }) => {
        switch (type) {
            case "text": return <Input type={key == "password" ? key : key == "email" ? key : type} maxLength= "50"/>
            case "tag": return this.formatTags({ key, tag: value })
            case "text_disabled": return <Input disabled />
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

        let formType = this.props.type == "add" ? formTypeAdd : formTypeEdit;

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
                                        required: true,
                                        message: PATTERN[key] ? PATTERN[key][1] : 'Please input this feild!',
                                        pattern: PATTERN[key] ? PATTERN[key][0] : /./,
                                        
                                    }],
                                })(
                                    this.getFormField(formType[key], { key, value: this.props.data[key] })
                                )}
                            </FormItem>
                        )
                    })
                }

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Save</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({
    mapPropsToFields(props) {
        let formType = formTypeEdit;
        if (props.type == "add") {
            formType = formTypeAdd;
        }
        return Object.entries(formType).reduce((cur, [key, value]) => {
            return {
                ...cur,
                [key]: Form.createFormField({
                    value: props.data ? props.data[key] : "",
                })
            }
        }, {});
    }
})(FormOrder);
