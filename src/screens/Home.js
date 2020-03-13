import React, { useEffect } from "react";
import "./Home.css";
import MovieCard from "../components/MovieCard";

function Home({ movies, setTitle, setShowBack }) {
  // SET HEADER
  useEffect(() => {
    setTitle("Movies");
    setShowBack(false);
  });
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
