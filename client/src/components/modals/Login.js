// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

// Reactstrap components
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Alert,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';

class Login extends Component {
	state = {
		modal: false
	};

	toggle = () => {
		// Clear errors
		this.props.clearErrors();
		//Reverses modal state
		this.setState({
			modal: !this.state.modal
		});
	};

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
		const { error, isAuthenticated } = this.props;
		if (error !== prevProps.error) {
			if (error.id === 'LOGIN_FAIL') {
				this.setState({ message: error.message });
			} else {
				this.setState({ message: null });
			}
		}

		// If authenticated, close modal
		if (this.state.modal) {
			if (isAuthenticated) {
				this.toggle();
			}
		}
	}

	render() {
		return (
			<>
				<Button color="success border-3 border-dark" onClick={this.toggle}>
					Login
				</Button>
				{/* modal */}
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader className="bg-info text-white">Login</ModalHeader>

					{/* Modal body */}
					<ModalBody>
						{/* Displays errors if there is an error */}
						{this.state.message ? (
							<Alert color="danger">{this.state.message}</Alert>
						) : null}

						{/* Form  */}
						<Form onSubmit={this.onSubmit}>
							{/* Email address field */}
							<FormGroup>
								<Label for="emailAddress">Email address: </Label>
								<Input
									type="email"
									id="emailAddressSignUp"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									name="emailAddress"
									onChange={this.onChange}
								/>
							</FormGroup>

							{/* Password field */}
							<FormGroup>
								<Label for="password">Password: </Label>
								<Input
									type="password"
									id="passwordSignUp"
									placeholder="Password"
									name="password"
									onChange={this.onChange}
								/>
							</FormGroup>

							<hr />

							{/* Submit button */}
							<Button
								type="submit"
								color="success"
								className="btn-lg w-100 mb-3"
								id="loginSubmit"
							>
								Login
							</Button>

							{/* Close button */}
							<Button
								type="button"
								className="btn btn-lg btn-danger w-100"
								onClick={this.toggle}
							>
								Close
							</Button>
						</Form>
					</ModalBody>
				</Modal>
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
