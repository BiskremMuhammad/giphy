import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import the reducer
import reducers from './reducers';

axios.defaults.baseURL = 'http://api.giphy.com/v1/gifs/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.params = { api_key: 'yPBGBogo8InDUxx2SwMeUs8hxPZcbOcu' };

const Store = (
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(Store, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
