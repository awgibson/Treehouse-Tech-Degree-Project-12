import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGiphy } from '../actions/giphyActions';
import PropTypes from 'prop-types';

import Gif from './Gif';

import SearchError from './SearchError';

class Gifs extends Component {
	render() {
		const { giphy } = this.props.giphy;
		const gifs = giphy.data.data;
		let gifList = [];

		if (gifs.length > 0) {
			gifList = gifs.map(gif => (
				<Gif id={gif.id} image={gif.images.fixed_width.url} url={gif.url} />
			));
		}

		return (
			<React.Fragment>
				{/* Results heading */}
				<div className="row bg-secondary">
					<div className="col text-center">
						<h2 className="display-4">GIPHY</h2>
					</div>
				</div>

				{/* Conditional to show loading status */}
				{giphy.loading ? 'Loading' : ''}

				{/* Shows error if no movie is found */}
				{giphy.data.data === '' && (
					<SearchError error="No images found on Giphy, please search again" />
				)}

				{/* Displays movie information if there is data */}
				{giphy.data.data && (
					<div className="container row my-3 text-center">{gifList}</div>
				)}
			</React.Fragment>
		);
	}
}

Gifs.propTypes = {
	getGiphy: PropTypes.func.isRequired,
	giphy: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	giphy: state
});

export default connect(
	mapStateToProps,
	{ getGiphy }
)(Gifs);
