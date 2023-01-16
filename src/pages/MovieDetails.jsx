import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import posterPlaceholder from "../assets/images/posterPlaceholder.png";
import { GlobalContext } from "../context/GlobalContext";

export const MovieDetails = () => {
    const { watchList, favoriteList } = useContext(GlobalContext);

    const {
      addMovieToFavoriteList,
      removeMovieFromFavoriteList,
      addMovieToWatchList,
      removeMovieFromWatchList,
    } = useContext(GlobalContext);

  const [movie, setMovie] = useState();
  const { id } = useParams();
  const [rating , setRating] = useState(0);


    
    function isMovieInWatchList(movie) {
      var watchMovie = watchList.some((m) => m.id === movie?.id);
      return watchMovie;
    }

    function isMovieInFavoriteList(movie) {
      var favMovie = favoriteList.some((m) => m.id === movie?.id);
      return favMovie;
    }
    
  const handleFavoriteClick = (movie) => {
    if (isMovieInFavoriteList(movie)) {
      removeMovieFromFavoriteList(movie.id);
    } else {
      addMovieToFavoriteList(movie);
    }
  };

  const handleWatchListClick = (movie) => {
    console.log(watchList);
    if (isMovieInWatchList(movie)) {
      removeMovieFromWatchList(movie.id);
    } else {
      addMovieToWatchList(movie);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, [id]);
  return (
    <div>
      <div className="back-button">
        <Link to="/">
          <button type="button" className="btn btn-info">
            Back to Movies
          </button>
        </Link>
      </div>
      <div className="movie-details">
        <h1>Movie Details</h1>
        <div className="movie-poster">
          {movie?.poster_path === null ? (
            <img
              src={posterPlaceholder}
              alt={`${movie?.title} poster`}
              className="null-poster"
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
              alt={`${movie?.title} poster`}
            />
          )}
        </div>
        <div className="rating">
            <h3>Rating: {Math.round(movie?.vote_average * 10)}%</h3>
        </div>
        <div className="summary">
            <h3>Summary</h3>
            <p>{movie?.overview}</p>
        </div>
        <div className="movie-options">
          {isMovieInFavoriteList(movie) ? (
            <button
              className="btn btn-danger"
              onClick={() => handleFavoriteClick(movie)}
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => handleFavoriteClick(movie)}
            >
              Add to Favorites
            </button>
          )}
          {isMovieInWatchList(movie) ? (
            <button
              className="btn btn-danger"
              onClick={() => handleWatchListClick(movie)}
            >
              Remove from WatchList
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => handleWatchListClick(movie)}
            >
              Add to WatchList
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
