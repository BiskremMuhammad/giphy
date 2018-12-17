import * as actions from '../actions/types';

const INITIAL = {
	searchWord: '',
	loading: true,
	gifs: [],
	offset: 0,
	error: false,
	moreLoaded: false
};

const SearchReducer = (state = INITIAL, action) => {
	switch (action.type){
		case actions.CHANGE_SEARCH_TEXT:
			return {
				...state,
				searchWord: action.text
			};
		case actions.LOAD_SEARCH_RESULTS:
			return {
				...state,
				loading: false,
				gifs: action.gifs,
				offset: action.offset,
				error: false
			};
		case actions.INIT_LOAD_MORE_SEARCH_RESULTS:
			return {
				...state,
				moreLoaded: true
			};
		case actions.LOAD_MORE_SEARCH_RESULTS:
			return {
				...state,
				gifs: state.gifs.concat(action.gifs),
				offset: action.offset,
				moreLoaded: false
			};
		case actions.LOAD_SEARCH_RESULTS_FAILED:
			return {
				...state,
				loading: false,
				error: true
			};
		default:
			return state;
	}
};

export default SearchReducer;