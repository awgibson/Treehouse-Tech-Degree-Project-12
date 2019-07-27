import { GET_MOVIE, MOVIE_LOADING } from './types';
import { getSoundtrack } from './soundtrackActions';
import { getGiphy } from './giphyActions';
import axios from 'axios';
import keys from '../config/keys';

export const getMovie = search => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get(`http://www.omdbapi.com/?s=${search}&apikey=${keys.OMDB_KEY}`)
		.then(res =>
			axios.get(
				`http://www.omdbapi.com/?i=${res.data.Search[0].imdbID}&apikey=${
					keys.OMDB_KEY
				}`
			)
		)
		.then(res =>
			dispatch({
				type: GET_MOVIE,
				payload: res.data
			})
		)
		.then(res => {
			dispatch(getSoundtrack(res.payload.Title));
		})
		.then(res => {
			dispatch(getGiphy(search));
		})
		.catch(err =>
			dispatch({
				type: GET_MOVIE,
				payload: false
			})
		);
};

export const setItemsLoading = () => {
	return {
		type: MOVIE_LOADING
	};
};
