import React from "react";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";

export const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="watchList-wrapper">
      <div className="back-button">
        <Link to="/">
          <button type="button" className="btn btn-info">
            Back to Movies
          </button>
        </Link>
      </div>
      <h1>WatchList</h1>
      <div className="movie-grid">
        <div className="movie-list">
          {watchList.length === 0 && (
            <h2>
              Sorry you have no movies in your watchlist. Return to the home or
              search page to add a movie to your watchlist.
            </h2>
          )}
          <ul>
            {watchList.map((movie, index) => (
              <li key={index}>
                <MovieCard movie={movie} page={"watchList"}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
