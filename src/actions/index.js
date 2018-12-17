import * as types from './types';
import axios from 'axios';

export const fetchGifs = () => {
	return dispatch => {
		axios.get('trending')
			.then(res => {
				dispatch(loadGifs(res.data.data, res.data.pagination.offset));
			})
			.catch((err) => {
				dispatch(loadGifsFailed());
			});
	};
};

const loadGifs = (gifs, offset) => {
	return {
		type: types.LOAD_GIFS,
		gifs, 
		offset
	};
};

export const fetchMoreGifs = (offset) => {
	return dispatch => {
		dispatch(initLoadMoreGifs());
		axios.get(`trending?offset=${offset}`)
			.then(res => {
				dispatch(loadMoreGifs(res.data.data, res.data.pagination.offset));
			})
			.catch((err) => {
				dispatch(loadGifsFailed());
			});
	};
};

const initLoadMoreGifs = () => {
	return {
		type: types.INIT_LOAD_MORE_GIFS
	};
};

const loadMoreGifs = (gifs, offset) => {
	return {
		type: types.LOAD_MORE_GIFS,
		gifs, 
		offset
	};
};

const loadGifsFailed = () => {
	return {
		type: types.LOAD_GIFS_FAILED
	};
};


// to load a single gif
export const getGif = (id) => {
	return dispatch => {
		dispatch(clearLoadedGif());
		axios.get(`/${id}`)
			.then(res => {
				dispatch(loadSignleGif(res.data.data));
			})
			.catch((err) => {
				dispatch(loadSignleGifFailed());
			});
	};
};

const clearLoadedGif = () => {
	return {
		type: types.CLEAR_LOADED_GIF
	};
};

const loadSignleGif = gif => {
	return {
		type: types.LOAD_SINGLE_GIF,
		gif
	};
};

const loadSignleGifFailed = () => {
	return {
		type: types.LOAD_SINGLE_GIF_FAILED
	};
};


// to search for a gif
export const changeSearchText = (text) => {
	return {
		type: types.CHANGE_SEARCH_TEXT,
		text
	};
};

export const fetchSearchResults = (keyword) => {
	return dispatch => {
		axios.get(`search?q=${keyword}`)
			.then(res => {
				dispatch(loadSearchGifs(res.data.data, res.data.pagination.offset));
			})
			.catch((err) => {
				dispatch(loadSearchGifsFailed());
			});
	};
};

const loadSearchGifs = (gifs, offset) => {
	return {
		type: types.LOAD_SEARCH_RESULTS,
		gifs, 
		offset
	};
};

export const fetchMoreSearchResults = (keyword,offset) => {
	return dispatch => {
		dispatch(initLoadMoreSearchResults());
		axios.get(`search?q=${keyword}&offset=${offset}`)
			.then(res => {
				dispatch(loadMoreSearchResults(res.data.data, res.data.pagination.offset));
			})
			.catch((err) => {
				dispatch(loadSearchGifsFailed());
			});
	};
};

const initLoadMoreSearchResults = () => {
	return {
		type: types.INIT_LOAD_MORE_SEARCH_RESULTS
	};
};

const loadMoreSearchResults = (gifs, offset) => {
	return {
		type: types.LOAD_MORE_SEARCH_RESULTS,
		gifs, 
		offset
	};
};

const loadSearchGifsFailed = () => {
	return {
		type: types.LOAD_SEARCH_RESULTS_FAILED
	};
};