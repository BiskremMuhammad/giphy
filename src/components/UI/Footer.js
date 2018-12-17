import React from 'react';

import styles from './header.css';

const Footer = () => (
	<div className={styles.FooterContainer}>
		<div className={styles.FootWrapper}>
			<div className={styles.Footer}>
				<p className={styles.Copyright}>
					&copy; 
					<a className={styles.Biskrem}
						href="https://www.linkedin.com/in/biskrem/"
						title="Biskrem Muhammad"
						target="_blank"
						rel="noopener noreferrer">
						Muhammad Omran
					</a>
				</p>
			</div>
		</div>
	</div>
);

export default Footer;