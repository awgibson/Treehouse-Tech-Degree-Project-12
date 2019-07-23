const express = require('express');
const router = express.Router();
const axios = require('axios');
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

router.get('/:search', (req, res, next) => {
	spotifyApi
		.searchAlbums(`album:${req.params.search}`, { limit: 1 })
		.then(data => {
			res.send(data.body.albums.items[0]);
		})
		.catch(err => next(err));
});

module.exports = router;
