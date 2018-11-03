import React from "react";
import { Form, Input, Button, Tag } from 'antd';
import _ from "lodash";

const FormItem = Form.Item;

const formType = {
    picture: "img",
    name: "text",
    expire_date: "text",
    stores: "text",
    created: "text",
    price: "text",
    tax: "text",
    is_active: "tag",
    status: "tag",
}

const STATUS = {
    is_active: [true, false],
    status: ["coming_soon", "still", "oversell"],
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

    formatImgForm = ({ key, data }) => {
        return (
            <div>
                {
                    data && data[0] ?
                    <img src={data[0].image} alt=""/> : "No picture"
                }
            </div>
        )
    }


    getFormField = (type, { key, data }) => {
        switch (type) {
            case "text": return <Input />
            case "tag": return this.formatStatus({ key, status: data })
            case "img": return this.formatImgForm({ key, data })
            default: return <Input />
        }
    }

    render() {
        console.log(this.props);

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
                                    this.getFormField(formType[key], { key, data: this.props.data[key] })
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
