import React, { Component } from 'react';

export default class Login extends Component {
	render() {
		return (
			<div>
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
								{/* Form  */}
								<form>
									<div className="form-group">
										<label htmlFor="emailAddress">Email address: </label>
										<input
											type="email"
											className="form-control"
											id="emailAddressLogin"
											aria-describedby="emailHelp"
											placeholder="Enter email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="password">Password: </label>
										<input
											type="password"
											className="form-control"
											id="passwordLogin"
											placeholder="Password"
										/>
									</div>
									<hr />
									<button
										type="submit"
										className="btn btn-lg btn-success w-100 mb-3"
									>
										Submit
									</button>
									<button
										type="button"
										className="btn btn-lg btn-danger w-100"
										data-dismiss="modal"
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
			</div>
		);
	}
}
