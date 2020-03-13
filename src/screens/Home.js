import React, { useEffect } from "react";
import "./Home.css";
import MovieCard from "../components/MovieCard";
import TMDB from "../services/TMDB";

function Home({ year, setShowBack, setTitle, movies, setMovies }) {
  useEffect(() => {
    setTitle("Movies");
    setShowBack(false);

    // if not already loaded, fetch movies
    if (!movies.length) {
      TMDB.discover(year).then(res => {
        setMovies(res);
      });
    }
  }, [year]);
  return (
    <div className="home-page">
      <div className="results">
        {movies.map((movie, idx) => {
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
        })}
      </div>
    </div>
  );
}

export default Home;
