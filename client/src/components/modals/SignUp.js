import React, { Component } from 'react';

export default class SignUp extends Component {
	render() {
		return (
			// button
			<div>
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
								{/* Form  */}
								<form>
									<div className="form-group">
										<label htmlFor="name">Name: </label>
										<input
											type="text"
											className="form-control"
											id="name"
											placeholder="Enter name"
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
										/>
									</div>
									<div className="form-group">
										<label htmlFor="password">Password: </label>
										<input
											type="password"
											className="form-control"
											id="passwordSignUp"
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
