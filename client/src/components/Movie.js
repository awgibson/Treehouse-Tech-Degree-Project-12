// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import { getMovie } from '../actions/movieActions';

// App componenets
import SearchError from './SearchError';

// Reactstrap Components
import { Row, Col } from 'reactstrap';

class Movie extends Component {
	render() {
		const { movie } = this.props.movie;

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
							</ul>
						</Col>
					</Row>
				)}
			</>
		);
	}
}

Movie.propTypes = {
	getMovie: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movie: state
});

export default connect(
	mapStateToProps,
	{ getMovie }
)(Movie);
