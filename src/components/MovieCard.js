import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Score from "./Score";
import "./MovieCard.css";

const imageRoot = `https://image.tmdb.org/t/p/w500`;

function MovieCard({ title, score, imageUrl, releaseDate, id }) {
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
          <Link to={`/details/${id}`}>
            <div className="button__details">
              <div>DETAILS</div>
            </div>
          </Link>
        </div>
        <div className="card__right">
          <Score score={score} />
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
