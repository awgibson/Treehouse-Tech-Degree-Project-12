import React, { Component } from 'react';

class Greeting extends Component {
	render() {
		return (
			<>
				<p className="lead">
					Enter a movie in the search box above. Basic movie information will be
					displayed here along with a link to the Spotify sountrack and a link
					to purchase the movie from Amazon.
				</p>
				<p className="lead">
					You can also create an account to store a list of your favorite movies
					for easy access later!
				</p>
			</>
		);
	}
}

export default Greeting;
