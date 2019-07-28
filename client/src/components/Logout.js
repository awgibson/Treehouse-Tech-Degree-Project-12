import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
	render() {
		return (
			<>
				<button
					type="button"
					className="btn btn-danger"
					onClick={this.props.logout}
				>
					Logout
				</button>
			</>
		);
	}
}

Logout.propTypes = {
	logout: PropTypes.func.isRequired
};

export default connect(
	null,
	{ logout }
)(Logout);
