const app = require('../server');
const { expect } = require('chai');

const request = require('supertest');
const agent = request.agent(app);

// Waits for the server to completely start up before running tests
before(function(done) {
	this.timeout(0);
	app.on('dbConnected', done);
});

describe('Test all external api requests return a 200 status code', () => {
	it('Receive movie information from OMDB with 200 status code', done => {
		agent
			.get('/request/omdb/star wars')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(done);
	});

	it('Receive soundtrack information from Spotify with 200 status code', done => {
		agent
			.get('/request/spotify/avatar')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(done);
	});

	it('Receive GIFS from Giphy with 200 status code', done => {
		agent
			.get('/request/giphy/star wars')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(done);
	});
});
