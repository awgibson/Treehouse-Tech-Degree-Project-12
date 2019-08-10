import React, { Component } from 'react';

class SearchError extends Component {
	render() {
		return <h5 className="text-center m-3">{this.props.error}</h5>;
	}
}

export default SearchError;
