import React from "react";
import { useContext } from "react";
import posterPlaceholder from "../assets/images/posterPlaceholder.png";
import { GlobalContext } from "../context/GlobalContext";

export const MovieCard = ({ movie, page }) => {
  const { watchList, favoriteList } = useContext(GlobalContext);
  const {
    addMovieToFavoriteList,
    removeMovieFromFavoriteList,
    addMovieToWatchList,
    removeMovieFromWatchList,
  } = useContext(GlobalContext);

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

  return (
    <div className="movie-card-wrapper">
      <a href={`/details/${movie.id}`}>
        <div className="movie-card">
          <div className="poster-wrapper">
            {/* // if movie poster is null, display a default image */}
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movie.title} Poster`}
                className="poster"
              />
            ) : (
              <img
                src={posterPlaceholder}
                alt={`${movie?.title} poster`}
                className="null-poster"
              />
            )}
          </div>
          {}
          <div className="movie-info">
            <div className="header">
              <h3 className="title">{movie.title}</h3>
              <h4 className="release-date">
                Release Date: {movie.release_date}
              </h4>
            </div>
            <div className="movie-overview">
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className="ratings">
              {isMovieInFavoriteList(movie) || isMovieInWatchList(movie) ? (
                <div className="rating">
                  <h3>Rating</h3>
                  <p>{movie.vote_average}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </a>
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
  );
};
