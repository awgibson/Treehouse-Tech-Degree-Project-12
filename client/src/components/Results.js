import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';
import { getSoundtrack } from '../actions/soundtrackActions';
import { getGiphy } from '../actions/giphyActions';
import PropTypes from 'prop-types';
import Movie from './Movie';
import Soundtrack from './Soundtrack';
import Greeting from './Greeting';
import Gifs from './Gifs';

import SearchError from './SearchError';

class Results extends Component {
	render() {
		const { movie } = this.props.movie;
		const { soundtrack } = this.props.soundtrack;
		const { giphy } = this.props.giphy;
		return (
			<div>
				{/* Shows loading message if loading is true */}

				{/* If there are search results, the movie component is displayed */}
				{movie.data === undefined ? <Greeting /> : <Movie />}
				{/* End everything related to the OMDB component */}

				{soundtrack.data === undefined ? '' : <Soundtrack />}

				{giphy.data === undefined ? '' : <Gifs />}
			</div>
		);
	}
}

Results.propTypes = {
	getMovie: PropTypes.func.isRequired,
	movie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	movie: state,
	soundtrack: state,
	giphy: state
});

export default connect(
	mapStateToProps,
	{ getMovie, getSoundtrack, getGiphy }
)(Results);
