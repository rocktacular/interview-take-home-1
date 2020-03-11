import React, { useEffect, useState } from "react";
import "./Home.css";
import MovieCard from "../components/MovieCard";
import TMDB from "../services/TMDB";

function Home({ year }) {
  const [results, setResults] = useState([]);
  useEffect(() => {
    TMDB.discover(year).then(res => {
      setResults(res);
    });
  }, [year]);
  return (
    <div className="home-page">
      <div className="results">
        {results.map((movie, idx) => {
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
