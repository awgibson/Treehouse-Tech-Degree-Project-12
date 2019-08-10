// Dependencies
const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('config');

// @@route  GET /request/omdb/:search
// @@desc   Fetches movie info from open movie database
// @@access Public
router.get('/:search', (req, res, next) => {
	// Initial search for movie by title
	axios
		.get(
			`http://www.omdbapi.com/?s=${req.params.search}&apikey=${config.get(
				'OMDB_KEY'
			)}`
		)
		.then(res =>
			// omdb does not return much information from just a name search
			// another request is sent using the imdb ID from the first search
			// This will return a significant amount of information regarding the movie
			axios.get(
				`http://www.omdbapi.com/?i=${
					res.data.Search[0].imdbID
				}&apikey=${config.get('OMDB_KEY')}`
			)
		)
		.then(data => {
			// Send data back
			res.send(data.data);
		})
		.catch(err => next(err));
});

module.exports = router;
