import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSoundtrack } from '../actions/soundtrackActions';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

import SearchError from './SearchError';

class Soundtrack extends Component {
	render() {
		const { soundtrack } = this.props.soundtrack;

		return (
			<React.Fragment>
				{/* Results heading */}
				<div className="row bg-secondary">
					<div className="col text-center">
						<h2 className="display-4">Soundtrack</h2>
					</div>
				</div>

				{/* Conditional to show loading status */}
				{soundtrack.loading ? 'Loading' : ''}

				{/* Shows error if no movie is found */}
				{soundtrack.data === '' && (
					<SearchError error="No soundtrack found on Spotify, please search again" />
				)}

				{/* Displays movie information if there is data */}
				{soundtrack.data.id && (
					<div className="row my-3">
						<div className="col text-center">
							<Iframe
								url={`https://open.spotify.com/embed/album/${
									soundtrack.data.id
								}`}
								width="350px"
								height="430px"
								id="spotify"
								display="initial"
							/>
						</div>
					</div>
				)}
			</React.Fragment>
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
