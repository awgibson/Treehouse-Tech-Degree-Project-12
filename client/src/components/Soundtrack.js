// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

// Redux actions
import { getSoundtrack } from '../actions/soundtrackActions';

// App components
import SearchError from './SearchError';

// Reactstrap compnents
import { Row, Col } from 'reactstrap';

class Soundtrack extends Component {
	render() {
		const { soundtrack } = this.props.soundtrack;

		return (
			<>
				{/* Results heading */}
				<Row className="bg-secondary">
					<Col className="text-center">
						<h2 className="display-4">Soundtrack</h2>
					</Col>
				</Row>

				{/* Conditional to show loading status */}
				{soundtrack.loading ? 'Loading' : ''}

				{/* Shows error if no movie is found */}
				{soundtrack.data === '' && (
					<SearchError error="No soundtrack found on Spotify, please search again" />
				)}

				{/* Displays movie information if there is data */}
				{soundtrack.data.id && (
					<Row className="my-3">
						<Col className="text-center">
							<Iframe
								url={`https://open.spotify.com/embed/album/${
									soundtrack.data.id
								}`}
								width="350px"
								height="430px"
								id="spotify"
								display="initial"
							/>
						</Col>
					</Row>
				)}
			</>
		);
	}
}

Soundtrack.propTypes = {
	getSoundtrack: PropTypes.func.isRequired,
	soundtrack: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	soundtrack: state
});

export default connect(
	mapStateToProps,
	{ getSoundtrack }
)(Soundtrack);
