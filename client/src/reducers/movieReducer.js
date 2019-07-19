import { GET_MOVIE, MOVIE_LOADING } from '../actions/types';

const initialState = {
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIE:
			return {
				data: action.payload,
				loading: false
			};
		case MOVIE_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
