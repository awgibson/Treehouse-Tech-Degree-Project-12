// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux Actions
import { logout } from '../actions/authActions';

// Reactstrap Components
import { Button } from 'reactstrap';

export class Logout extends Component {
	render() {
		return (
			<>
				<Button color="danger" onClick={this.props.logout}>
					Logout
				</Button>
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
