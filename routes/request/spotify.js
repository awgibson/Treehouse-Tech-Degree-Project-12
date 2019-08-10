// Dependencies
// Spotify web API makes spotify requests simpler.
const express = require('express');
const router = express.Router();
const spotifyWebApi = require('spotify-web-api-node');
const config = require('config');

// Create spotify API object
const spotifyApi = new spotifyWebApi({
	clientId: config.get('SPOTIFY_KEY'),
	clientSecret: config.get('SPOTIFY_SECRET')
});

spotifyApi.clientCredentialsGrant().then(
	res => {
		// Save bearer token
		spotifyApi.setAccessToken(res.body['access_token']);
	},
	err => {
		next(err);
	}
);

// @@route  GET /request/spotify/:search
// @@desc   Searches for soundtrack from spotify
// @@access Public
router.get('/:search', (req, res, next) => {
	// Search and limit to first result
	spotifyApi
		.searchAlbums(`album:${req.params.search}`, { limit: 1 })
		.then(data => {
			// Return data back to the front-end
			res.send(data.body.albums.items[0]);
		})
		.catch(err => next(err));
});

module.exports = router;
