// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Reactstrap components
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Alert,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';

import { getFavorites } from '../../actions/favoritesActions';

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

	render() {
		const { user, favorites } = this.props;

		let favoritesList = [];

		if (favorites.data) {
			favoritesList = favorites.data.map((movie, i) => (
				<li key={i}>{movie}</li>
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
	getFavorites: PropTypes.func.isRequired,
	favorites: PropTypes.object
};

export default connect(
	mapStateToProps,
	{ getFavorites }
)(Favorites);
