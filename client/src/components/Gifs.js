// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Redux actions
import { getGiphy } from '../actions/giphyActions';

// App Components
import Gif from './Gif';
import SearchError from './SearchError';

// Reactstrap Components
import { Row, Col } from 'reactstrap';

class Gifs extends Component {
	render() {
		const { giphy } = this.props.giphy;
		const gifs = giphy.data.data;
		let gifList = [];

		if (gifs.length > 0) {
			gifList = gifs.map(gif => (
				<Gif
					id={gif.id}
					image={gif.images.fixed_width.url}
					url={gif.url}
					alt={gif.title}
					key={gif.id}
				/>
			));
		}

		return (
			<>
				{/* Results heading */}

				<Row className="bg-secondary">
					<Col className="text-center">
						<h2 className="display-4">GIPHY</h2>
					</Col>
				</Row>

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
			</>
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
