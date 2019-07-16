const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/user');

// Set port
const port = process.env.PORT || 3001;

// Connect to database
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/th-movie-project', {
	useNewUrlParser: true
});

// Set console messages for connection status // errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected...'));

// morgan gives us http request logging
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello from the root route.'));
app.use('/user', user);

// send 404 if no other route matched
app.use((req, res) => {
	res.status(404).json({
		message: 'Route Not Found'
	});
});

// global error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	// Checks if the error is a mongo error, if it is the error is passed as is
	// If it is not a mongo error, the error json is returned in my error format
	if (err.name === 'MongoError' && err.code === 11000) {
		res.status(err.status || 500).json(err);
	} else {
		res.status(err.status || 500).json({
			error: { message: err.message, status: err.status }
		});
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
