// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import { register } from '../../actions/authActions';
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

class SignUp extends Component {
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
		const { error, isAuthenticated } = this.props;
		if (error !== prevProps.error) {
			if (error.id === 'REGISTER_FAIL') {
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
			// button
			<>
				<Button color="danger" onClick={this.toggle}>
					Create Account
				</Button>
				{/* modal */}
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader className="bg-info text-white">
						Create An Account
					</ModalHeader>

					{/* Modal body */}
					<ModalBody>
						{/* Displays errors if there is an error */}
						{this.state.message ? (
							<Alert color="danger">{this.state.message}</Alert>
						) : null}

						{/* Form  */}
						<Form onSubmit={this.onSubmit}>
							{/* Name field */}
							<FormGroup>
								<Label for="name">Name: </Label>
								<Input
									type="text"
									id="name"
									placeholder="Enter name"
									name="name"
									onChange={this.onChange}
								/>
							</FormGroup>

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
								id="registrationSubmit"
							>
								Submit
							</Button>

							{/* Close button */}
							<Button
								type="button"
								color="danger"
								className="btn-lg w-100"
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
