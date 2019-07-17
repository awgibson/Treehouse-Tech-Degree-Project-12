import React, { Component } from 'react';

export default class Favorites extends Component {
	render() {
		return (
			<div>
				{/* modal */}
				<div
					className="modal fade"
					id="FavoritesModal"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header bg-info">
								<h5 className="modal-title text-white">Favorite movies</h5>
							</div>

							{/* Modal body */}
							<div className="modal-body">
								{/* Form  */}
								Favorites go here
								<button
									type="button"
									class="btn btn-lg btn-danger w-100"
									data-dismiss="modal"
								>
									Close
								</button>
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
