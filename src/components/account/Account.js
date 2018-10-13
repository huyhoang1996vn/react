import React from "react";

import { _url } from "config/utils";

// components 
import {
	AccountInfo
} from "./index";

class Account extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: {
				error: "",
			},
			register: {
				error: "",
			},
			profile: {
				error: "",
			},
			editPass: {
				error: "",
			}
		}

		this.form_data = {
			login: {
				email: React.createRef(),
				password: React.createRef(),
			},
			register: {
				email: React.createRef(),
				password: React.createRef(),
				confirm: React.createRef(),
				first_name: React.createRef(),
				last_name: React.createRef(),
			},
			profile: {
				email: React.createRef(),
				first_name: React.createRef(),
				last_name: React.createRef(),
			},
			editPass: {
				password: React.createRef(),
				confirm: React.createRef(),
			}
		}
	}

	valForm = (path, name) => {
		return this.form_data[path][name].current.value || "";
	}

	handleError = (path, error) => {
		this.setState((prevState) => {
			prevState[path].error = error;
			return prevState;
		})
	}

	onSubmitFormLogin = async e => {
		// console.log(e.target.email.validity);
		e.preventDefault();
		try {
			await this.props.onLogin({
				email: this.valForm("login", "email"),
				password: this.valForm("login", "password")
			});
		} catch (er) {
			this.handleError("login", "Email or password invalid!")
		}
	}

	validateFormRegister = (data) => {
		if (
			!data.email ||
			!data.password ||
			!data.confirm ||
			!data.first_name ||
			!data.last_name
		) {
			throw new Error("You can leave these empty");
		}
		if (data.password != data.confirm) {
			throw new Error("Password confirm in correct");
		}
		return data;
	}

	validateFormEditProfile = (data) => {
		if (
			!data.first_name ||
			!data.last_name
		) {
			throw new Error("You can leave these empty");
		}
		return data;
	}

	onSubmitFormRegister = async e => {
		e.preventDefault();
		try {
			const body = this.validateFormRegister({
				email: this.valForm("register", "email"),
				password: this.valForm("register", "password"),
				confirm: this.valForm("register", "confirm"),
				first_name: this.valForm("register", "first_name"),
				last_name: this.valForm("register", "last_name")
			})
			await this.props.onRegister(body);
			this.handleError("register", "");
			alert("Register successful!");
		} catch (er) {
			this.handleError("register", er.message || "Can not register with your info!")
		}
	}

	onSubmitFormEdit = typeForm => async e => {
		e.preventDefault();
		switch (typeForm) {
			case "profile": {
				try {
					const body = this.validateFormEditProfile({
						first_name: this.valForm("profile", "first_name"),
						last_name: this.valForm("profile", "last_name")
					})
					await this.props.onEditProfile(body);
					this.handleError("profile", "");
					alert("Edit successful!");
				} catch (er) {
					this.handleError("profile", er.message || "Can not edit with your info!")
				}
				break;
			}
			case "editPass": {
				break;
			}
			default: return;
		}

	}

	render() {
		return (
			<div className="Account">
				<section className="section-padding bg-dark inner-header klb-breadcrumb">
					<div className="container">
						<div className="row">
							<div className="col-md-12 text-center">
								<h1 className="mt-0 mb-3 text-white">My account</h1>
								<div className="breadcrumbs">
									<p className="mb-0 text-white"><a className="text-white" href="groci" title="Home" rel="bookmark">Home</a> / <span className="text-white">My
                    account</span></p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="account-page section-padding">
					<div className="container">
						<div className="woocommerce">
							<div className="u-columns col2-set" id="customer_login">
								{
									this.props.userAuth.token === "" ?
										<div className="row">
											<div className="u-column1 col-md-6">
												<h2>Login</h2> <span className="text-danger" >{this.state.login.error}</span>
												<form name="formLogin" className="woocommerce-form woocommerce-form-login login" onSubmit={this.onSubmitFormLogin}>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="username">Username or email address<span className="required">*</span></label>
														<input ref={this.form_data.login.email} type="email" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="email" id="email" autoComplete="off" />
													</p>

													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="password">Password<span className="required">*</span></label>
														<input ref={this.form_data.login.password} className="woocommerce-Input woocommerce-Input--text input-text form-control" type="password" name="password" id="password" autoComplete="new-password" />
													</p>



													<p className="form-row">
														<input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" defaultValue="ea79594446" /><input type="hidden" name="_wp_http_referer" defaultValue="groci/my-account/" /> <button type="submit" className="btn btn-secondary woocommerce-Button button" name="login" value="Log in">Log in</button>
													</p><div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input woocommerce-form__input woocommerce-form__input-checkbox" name="rememberme" type="checkbox" id="rememberme" defaultValue="forever" />
														<label className="custom-control-label woocommerce-form__label woocommerce-form__label-for-checkbox inline" htmlFor="rememberme">
															<span>Remember me</span></label>
													</div>
													<p className="woocommerce-LostPassword lost_password">
														<a href="groci/my-account/lost-password/">Lost your password?</a>
													</p>
												</form>
											</div>


											<div className="u-column2 col-md-6">
												<h2>Register</h2> <span className="text-danger" >{this.state.register.error}</span>
												<form className="woocommerce-form woocommerce-form-register register" onSubmit={this.onSubmitFormRegister}>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="reg_email">Email address&nbsp;<span className="required">*</span></label>
														<input ref={this.form_data.register.email} type="email" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="email" id="reg_email" autoComplete="off" />
													</p>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="reg_email">Password&nbsp;<span className="required">*</span></label>
														<input ref={this.form_data.register.password} type="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="password" id="reg_password" autoComplete="new-password" />
													</p>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="reg_email">Confirm&nbsp;<span className="required">*</span></label>
														<input ref={this.form_data.register.confirm} type="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="confirm" id="reg_confirm" />
													</p>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="reg_email">First name&nbsp;<span className="required">*</span></label>
														<input ref={this.form_data.register.first_name} type="text" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="first_name" id="reg_first_name" />
													</p>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="reg_email">Last name&nbsp;<span className="required">*</span></label>
														<input ref={this.form_data.register.last_name} type="text" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="last_name" id="reg_last_name" />
													</p>


													<div className="woocommerce-privacy-policy-text">
														<p>Your personal data will be used to support your experience throughout this website, to manage access to
                        your account, and for other purposes described in our <a href="groci/?page_id=3" className="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
													</div>
													<p className="woocommerce-FormRow form-row">
														<input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" defaultValue="ba42be52f2" /><input type="hidden" name="_wp_http_referer" defaultValue="groci/my-account/" /> <button type="submit" className="btn btn-secondary woocommerce-Button button" name="register" value="Register">Register</button>
													</p>
												</form>
											</div>
										</div>
										:
										<AccountInfo
											form_data={{
												profile: this.form_data.profile,
												editPass: this.form_data.editPass
											}}
											editState={{
												profile: this.state.profile,
												editPass: this.state.editPass
											}}
											data={this.props.userAuth.data}
											onSubmitForm={this.onSubmitFormEdit}
										/>
								}

							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Account;