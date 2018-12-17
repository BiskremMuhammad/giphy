import React, { Component } from 'react';
import { connect } from 'react-redux';

// import actions
import * as actions from '../../actions';

// styles
import styles from './Gif.css';

// UI Components
import FluidContainer from '../UI/FluidContainer/FluidContainer';
import Spinner from '../UI/Spinner/Spinner';
import ErrorIndicator from '../UI/ErrorPage/ErrorPage';

class Gif extends Component{

	componentDidMount() {
		this.props.getGif(this.props.match.params.gif.split('-').pop());
	}

	render() {
		let content = '';
		if(this.props.loading || this.props.error){
			content = (
				<FluidContainer>
					{this.props.loading ? <Spinner /> : <ErrorIndicator />}
				</FluidContainer>
			);
		}
		else {
			content = (
				<section className={styles.Gif}>
					<img 
						src={this.props.gif.images.downsized_medium.url} 
						className={styles.Image}
						alt={this.props.gif.title} />
					<h1 className={styles.GitTitle}>{this.props.gif.title}</h1>
					<h5 className={styles.GifAuthor}>By: {this.props.gif.username}</h5>
				</section>
			);
		}
		return (
			<div>{content}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.single.loading,
		gif: state.single.gif,
		error: state.single.error
	};
};

const mapDispathToProps = dispatch => {
	return {
		getGif: (id) => dispatch(actions.getGif(id))
	};
};

export default connect(mapStateToProps, mapDispathToProps)(Gif);