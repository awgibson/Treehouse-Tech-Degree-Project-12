import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import soundtrackReducer from './soundtrackReducer';
import giphyReducer from './giphyReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
	movie: movieReducer,
	soundtrack: soundtrackReducer,
	giphy: giphyReducer,
	error: errorReducer,
	auth: authReducer,
	favorites: favoritesReducer
});
