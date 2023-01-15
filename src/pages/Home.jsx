import React, { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
  const [filter, setFilter] = useState("popular");
  const [movieList, setMovieList] = useState([]);

  const onChange = (e) => {
    setFilter(e.target.value);
    e.preventDefault();
    console.log("filtering");
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&language=en-US&page=1&region=US%7CCA`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        {
          setMovieList(data.results.slice(0, 12));
        }
      });
  }, [filter]);

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="filter-select">
          <select onChange={onChange}>
            <option value="popular">Popular</option>
            <option value="now_playing">Now Playing</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
          </select>
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
