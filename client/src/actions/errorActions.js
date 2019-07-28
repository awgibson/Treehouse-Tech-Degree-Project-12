import { GET_ERRORS, CLEAR_ERRORS } from './types';

// Return any errors
export const returnErrors = (message, status, id = null) => {
	return {
		type: GET_ERRORS,
		payload: { message, status, id }
	};
};

// Clear out all errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
