import React from "react";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";


export const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <>
      <div>
      <div className="back-button">
        <Link to="/">
          <button type="button" className="btn btn-info">
            Back to Movies
          </button>
        </Link>
      </div>
        <h1>Favorite List</h1>
        <div className="movie-grid">
          <div className="movie-list">
            {favoriteList.length === 0 && <h2>Sorry you have no favourited movies. Return to the home or search page to add a favorite movie.</h2>}
            <ul>
              {favoriteList.map((movie, index) => (
                <li key={index}>
                  <MovieCard movie={movie} page={"favorite"}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
