import React, { useState } from "react";

export const Home = () => {
  const [searchString, setSearchString] = useState("");
  const [movieList, setMovieList] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
    console.log(process.env.REACT_APP_TMDB_API_KEY)
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        if (!data.errors) {
          setMovieList(data.results);
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
          <div className="movie-card"></div>
        </div>
      </div>
    </div>
  );
};
