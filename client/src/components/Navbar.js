import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Login from './modals/Login';
import SignUp from './modals/SignUp';
import Favorites from './modals/Favorites';
import Search from './Search';
import Logout from './Logout';

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
			<div>
				<div className="row bg-dark p-4">
					<div className="col-sm text-center">
						<h1 className="text-white display-1">MovieInfo</h1>
					</div>
				</div>

				<Search />

				<div className="row bg-info pb-2">
					<div className="col-sm text-center">
						<div className="btn-group btn-group-lg" role="group">
							{isAuthenticated ? authNav : guestNav}
						</div>
					</div>
				</div>
			</div>
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
