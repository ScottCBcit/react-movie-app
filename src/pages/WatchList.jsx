import React from "react";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { MovieCard } from "../components/MovieCard";

export const WatchList = () => {
  const { watchList } = useContext(GlobalContext);

  return (
    <div>
      <h1>WatchList</h1>
      <div className="movie-grid">
        <div className="movie-list">
          <ul>
            {watchList.map((movie, index) => (
              <li key={index}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
