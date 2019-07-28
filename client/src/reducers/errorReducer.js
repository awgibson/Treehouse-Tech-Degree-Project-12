import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const intitialState = {
	message: {},
	status: null,
	id: null
};

export default function(state = intitialState, action) {
	switch (action.type) {
		case GET_ERRORS:
			return {
				message: action.payload.message,
				status: action.payload.status,
				id: action.payload.id
			};
		case CLEAR_ERRORS:
			return {
				message: {},
				status: null,
				id: null
			};
		default:
			return state;
	}
}
