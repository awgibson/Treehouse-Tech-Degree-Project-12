// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// App Components
import Login from './modals/Login';
import SignUp from './modals/SignUp';
import Favorites from './modals/Favorites';
import Search from './Search';
import Logout from './Logout';

// React Strap Components
import { Row, Col, ButtonGroup } from 'reactstrap';

class Navbar extends Component {
	render() {
		const { isAuthenticated } = this.props;

		const authNav = (
			<>
				<Favorites />
				<Logout />
			</>
		);

		const guestNav = (
			<>
				<Login />
				<SignUp />
			</>
		);
		return (
			<>
				{/* Banner */}
				<Row className="bg-dark p-4">
					<Col sm="12" className="text-center">
						<h1 className="text-white display-1">MovieInfo</h1>
					</Col>
				</Row>

				{/* Search bar */}
				<Search />

				{/* Nav buttons */}
				<Row className="bg-info pb-2">
					<Col sm="12" className="text-center">
						<ButtonGroup size="lg" role="group">
							{isAuthenticated ? authNav : guestNav}
						</ButtonGroup>
					</Col>
				</Row>
			</>
		);
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

Navbar.propTypes = {
	isAuthenticated: PropTypes.bool
};

export default connect(
	mapStateToProps,
	null
)(Navbar);
