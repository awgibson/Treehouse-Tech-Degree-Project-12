import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class Login extends Component {
	state = {};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		// Prevent default browser behavior
		e.preventDefault();

		// Create object for user logging in
		const { emailAddress, password } = this.state;
		const user = {
			emailAddress,
			password
		};

		// Send login info to the server's auth endpoint
		this.props.login(user);
	};

	componentDidUpdate(prevProps) {
		const { error } = this.props;
		if (error !== prevProps.error) {
			if (error.id === 'LOGIN_FAIL') {
				this.setState({ message: error.message });
			} else {
				this.setState({ message: null });
			}
		}
	}

	render() {
		return (
			<>
				<button
					type="button"
					className="btn btn-success"
					data-toggle="modal"
					data-target="#LoginModal"
				>
					Login
				</button>
				{/* modal */}
				<div
					className="modal fade"
					id="LoginModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header bg-info">
								<h5 className="modal-title text-white">Login</h5>
							</div>

							{/* Modal body */}
							<div className="modal-body">
								{/* Displays errors if there is an error */}
								{this.state.message ? (
									<div className="alert alert-danger" role="alert">
										{this.state.message}
									</div>
								) : null}
								{/* Form  */}
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
										<label htmlFor="emailAddress">Email address: </label>
										<input
											type="email"
											className="form-control"
											id="emailAddressLogin"
											aria-describedby="emailHelp"
											placeholder="Enter email"
											name="emailAddress"
											onChange={this.onChange}
										/>
									</div>
									<div className="form-group">
										<label htmlFor="password">Password: </label>
										<input
											type="password"
											className="form-control"
											id="passwordLogin"
											placeholder="Password"
											name="password"
											onChange={this.onChange}
										/>
									</div>
									<hr />
									<button
										type="submit"
										className="btn btn-lg btn-success w-100 mb-3"
									>
										Login
									</button>
									<button
										type="button"
										className="btn btn-lg btn-danger w-100"
										data-dismiss="modal"
										onClick={this.props.clearErrors}
									>
										Close
									</button>
								</form>

								{/* /Form */}
							</div>
							{/* /modal body */}
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

Login.propTypes = {
	isAuthenticated: PropTypes.bool,
	error: PropTypes.object.isRequired,
	clearErrors: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	{ login, clearErrors }
)(Login);
