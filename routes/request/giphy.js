// Dependencies
const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');

// @@route  GET /request/giphy/:search
// @@desc   Fetches GIFS from GIPHY
// @@access Public
router.get('/:search', (req, res, next) => {
	// Request data
	axios
		.get(
			`https://api.giphy.com/v1/gifs/search?api_key=${config.get(
				'GIPHY_KEY'
			)}&q=${req.params.search}%20movie&limit=8&offset=0&rating=G&lang=en`
		)
		.then(data => {
			// Send data back if there is no error
			res.send(data.data);
		})
		.catch(err => next(err));
});

module.exports = router;
