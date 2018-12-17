import React from 'react';

import styles from './GifCard.css';

const GifCard = (props) => (
	<div className={styles.GifCard}>
		<img src={props.img} alt={props.title} />
		<div className={styles.GifMeta}>
			<h3 className={props.size === 'small' ? styles.SmallGifTitle : styles.GifTitle}>{props.title}</h3>
			<p className={styles.GifAuthor}>{props.author}</p>
		</div>
	</div>
);

export default GifCard;