const express = require('express');
const router = express.Router();
const axios = require('axios');

const config = require('config');

router.get('/:search', (req, res, next) => {
	axios
		.get(
			`https://api.giphy.com/v1/gifs/search?api_key=${config.get(
				'GIPHY_KEY'
			)}&q=${req.params.search}%20movie&limit=8&offset=0&rating=G&lang=en`
		)
		.then(data => {
			res.send(data.data);
		})
		.catch(err => next(err));
});

module.exports = router;
