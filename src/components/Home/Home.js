import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

// import actions
import * as actions from '../../actions';

// import the style
import styles from './Home.css';

// import GifCard component
import GifCard from '../GifCard/GifCard';

// for the search results
import SearchResults from './SearchResults';

// UI Components
import FluidContainer from '../UI/FluidContainer/FluidContainer';
import Spinner from '../UI/Spinner/Spinner';
import ErrorIndicator from '../UI/ErrorPage/ErrorPage';
import LoadMore from '../UI/LoadMore/LoadMore';

class Home extends Component{

	state = {
		isSearch: false
	};

	componentDidMount() {
		const searchParams = new URLSearchParams(this.props.location.search);
		let keyword = searchParams.get('search');
		if(keyword){
			// load and fetch search results
			this.props.fetchSearchResults(keyword);
			this.setState({ isSearch: true });
		}
		else {
			// load the normal trending page
			this.props.fetchGifs();
			this.setState({ isSearch: false });
		}
	}

	componentDidUpdate (prevProps){
		let oldKeyword = prevProps.location.search
	    let newKeyword = this.props.location.search
	    if (oldKeyword !== newKeyword){
			const searchParams = new URLSearchParams(this.props.location.search);
			let keyword = searchParams.get('search');
			// load and fetch search results
			this.props.fetchSearchResults(keyword);
			this.setState({ isSearch: true });
	    }
	    else if(oldKeyword !== newKeyword && newKeyword === ''){
			// load the normal trending page
			this.props.fetchGifs();
			this.setState({ isSearch: false });
	    }
	}

	render() {
		let content = '';
		if(this.state.isSearch){
			content = <SearchResults query={this.props.location.search} />;
		}
		else if(this.props.loading || this.props.error){
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
									size={(index % 3 === 0 ? 'big' : 'small')}
									img={gif.images.fixed_height.url}
									title={gif.title}
									author={gif.username} />
							</NavLink>
						))}
					</section>
					<div className={styles.Container}>
						{this.props.moreLoaded ? <Spinner /> : <LoadMore title="Load More" click={() => this.props.fetchMoreGifs(this.props.offset)} />}
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
		loading: state.gifs.loading,
		gifs: state.gifs.gifs,
		error: state.gifs.error,
		offset: state.gifs.offset,
		moreLoaded: state.gifs.moreLoaded
	};
};

const mapDispathToProps = dispatch => {
	return {
		fetchGifs: () => dispatch(actions.fetchGifs()),
		fetchMoreGifs: (offset) => dispatch(actions.fetchMoreGifs((offset+28))),
		fetchSearchResults: (keyword) => dispatch(actions.fetchSearchResults(keyword))
	};
};

export default connect(mapStateToProps, mapDispathToProps)(Home);