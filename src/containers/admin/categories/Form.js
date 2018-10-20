import React from "react";
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class FormCategory extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onSubmitForm(values);
            }
        });
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
                <FormItem
                    {...formItemLayout}
                    label="Name"
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input category name!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Detail"
                >
                    {getFieldDecorator('detail', {
                        rules: [{
                            required: true, message: 'Please input category detail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>

                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">{this.props.type}</Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create({
    mapPropsToFields(props) {
        return {
            name: Form.createFormField({
                value: props.data ? props.data.name : "",
            }),
            detail: Form.createFormField({
                value: props.data ? props.data.detail: "",
            }),
        };
    }
})(FormCategory);

