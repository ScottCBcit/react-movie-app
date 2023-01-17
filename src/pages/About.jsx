import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../assets/styles/about.module.css'

export const About = () => {
  return (
    <div className={styles.aboutWrapper}>
        <div className="back-button">
        <Link to="/">
          <button type="button" className="btn btn-info">
            Back to Movies
          </button>
        </Link>
      </div>
      <h1>About</h1>
      <img src="..\src\assets\images\blue_square.png" alt="TMDB logo" />
      <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>

    </div>
  )
}
