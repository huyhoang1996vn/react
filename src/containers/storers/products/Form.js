import React from "react";
import { Form, Select, Input, Button, Tag, Upload, Icon } from 'antd';
import _ from "lodash";

const FormItem = Form.Item;
const Option = Select.Option;

const formType = {
    is_active: "tag",
    status: "tag",
    picture: "img",
    name: "text",
    category: "select",
    expire_date: "text",
    created: "text",
    price: "text",
    tax: "text",
}

const STATUS = {
    is_active: [true, false],
    status: ["coming_soon", "still", "oversell"],
}

class FormOrder extends React.Component {

    product_pictures = {};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmitForm({
                    ...values,
                    image: Object.values(this.product_pictures),
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

    formatImgForm = ({ key, data }) => {
        return (
            <div>
                <div>
                    {
                        data && data[0] ?
                            <img src={data[0].image} alt="" /> : "No picture"
                    }
                </div>
                <Upload
                    name="picture"
                    listType="picture-card"
                    beforeUpload={(file) => {
                        this.product_pictures[file.name] = file;
                        return false;
                    }}
                    onRemove={file => {
                        delete this.product_pictures[file.name];
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
                                        required: true, message: 'Please input this feild!',
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
            return {
                ...cur,
                [key]: Form.createFormField({
                    value: props.data ? props.data[key] : "",
                })
            }
        }, {});
    }
})(FormOrder);
