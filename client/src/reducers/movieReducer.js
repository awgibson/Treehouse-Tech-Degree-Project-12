import { GET_MOVIE } from '../actions/types';

const initialState = {
	title: 'Predator',
	year: '1111',
	director: 'Awesome director'
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIE:
			return {
				...state
			};
		default:
			return state;
	}
}
