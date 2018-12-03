import React from "react";
import { message } from "antd";
import { _url } from "config/utils";

import request from "api/request";


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
				oldPassword: React.createRef(),
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
			this.props.loginSuccess();

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
			throw new Error("Please enter required fields");
		}
		if (data.password != data.confirm) {
			throw new Error("Password confirm is incorrect");
		}
		return data;
	}

	validateFormEditProfile = (data) => {
		if (
			!data.first_name ||
			!data.last_name
		) {
			throw new Error("Please enter required fields");
		}
		return data;
	}

	validateFormEditPass = (data) => {
		if (
			!data.new_password ||
			!data.new_password2 ||
			!data.old_password
		) {
			throw new Error("You can leave these empty");
		}

		if (data.new_password !== data.new_password2) {
			throw new Error("Confirm password not match");
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
			let error = "Can not register with your info!";
			if (er.response && er.response.data) {
				error = Object.values(er.response.data)[0];
			} else {
				error = er.message
			}
			this.handleError("register", error)
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
				try {
					const body = this.validateFormEditPass({
						new_password: this.valForm("editPass", "password"),
						new_password2: this.valForm("editPass", "confirm"),
						old_password: this.valForm("editPass", "oldPassword"),
					})

					request({
						// "X-CSRFToken": "DZYMwEskKyMdu0LyJ7EqTAuWyndLN0PRL3t6uwa8LpkpDBqEE1kPCM8LfX3bvrcx",
						// "xsrfHeaderName": "X-CSRFToken",
						// "xsrfCookieName": "XSRF-TOKEN"
					}).post("/change/pasword/", body)
						.then(data => {
							console.log(data);
						})
						.catch(er => {
							console.log(er.message);
						})

				} catch (er) {
					this.handleError("editPass", er.message || "Can not edit with your info!")
				}

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
														<label htmlFor="username">Email address<span className="required">*</span></label>
														<input ref={this.form_data.login.email} type="email" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="email" id="email"
															autoComplete="off" minLength="10" maxLength="50" required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="please enter email in correct format" />
													</p>

													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="password">Password<span className="required">*</span></label>
														<input ref={this.form_data.login.password} className="woocommerce-Input woocommerce-Input--text input-text form-control" type="password" name="password" id="password"
															autoComplete="new-password" minLength="6" required="true" pattern="[^' ']+" title="Password only include letters, digits and @/./+/-/_" />
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

														<input ref={this.form_data.register.email} type="email" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="email" id="reg_email" 
															autoComplete="off" minLength="10" maxLength="50" required="true" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$" title="Invalid email"/>
													</p>
													<p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
														<label htmlFor="reg_email">Password&nbsp;<span className="required">*</span></label>
														<input ref={this.form_data.register.password} type="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" name="password" id="reg_password" 
															autoComplete="new-password" minLength="6" maxLength="50" required="true" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,50}$" title="Password only include letters, digits and @/./+/-/_. Must include 6 character or longer. At least 1 upper character, 1 lower character." />

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
											onLogout={this.props.onLogout}
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