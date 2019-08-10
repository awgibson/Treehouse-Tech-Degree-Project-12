import { GET_MOVIE, MOVIE_LOADING } from './types';
import { getSoundtrack } from './soundtrackActions';
import { getGiphy } from './giphyActions';
import axios from 'axios';

export const getMovie = search => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get(`/request/omdb/${search}`)

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
