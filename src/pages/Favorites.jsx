import React from "react";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";
import styles from "../assets/styles/favorites.module.css";


export const Favorites = () => {
  const { favoriteList } = useContext(GlobalContext);

  return (
    <div className={styles.favListWrapper}>
      <div className="movie-grid">
      <div className={styles.favListHeader}>
      <h1>Favorites</h1>
      <div className="back-button">
        <Link to="/">
          <button type="button" className="btn btn-info">
            Back to Movies
          </button>
        </Link>
      </div>
      </div>
        <div className="movie-list">
          {favoriteList.length === 0 && (
            <h2>
              Sorry you have no movies in your Favorites. Return to the home or search page to add to your favorites!.
            </h2>
          )}
          <ul>
            {favoriteList.map((movie, index) => (
              <li key={index}>
                <MovieCard movie={movie} page={"favorites"}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
