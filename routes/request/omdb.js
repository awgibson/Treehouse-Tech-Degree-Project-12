const express = require('express');
const router = express.Router();
const axios = require('axios');

const config = require('config');

router.get('/:search', (req, res, next) => {
	axios
		.get(
			`http://www.omdbapi.com/?s=${req.params.search}&apikey=${config.get(
				'OMDB_KEY'
			)}`
		)
		.then(res =>
			axios.get(
				`http://www.omdbapi.com/?i=${
					res.data.Search[0].imdbID
				}&apikey=${config.get('OMDB_KEY')}`
			)
		)
		.then(data => {
			res.send(data.data);
		})
		.catch(err => next(err));
});

module.exports = router;
