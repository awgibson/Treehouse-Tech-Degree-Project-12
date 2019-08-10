# Treehouse Tech Degree Project 12

[Heroku link of application](https://movieinfo-treehouse.herokuapp.com/)

## Capstone Project: Build Your Own Web Application

This web app will allow a user to search for a movie. The search query will return movie information from the open movie database, attempt to find a Spotify soundtrack, and will also look for GIFs related to the movie.

There is an option to create an account and save a list of favorite movies that can be recalled later or deleted. Passwords are encrypted.

This app was built using the MERN stack with Redux to handle state for the front-end.

## Config server after cloning

Run npm install from the root of the server directory and from the root of the client directory.

You must have an API key obtained from [OMDb API](http://www.omdbapi.com), [Spotify](http://www.spotify.com), [GIPHY](http://www.giphy.com), and a jwtSecret you of your own choosing. Create a default.json file and place it a folder named config at the root of the server. Example below.

```
{

"jwtSecret": "Shhhhh. Secrets.",

"SPOTIFY_KEY": "",

"SPOTIFY_SECRET": "",

"GIPHY_KEY": "",

"OMDB_KEY": ""

}
```

You must have a local mongoDB installation or edit the server.js file to point to an external mongoDB if you want to use the login feature.

## Script commands

**Root Directory**

- npm start - This will start the server.
- npm run server - This will start the server as well as nodemon.
- npm run client - This will start the react dev server.
- npm run dev - This will run both the server and client scripts at the same time using concurrently. **Recommended script to use locally**
- npm test - This will run the server tests.

## Project requirements

- **App uses 2 APIs. More than 2 will exceed expectations.** - OMDb Api - Spotify - Giphy - Custom API written for server to handle fetching from the APIs as well as interacting with the Mongo database.
- **App properly displays data from Apis** - There is a results screen that is divided into 3 sections to display data from the outside APIs. - For the local API, the favorite's modal displays information retrieved from a user's favorite movie list.
- **App is built using JS technologies like Node, Epress, React, or the MEAN stack.** - App was built using the MERN stack + Redux.
- **Student uses a framework, like Bootstrap, to style the front end of the app / Additional custom CSS will exceed expectations.**
  - Bootstrap was used by using react-strap.
  - There is a custom.css file as well where I have tweaked the default bootstrap theme as well as added a drop shadow to the main container.
- **App successfully uses a relational or document-based database** - MongoDB is used to store users and help facilitate a login system.
- **App is deployed to a hosting service like Heroku, OpenShift, AWS** - Deployed to Heroku
- **Final project is in a GitHub Repo** - That's where we currently are
- **Submits a public URL of the working app** - https://movieinfo-treehouse.herokuapp.com/
- **App runs successfully after running npm install and npm start in the local clone of the GitHub repo** - Follow config instructions above for app to work and look at additional scripts.
- **No syntax errors and the app starts successfully / Write unit tests using Mocha.js and an assertion library to get exceeds** - The only errors present in console are related to Spotify. Even Spotify's own website has these exact same errors. No syntax errors from my own code that I have been able to see. - Tests were written to test the server-side API fetches.
