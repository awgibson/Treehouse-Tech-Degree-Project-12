// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Reactstrap components
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

// Redux Actions
import { deleteFavorite } from '../../actions/favoritesActions';
import { getMovie } from '../../actions/movieActions';

class Favorites extends Component {
	state = {
		modal: false
	};

	toggle = () => {
		//Reverses modal state
		this.setState({
			modal: !this.state.modal
		});
	};

	onDelete = movie => {
		this.props.deleteFavorite(movie);
	};

	onView = movie => {
		this.props.getMovie(movie);
		this.toggle();
	};

	render() {
		const { user, favorites } = this.props;

		let favoritesList = [];

		if (favorites.data) {
			favoritesList = favorites.data.map((movie, i) => (
				<>
					<div className="row my-2">
						<div className="col-6">
							<li key={i}>{movie}</li>
						</div>
						<div className="col-6">
							<Button
								className="float-right btn-sm ml-2"
								color="danger"
								onClick={() => this.onDelete(movie)}
							>
								Delete
							</Button>
							<Button
								className="float-right btn-sm"
								color="success"
								onClick={() => this.onView(movie)}
							>
								View
							</Button>
						</div>
					</div>
				</>
			));
		}

		return (
			<>
				<Button color="primary" onClick={this.toggle}>
					{user.name}'s Favorites
				</Button>
				{/* modal */}
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
				>
					<ModalHeader className="bg-info text-white">Favorites</ModalHeader>

					{/* Modal body */}
					<ModalBody>
						{favoritesList.length > 0 ? (
							<ul>{favoritesList}</ul>
						) : (
							'You do not have any favorites.'
						)}

						<hr />
						{/* Close button */}
						<Button
							type="button"
							color="danger"
							className="btn-lg w-100"
							onClick={this.toggle}
						>
							Close
						</Button>
					</ModalBody>
				</Modal>
			</>
		);
	}
}

const mapStateToProps = state => ({
	user: state.auth.user,
	favorites: state.favorites
});

Favorites.propTypes = {
	user: PropTypes.object,
	favorites: PropTypes.object,
	deleteFavorite: PropTypes.func.isRequired,
	getMovie: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	{ deleteFavorite, getMovie }
)(Favorites);
