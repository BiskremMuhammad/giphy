import * as actions from '../actions/types';

const INITAL = {
	loading: true,
	gif: {},
	error: false
};

const SelectedGifReducer = (state = INITAL, action) => {
	switch (action.type){
		case actions.CLEAR_LOADED_GIF:
			return INITAL;
		case actions.LOAD_SINGLE_GIF:
			return {
				...state,
				loading: false,
				gif: action.gif,
				error: false
			};
		case actions.LOAD_SINGLE_GIF_FAILED:
			return {
				...state,
				loading: false,
				error: true
			};
		default:
			return state;
	}
};

export default SelectedGifReducer;