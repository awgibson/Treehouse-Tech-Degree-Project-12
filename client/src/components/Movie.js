import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';
import PropTypes from 'prop-types';

import SearchError from './SearchError';

class Movie extends Component {
	render() {
		const { movie } = this.props.movie;

		return (
			<React.Fragment>
				{/* Results heading */}
				<div className="row bg-secondary">
					<div className="col text-center">
						<h2 className="display-4">Results</h2>
					</div>
				</div>

				{/* Conditional to show loading status */}
				{movie.loading ? 'Loading' : ''}

				{/* Shows error if no movie is found */}
				{movie.data === false && (
					<SearchError error="No movie found in OMDB, please search again" />
				)}

				{/* Displays movie information if there is data */}
				{movie.data && (
					<div className="row my-3">
						<div className="col text-center">
							<img src={movie.data.Poster} />
						</div>

						<div className="col-6">
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
						</div>
					</div>
				)}
			</React.Fragment>
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
