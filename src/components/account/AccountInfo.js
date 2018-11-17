import React from "react";


class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setValueForm(nextProps.data);
    }

    componentDidMount() {
        this.setValueForm(this.props.data);
    }

    setValueForm = (data) => {
        if (!data) return;
        Object.entries(this.props.form_data.profile).forEach(([key, value]) => {
            if (value.current) {
                value.current.value = data[key] || null;
            }
        });
    }

    render() {
        return (
            <div className="AccountInfo">
                <div className="row">
                    <div className="u-column2 col-md-6">
                        <h2>Account Info</h2> <span className="text-danger" >{this.props.editState.profile.error}</span>
                        <form className="woocommerce-form woocommerce-form-register register" onSubmit={this.props.onSubmitForm("profile")}>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_edit_email">Email address&nbsp;<span className="required">*</span></label>
                                <input disabled ref={this.props.form_data.profile.email} type="email" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="email" id="reg_edit_email" autoComplete="off" />
                            </p>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_edit_email">First name&nbsp;<span className="required">*</span></label>
                                <input ref={this.props.form_data.profile.first_name} type="text" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="first_name" id="reg_edit_first_name" />
                            </p>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_edit_email">Last name&nbsp;<span className="required">*</span></label>
                                <input ref={this.props.form_data.profile.last_name} type="text" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="last_name" id="reg_edit_last_name" />
                            </p>

                            <p className="woocommerce-FormRow form-row">
                                <input type="hidden" id="woocommerce-register-nonce_edit_profile" name="woocommerce-register-nonce" defaultValue="ba42be52f2" /><input type="hidden" name="_wp_http_referer" defaultValue="groci/my-account/" /> <button type="submit" className="btn btn-secondary woocommerce-Button button" name="edit" value="Edit">Edit</button>
                            </p>
                        </form>
                    </div>
                    <div className="u-column2 col-md-6">
                        <h2>Change password</h2> <span className="text-danger" >{this.props.editState.editPass.error}</span>
                        <form className="woocommerce-form woocommerce-form-register register" onSubmit={this.props.onSubmitForm("editPass")}>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_edit_email">Password&nbsp;<span className="required">*</span></label>
                                <input ref={this.props.form_data.editPass.password} type="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="password" id="reg_edit_password" autoComplete="new-password" />
                            </p>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_edit_email">Confirm&nbsp;<span className="required">*</span></label>
                                <input ref={this.props.form_data.editPass.confirm} type="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="confirm" id="reg_edit_confirm" />
                            </p>
                            <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                                <label htmlFor="reg_edit_email">Confirm&nbsp;<span className="required">*</span></label>
                                <input ref={this.props.form_data.editPass.oldPassword} type="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="confirm" id="reg_edit_confirm" />
                            </p>

                            <p className="woocommerce-FormRow form-row">
                                <input type="hidden" id="woocommerce-register-nonce_change" name="woocommerce-register-nonce" defaultValue="ba42be52f2" /><input type="hidden" name="_wp_http_referer" defaultValue="groci/my-account/" /> <button type="submit" className="btn btn-secondary woocommerce-Button button" name="edit" value="Edit">Edit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountInfo;