import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

const imageRoot = `https://image.tmdb.org/t/p/w500`;

const roundScore = score => {
  return Math.round(score);
};

function MovieCard({ title, score, imageUrl, releaseDate }) {
  const clickDetails = () => {
    console.log("details", title);
  };
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__info">
        <div className="card__left">
          <img
            src={`${imageRoot}/${imageUrl}`}
            className="card--image"
            alt="Movie Poster"
          />
        </div>
        <div className="card__center">
          <div>{releaseDate}</div>
          <button className="button__details" onClick={clickDetails}>
            DETAILS
          </button>
        </div>
        <div className="card__right">
          <div className="score">{roundScore(score)}</div>
        </div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number,
  imageUrl: PropTypes.string,
  releaseDate: PropTypes.string
};

export default MovieCard;
