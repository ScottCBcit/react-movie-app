import React from 'react'
import {Link} from 'react-router-dom'


export const Header = () => {
  return (
    <header>
        <div className="header-container">
            <div className="inner-header">
                <div className="logo">
                    <Link to="/">Movie App</Link>
                </div>
                <ul className='nav-links'>
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
