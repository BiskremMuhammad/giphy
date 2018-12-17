import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// import actions
import * as actions from '../../actions';

// import the style
import styles from './Home.css';

// import GifCard component
import GifCard from '../GifCard/GifCard';

// UI Components
import FluidContainer from '../UI/FluidContainer/FluidContainer';
import Spinner from '../UI/Spinner/Spinner';
import ErrorIndicator from '../UI/ErrorPage/ErrorPage';
import LoadMore from '../UI/LoadMore/LoadMore';

class SearchResults extends Component{

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
				<div>
					<section className={styles.HomePage +' row'}>
						{this.props.gifs.map((gif, index) => (
							<NavLink
								to={'/'+ gif.slug} 
								key={gif.id}
								className={(index % 3 === 0 ? 'col-12 col-sm-6' : 'col-6 col-sm-3')}>
								<GifCard
									id={gif.id}
									img={gif.images.fixed_height.url}
									title={gif.title}
									author={gif.username} />
							</NavLink>
						))}
					</section>
					<div className={styles.Container}>
						{this.props.moreLoaded ? <Spinner /> : <LoadMore title="Load More" click={() => this.props.fetchMoreSearchResults(this.props.keyword, this.props.offset)} />}
					</div>
				</div>
			);
		}
		return (
			<div>{content}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		keyword: state.search.searchWord,
		loading: state.search.loading,
		gifs: state.search.gifs,
		error: state.search.error,
		offset: state.search.offset,
		moreLoaded: state.search.moreLoaded
	};
};

const mapDispathToProps = dispatch => {
	return {
		fetchMoreSearchResults: (keyword, offset) => dispatch(actions.fetchMoreSearchResults(keyword, (offset+28)))
	};
};

export default connect(mapStateToProps, mapDispathToProps)(SearchResults);