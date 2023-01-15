import React from "react";
import { useState, useEffect, useContext } from "react";
import posterPlaceholder from "../assets/images/posterPlaceholder.png";
import { GlobalContext } from "../context/GlobalContext";

export const MovieCard = ({ movie }) => {
  const { watchList, favoriteList } = useContext(GlobalContext);
  const {
    addMovieToFavoriteList,
    removeMovieFromFavoriteList,
    addMovieToWatchList,
    removeMovieFromWatchList,
  } = useContext(GlobalContext);

  const isFavorite = favoriteList.find((m) => m.id === movie.id);
  const isWatchList = watchList.find((m) => m.id === movie.id);

  function isMovieInWatchList(movie) {
    var watchMovie = watchList.find((m) => m.id === movie.id);
    return watchMovie ? watchMovie : { id: 0 };
  }

  function isMovieInFavoriteList(movie) {
    var favMovie = favoriteList.find((m) => m.id === movie.id);
    return favMovie ? favMovie : { id: 0 };
  }

  const handleFavoriteClick = (movie) => {
    if (isFavorite) {
      removeMovieFromFavoriteList(movie.id);
    } else {
      addMovieToFavoriteList(movie);
    }
  };

  const handleWatchListClick = (movie) => {
    console.log(watchList);
    if (isWatchList) {
      removeMovieFromWatchList(movie.id);
    } else {
      addMovieToWatchList(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        {/* // if movie poster is null, display a default image */}
        {movie.poster_path ? (
          <a href={`/details/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="poster"
            />
          </a>
        ) : (
          <img
            src={posterPlaceholder}
            alt="poster placeholder"
            className="null-poster"
          />
        )}
      </div>
      <div className="movie-info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">{movie.release_date}</h4>
        </div>
        <div className="movie-overview">
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
        <div className="movie-options">
          {isMovieInFavoriteList(movie).id == movie.id ? (
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
          {isMovieInWatchList(movie).id == movie.id ? (
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
