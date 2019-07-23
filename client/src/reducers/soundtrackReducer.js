import { GET_SOUNDTRACK, SOUNDTRACK_LOADING } from '../actions/types';

const initialState = {
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_SOUNDTRACK:
			return {
				...action.payload,
				loading: false
			};
		case SOUNDTRACK_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
