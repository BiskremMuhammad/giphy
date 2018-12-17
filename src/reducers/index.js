import { combineReducers } from 'redux';

// reducers
import HomeGifsReducer from './HomeGifsReducer';
import SelectedGifReducer from './SelectedGifReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
	gifs: HomeGifsReducer,
	single: SelectedGifReducer,
	search: SearchReducer
});