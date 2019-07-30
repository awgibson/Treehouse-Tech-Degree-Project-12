import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class SignUp extends Component {
	state = {};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		// Prevent default browser behavior
		e.preventDefault();

		// Create an object for the new user request
		const { name, emailAddress, password } = this.state;
		const user = {
			name,
			emailAddress,
			password
		};

		// Send registration request to server and database
		this.props.register(user);
	};

	componentDidUpdate(prevProps) {
		const { error } = this.props;
		if (error !== prevProps.error) {
			if (error.id === 'REGISTER_FAIL') {
				this.setState({ message: error.message });
			} else {
				this.setState({ message: null });
			}
		}
	}

	render() {
		return (
			// button
			<>
				<button
					type="button"
					className="btn btn-danger"
					data-toggle="modal"
					data-target="#SignUpModal"
				>
					Create Account
				</button>
				{/* modal */}
				<div
					className="modal fade"
					id="SignUpModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header bg-info">
								<h5 className="modal-title text-white">Create An Account</h5>
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
										<label htmlFor="name">Name: </label>
										<input
											type="text"
											className="form-control"
											id="name"
											placeholder="Enter name"
											name="name"
											onChange={this.onChange}
										/>
									</div>

									<div className="form-group">
										<label htmlFor="emailAddress">Email address: </label>
										<input
											type="email"
											className="form-control"
											id="emailAddressSignUp"
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
											id="passwordSignUp"
											placeholder="Password"
											name="password"
											onChange={this.onChange}
										/>
									</div>
									<hr />
									<button
										type="submit"
										className="btn btn-lg btn-success w-100 mb-3"
										id="registrationSubmit"
									>
										Submit
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

SignUp.propTypes = {
	isAuthenticated: PropTypes.bool,
	error: PropTypes.object.isRequired,
	register: PropTypes.func.isRequired,
	clearErrors: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	{ register, clearErrors }
)(SignUp);
