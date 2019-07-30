import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Favorites extends Component {
	render() {
		const { user } = this.props;

		return (
			<>
				<button
					type="button"
					className="btn btn-primary"
					data-toggle="modal"
					data-target="#FavoritesModal"
				>
					{user.name}'s Favorites
				</button>
				{/* modal */}
				<div
					className="modal fade"
					id="FavoritesModal"
					tabIndex="-1"
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
									className="btn btn-lg btn-danger w-100"
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
			</>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user
});

Favorites.propTypes = {
	user: PropTypes.object
};

export default connect(
	mapStateToProps,
	null
)(Favorites);
