import React, { useState } from "react";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
  const [searchString, setSearchString] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setMovieList(data.results);
        } else {
          setMovieList([]);
        }
      });
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchString}
            onChange={onChange}
          />
        </div>
        <div className="movie-list">
          <ul>
            {movieList.map((movie, index) => (
              <li key={index}>
                <MovieCard movie={movie}/>
              </li>
            ))}
          </ul>
        </div>
        <div className="movie-card"></div>
      </div>
    </div>
  );
};
