import * as actions from '../actions/types';

const INITAL = {
	loading: true,
	gifs: [],
	offset: 0,
	error: false,
	moreLoaded: false
};

const HomeGifsReducer = (state = INITAL, action) => {
	switch (action.type){
		case actions.LOAD_GIFS:
			return {
				...state,
				loading: false,
				gifs: action.gifs,
				offset: action.offset,
				error: false
			};
		case actions.INIT_LOAD_MORE_GIFS:
			return {
				...state,
				moreLoaded: true
			};
		case actions.LOAD_MORE_GIFS:
			return {
				...state,
				gifs: state.gifs.concat(action.gifs),
				offset: action.offset,
				moreLoaded: false
			};
		case actions.LOAD_GIFS_FAILED:
			return {
				...state,
				loading: false,
				error: true
			};
		default:
			return state;
	}
};

export default HomeGifsReducer;