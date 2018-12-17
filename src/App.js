import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Header from './components/UI/header';
import Footer from './components/UI/Footer';
// pages
import Home from './components/Home/Home';
import Gif from './components/Gif/Gif';
import Upload from './components/Upload/Upload';

// import App style
import styles from './App.css';

class App extends Component {

	state = {
		title: 'Giphy'
	}

  render() {
    return (
      <div className={styles.App}>
        <Header title={this.state.title} />
        <div className={styles.Wrapper}>
	        <Switch>
	        	<Route path="/" exact component={Home} />
	        	<Route path="/upload" component={Upload} />
	        	<Route path="/:gif" component={Gif} />
	        </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
