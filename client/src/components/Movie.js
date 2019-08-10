// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import { getMovie } from '../actions/movieActions';
import { updateFavorites } from '../actions/favoritesActions';

// App componenets
import SearchError from './SearchError';

// Reactstrap Components
import { Row, Col, Button } from 'reactstrap';

class Movie extends Component {
	render() {
		const { movie } = this.props.movie;
		const { isAuthenticated } = this.props;

		return (
			<>
				{/* Results heading */}
				<Row className="bg-secondary">
					<Col className="text-center">
						<h2 className="display-4">Results</h2>
					</Col>
				</Row>

				{/* Conditional to show loading status */}
				{movie.loading ? 'Loading' : ''}

				{/* Shows error if no movie is found */}
				{movie.data === false && (
					<SearchError error="No movie found in OMDB, please search again" />
				)}

				{/* Displays movie information if there is data */}
				{movie.data && (
					<Row className="my-3">
						<Col className="text-center">
							<img src={movie.data.Poster} alt={movie.data.Title} />
						</Col>

						<Col md="6">
							<h3 className="mb-2 ">{movie.data.Title}</h3>
							<hr />
							<ul className="list-unstyled">
								<li>
									<strong>Released: </strong>
									{movie.data.Released}
								</li>
								<li>
									<strong>Director: </strong>
									{movie.data.Director}
								</li>
								<li>
									<strong>Writer: </strong>
									{movie.data.Writer}
								</li>
								<li>
									<strong>Actors: </strong>
									{movie.data.Actors}
								</li>
							</ul>
							{isAuthenticated && (
								<Button
									color="success"
									onClick={() => this.props.updateFavorites(movie.data.Title)}
								>
									Add To Favorites
								</Button>
							)}
						</Col>
					</Row>
				)}
			</>
		);
	}
}

Movie.propTypes = {
	getMovie: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired,
	updateFavorites: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	movie: state,
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(
	mapStateToProps,
	{ getMovie, updateFavorites }
)(Movie);
