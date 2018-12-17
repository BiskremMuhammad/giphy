import React from 'react';
import { NavLink } from 'react-router-dom';

// import header style
import styles from './header.css';

// logo asset
import Logo from './logo';

// components
import Search from './Search';

const header = (props) => (
    <header className={styles.AppHeader}>
      <div className={styles.Wrapper}>
        <Logo />
        <div className={styles.Nav}>
          <NavLink className={styles.NavLink} to="/">Home</NavLink>
          <NavLink className={styles.NavLink} to="/upload">Upload</NavLink>
          <Search />
        </div>
      </div>
    </header>
);

export default header;