import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';
import PropTypes from 'prop-types';

class Results extends Component {
	componentDidMount() {
		this.props.getMovie();
	}

	render() {
		const { movie } = this.props.movie;
		return (
			<div className="container row">
				<div className="col">
					<h5>{movie.title}</h5>
					<ul>
						<li>{movie.title}</li>
						<li>{movie.year}</li>
						<li>{movie.director}</li>
					</ul>
				</div>
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
