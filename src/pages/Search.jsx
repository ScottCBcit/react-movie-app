import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { Link } from "react-router-dom";
import styles from "../assets/styles/search.module.css";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  //Nice To Haves
  // pagination
  const [page, setPage] = useState(1);
  // loading
  const [loading, setLoading] = useState(true);
  // error
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    }
    setSearch(e.target.value.trimStart());
  };

  const clearSearch = () => {
    setSearch("");
  };

  useEffect(() => {
    if (search === "") {
      setMovies([]);
    } else if (search.length > 2) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&language=en-US&query=${search}&page=${page}&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovies(data.results.slice(0, 12));
          setLoading(false);
        });
    }
  }, [search]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.searchFunctions}>
        <div className={styles.backButton}>
          <Link to="/">
            <button type="button" className="btn btn-info">
              Back to Movies
            </button>
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchBar}>
          <h1>Search:</h1>
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={onSubmit}
            value={search}
          />
          </div>
          <div className="clear-button">
            <button onClick={clearSearch}>Clear Search</button>
          </div>
        </div>
      </div>
      <div className="movie-grid">
        <div className={styles.movieList}>
          <ul>
            {movies.map((movie, index) => (
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
