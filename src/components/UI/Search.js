import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// import actions
import * as actions from '../../actions';

import styles from './header.css';

class Search extends Component{

	startSearch = () => {
		this.props.history.push('/?search='+this.props.searchWord);
	};

	render (){
		return (
			<div className={styles.Search}>
				<input 
					type="text" 
					placeholder="Search for a gif" 
					value={this.props.searchWord}
					onChange={(e) => this.props.changeSearchText(e.target.value)} />
				<button onClick={() => this.startSearch()}>
					<i className="fas fa-search"></i>
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchWord: state.search.searchWord
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeSearchText: (text) => dispatch(actions.changeSearchText(text))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));