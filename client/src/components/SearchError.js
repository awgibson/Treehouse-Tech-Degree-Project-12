import React, { Component } from 'react';

class SearchError extends Component {
	render() {
		return <h5>{this.props.error}</h5>;
	}
}

export default SearchError;
