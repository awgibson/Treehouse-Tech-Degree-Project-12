import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Greeting from './Greeting';

import SearchError from './SearchError';

class Results extends Component {
	render() {
		const { movie } = this.props.movie;
		return (
			<div>
				{/* Shows loading message if loading is true */}

				{/* If there are search results, the movie component is displayed */}
				{movie.data === undefined ? <Greeting /> : <Movie />}
				{/* End everything related to the OMDB component */}
			</div>
		);
	}
}

Results.propTypes = {
	getMovie: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movie: state
});

export default connect(
	mapStateToProps,
	{ getMovie }
)(Results);
