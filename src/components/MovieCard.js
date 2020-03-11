import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard({ title }) {
  return <div className="card">{title}</div>;
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default MovieCard;
