import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../assets/styles/header.module.css'
import logo from '../assets/images/logo-no-background.png'


export const Header = () => {
  return (
    <header>
        <div className={styles.headerContainer}>
            <div className={styles.innerHeaderContainer}>
                <div className={styles.logo}>
                <Link to="/"><img src={logo} alt={"Final Take Logo"} /></Link>
                </div>
                <ul className={styles.navLinks}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/watchlist">WatchList</Link>
                    </li>
                    <li>
                        <Link to="/favorite">Favorite</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
