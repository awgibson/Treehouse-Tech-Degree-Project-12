import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovie } from '../actions/movieActions';
import { getSoundtrack } from '../actions/soundtrackActions';

import PropTypes from 'prop-types';

class Search extends Component {
	state = {
		search: ''
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const movieSearch = this.state.search;
		this.props.getMovie(movieSearch);
		// this.props.getSoundtrack(movieSearch);
	};

	render() {
		return (
			<div className="row bg-info py-2">
				<div className="col-sm">
					<form className="text-center " onSubmit={this.onSubmit}>
						<input
							className="form-control form-control-lg w-75 d-inline"
							type="text"
							placeholder="Search for a movie"
							aria-label="Search for a movie"
							id="search"
							name="search"
							onChange={this.onChange}
						/>
					</form>
				</div>
			</div>
		);
	}
}

Search.propTypes = {
	getMovie: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	movie: state
});

export default connect(
	mapStateToProps,
	{ getMovie, getSoundtrack }
)(Search);
