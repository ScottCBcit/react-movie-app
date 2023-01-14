export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchList: [action.payload, ...state.watchList],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_FAVORITE_LIST":
      return {
        ...state,
        favoriteList: [action.payload, ...state.favoriteList],
      };
    case "REMOVE_MOVIE_FROM_FAVORITE_LIST":
      return {
        ...state,
        favoriteList: state.favoriteList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
