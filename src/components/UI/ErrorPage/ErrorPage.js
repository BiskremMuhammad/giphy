import React from 'react';

// styles
import styles from './ErrorPage.css';

// image asset
import errorImg from './error.png';

const ErrorPage = (props) => (
	<div className={styles.Error}>
		<img src={errorImg} className={styles.ErrorImg} alt="something went wrong" />
		<h5 className={styles.ErrorTitle}>Oops! Something went Wrong.</h5>
		<h5 className={styles.ErrorTitle}>can't load images</h5>
	</div>
);

export default ErrorPage;