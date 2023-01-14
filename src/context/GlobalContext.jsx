import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  watchList: localStorage.getItem("watchList")
    ? JSON.parse(localStorage.getItem("watchList"))
    : [],
  favoriteList: localStorage.getItem("favoriteList")
    ? JSON.parse(localStorage.getItem("favoriteList"))
    : [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(state.watchList));
    localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
  }, [state]);

  // Actions
  function addMovieToWatchList(movie) {
    console.log("addMovieToWatchList");
    dispatch({
      type: "ADD_MOVIE_TO_WATCHLIST",
      payload: movie,
    });
  }

  function removeMovieFromWatchList(id) {
    dispatch({
      type: "REMOVE_MOVIE_FROM_WATCHLIST",
      payload: id,
    });
  }

  function addMovieToFavoriteList(movie) {
    dispatch({
      type: "ADD_MOVIE_TO_FAVORITE_LIST",
      payload: movie,
    });
  }

  function removeMovieFromFavoriteList(id) {
    dispatch({
      type: "REMOVE_MOVIE_FROM_FAVORITE_LIST",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        favoriteList: state.favoriteList,
        addMovieToWatchList,
        addMovieToFavoriteList,
        removeMovieFromFavoriteList,
        removeMovieFromWatchList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
