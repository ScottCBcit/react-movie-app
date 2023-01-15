import React from 'react'
import {Link} from 'react-router-dom'

export const About = () => {
  return (
    <div>
        <div className="back-button">
        <Link to="/">
          <button type="button" className="btn btn-info">
            Back to Movies
          </button>
        </Link>
      </div>
      <h1>About</h1>
      <img src="" alt="" />
      <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      </div>
  )
}
