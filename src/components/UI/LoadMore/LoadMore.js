import React from 'react';

// styles 
import styles from './LoadMore.css';

import arrow from './arrow.png';

const LoadMore = (props) => (
	<div className={styles.LoadMoreContainer}>
		<button className={styles.LoadMore} onClick={props.click}>
			{props.title} 
			<span className={styles.Icon}>
				<img src={arrow} className={styles.Arrow} alt='→' />
			</span>
		</button>
	</div>
);

export default LoadMore;