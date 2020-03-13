import React from "react";
import { useLocalStore } from "mobx-react-lite";

import TMDB from "../services/TMDB";

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    isLoading: false,
    movies: [],
    movieDetails: {},
    setLoading: bool => (store.isLoading = bool),
    fetchMovies: year => {
      store.setLoading(true);
      TMDB.discover(year).then(res => {
        store.movies = res;
        store.setLoading(false);
      });
      // handle error on fetch?
    },
    fetchMovieDetails: id => {
      store.setLoading(true);
      TMDB.details(id).then(res => {
        store.movieDetails = res;
        store.setLoading(false);
      });
      // handle error on fetch?
    }
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
