import React from "react";
import { Form, Input, Button, Tag } from 'antd';
import _ from "lodash";

const FormItem = Form.Item;

const formType = {
    store: "text_disable",
    money: "text_disable",
    products: "text_disable",
    created: "text_disable",
    modified: "text_disable",
    order_code: "text_disable",
    transaction_id: "text_disable",
    payer_id: "text_disable",
    customer: "text_disable",
    payment_method: "text_disable",
    status_payment: "tag",
    status_order: "tag",
}

const STATUS = {
    status_payment: ["pending", "completed", "payment_error"],
    status_order: ["pending", "accepted", "shipping", "completed", "canceled"]
}



// const STATUS_COLOR = {
//     pending: "blue",
//     accepted: "blue",
//     completed: "blue",
// }

class FormOrder extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmitForm(values);
            }
        });
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

    getFormField = (type, { key, status }) => {
        switch (type) {
            case "text": return <Input />
            case "text_disable": return <Input disabled />
            case "tag": return this.formatStatus({ key, status })
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
                                    // rules: [{
                                    //     required: true, message: 'Please input this feild!',
                                    // }],
                                })(
                                    this.getFormField(formType[key], { key, status: this.props.data[key] })
                                )}
                            </FormItem>
                        )
                    })
                }

                <FormItem {...tailFormItemLayout}>
                    <Button disabled={!this.props.isChanged} type="primary" htmlType="submit">Save</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({
    mapPropsToFields(props) {
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
