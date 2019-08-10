import React, { Component } from 'react';

class Greeting extends Component {
	render() {
		return (
			<>
				<p className="lead mt-3 mx-3">
					Enter a movie in the search box above. Basic movie information will be
					displayed here along with the soundtrack (if able to find) and some
					related gifs.
				</p>
				<p className="lead mt-3 mx-3">
					You can also create an account to store a list of your favorite movies
					for easy access later!
				</p>
			</>
		);
	}
}

export default Greeting;
