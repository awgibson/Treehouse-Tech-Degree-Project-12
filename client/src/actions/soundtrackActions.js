import { GET_SOUNDTRACK, SOUNDTRACK_LOADING } from './types';
import axios from 'axios';
import keys from '../config/keys';

export const getSoundtrack = search => dispatch => {
	dispatch(setItemsLoading());
	axios
		.get(`/request/spotify/${search} soundtrack`)

		.then(res =>
			dispatch({
				type: GET_SOUNDTRACK,
				payload: res
			})
		)
		.catch(err =>
			dispatch({
				type: GET_SOUNDTRACK,
				payload: false
			})
		);
};

export const setItemsLoading = () => {
	return {
		type: SOUNDTRACK_LOADING
	};
};
