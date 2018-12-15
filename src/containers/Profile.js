import React from "react";
import { connect } from "react-redux";
import { message } from "antd"

import {
    editProfle,
    changePassword
} from "actions/auth";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.form_data = {};
        if (!props.userAuth.email) {
            this.props.history.push("/login");
        }
    }

    refForm = type => ref => {
        this.form_data[type] = ref;
    }

    onSubmitForm = formType => (e) => {
        e.preventDefault();
        switch (formType) {
            case "profile": {
                return this.onSubmitFormEditProfile();
            }
            case "password": {
                return this.onSubmitFormEditPassword();
            }
        }
    }

    getFormData = () => {
        return Object.entries(this.form_data).reduce((acc, [key, form_input]) => {
            acc[key] = form_input.value;
            return acc;
        }, {});
    }

    onSubmitFormEditProfile = async () => {
        const { first_name, last_name } = this.getFormData();
        try {
            await this.props.dispatch(editProfle({
                first_name,
                last_name
            }))
            message.success("Edit successful");
        } catch (er) {
            message.error(er.message || "Edit failed");
        }
    }
    onSubmitFormEditPassword = async () => {
        const { new_password, new_password2, old_password } = this.getFormData();
        try {
            await this.props.dispatch(changePassword({
                new_password, new_password2, old_password
            }))
            message.success("Edit successful");
        } catch (er) {
            message.error(er.message || "Edit failed");
        }
    }

    render() {
        const { userAuth } = this.props;
        return (
            <div className="Profile">
                <h1>My Account</h1>
                <div className="row Profile__form">
                    <div className="col-md-6">
                        <form style={{ width: "350px" }} onSubmit={this.onSubmitForm('profile')} >
                            <div className="form-group">
                                <label>Email</label>
                                <input ref={this.refForm("email")} disabled className="form-control" placeholder="Enter email" defaultValue={userAuth.email} />
                                <small className="form-text text-danger"></small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInput">First name</label>
                                <input ref={this.refForm("first_name")} type="text" className="form-control" placeholder="First name" defaultValue={userAuth.first_name} />
                                <small className="form-text text-danger"></small>
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input ref={this.refForm("last_name")} type="text" className="form-control" placeholder="Last name" defaultValue={userAuth.last_name} />
                                <small className="form-text text-danger"></small>
                            </div>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <form style={{ width: "350px" }} onSubmit={this.onSubmitForm('password')} >
                            <div className="form-group">
                                <label>New password</label>
                                <input ref={this.refForm("new_password")} type="password" className="form-control" placeholder="New password" />
                                <small className="form-text text-danger"></small>
                            </div>
                            <div className="form-group">
                                <label>Confirm</label>
                                <input ref={this.refForm("new_password2")} type="password" className="form-control" placeholder="Confirm" />
                                <small className="form-text text-danger"></small>
                            </div>
                            <div className="form-group">
                                <label>Old Password</label>
                                <input ref={this.refForm("old_password")} type="password" className="form-control" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    userAuth: state.session.userAuth.data
}))(Profile);