import React, { Component } from 'react';
import Login from './modals/Login';
import SignUp from './modals/SignUp';
import Favorites from './modals/Favorites';
import Search from './Search';
import Logout from './Logout';

export default class Navbar extends Component {
	render() {
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
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#FavoritesModal"
							>
								Favorites
							</button>
							<button
								type="button"
								className="btn btn-success"
								data-toggle="modal"
								data-target="#LoginModal"
							>
								Login
							</button>
							<button
								type="button"
								className="btn btn-danger"
								data-toggle="modal"
								data-target="#SignUpModal"
							>
								Create Account
							</button>
							<Logout />
						</div>
					</div>
				</div>

				<Login />
				<SignUp />

				<Favorites />
			</div>
		);
	}
}
