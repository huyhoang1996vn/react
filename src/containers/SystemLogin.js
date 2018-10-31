import React from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from "react-router-dom";
import { message } from "antd";

// actions
import {
    authLogin,
} from "actions/auth";


const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmitForm(values)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form style={{
                width: "500px",
                // maxHeight: "400px",
                backgroundColor: "white",
                boxShadow: "0 0 2px black",
                padding: "30px"
            }} onSubmit={this.handleSubmit} className="login-form">
                <h1>Login System</h1>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const getUrlRediect = (props) => {
    switch (props.userAuth && props.userAuth.data && props.userAuth.data.role) {
        case "admin": return "/admin" 
        case "owners": return "/owners" 
        case "storers": return "/storers"
        default: return null 
    }
}

class SystemLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlRedirect: null,
        }
    }

    static getDerivedStateFromProps(state, props) {
        return {
            ...state,
            urlRedirect: getUrlRediect(props)
        }
    }

    handleLogin = async (data) => {
        try {
            await this.props.dispatch(authLogin(data));
        } catch(er) {
            message.error("Login failed!");
        }
    }

    render() {
        return (
            <div
                className="SystemLogin Container__fullsize Container__center"
            >
                {
                    this.state.urlRedirect == null ? <WrappedNormalLoginForm
                        onSubmitForm={this.handleLogin}
                    /> : <Redirect to={this.state.urlRedirect} />
                }
            </div>
        )
    }
}

export default connect((state) => ({
    userAuth: state.session.userAuth
}))(SystemLogin);