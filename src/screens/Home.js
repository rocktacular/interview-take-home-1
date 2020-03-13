import React, { useEffect, useContext } from "react";
import { useObserver } from "mobx-react-lite";
import { StoreContext } from "../stores/AppStore";

import "./Home.css";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

function Home({ year }) {
  const store = useContext(StoreContext);
  useEffect(() => {
    store.fetchMovies(year);
  }, [year]);

  return useObserver(() => (
    <div className="home-page">
      <div className="results">
        {store.isLoading ? (
          <Loading />
        ) : (
          store.movies.map((movie, idx) => {
            return (
              <MovieCard
                key={`movie-${idx}`}
                id={movie.id}
                title={movie.title}
                score={movie.popularity}
                imageUrl={movie.poster_path}
                releaseDate={movie.release_date}
              />
            );
          })
        )}
      </div>
    </div>
  ));
}

export default Home;
