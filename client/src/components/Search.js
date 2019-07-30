// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux Actions
import { getMovie } from '../actions/movieActions';
import { getSoundtrack } from '../actions/soundtrackActions';

// Reactstrap Compnoents
import { Row, Col, Form, Input } from 'reactstrap';

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
			<Row className="bg-info py-2">
				<Col>
					<Form className="text-center " onSubmit={this.onSubmit}>
						<Input
							className="form-control-lg w-75 d-inline"
							type="text"
							placeholder="Search for a movie"
							aria-label="Search for a movie"
							id="search"
							name="search"
							onChange={this.onChange}
						/>
					</Form>
				</Col>
			</Row>
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
