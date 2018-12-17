import React from 'react';

// styles
import styles from './FluidContainer.css';

const FluidContainer = (props) => (
	<div className={styles.FluidContainer}>
		{props.children}
	</div>
);

export default FluidContainer;