import React from 'react';

// styles
import styles from './Spinner.css';

const Spinner = (props) => (
	<div className={styles.Spinner}>
	  <div className={styles.Dot1}></div>
	  <div className={styles.Dot2}></div>
	</div>
);

export default Spinner;