import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import Score from "../components/Score";
import Favorite from "../components/Favorite";

import { imageRoot } from "../components/MovieCard";

function Details({ setShowBack, setTitle, favorites, setFavorites, details }) {
  // SET HEADER
  const { id } = useParams();
  useEffect(() => {
    setShowBack(true);
    setTitle(details[id] && details[id].title);
  }, [id, details]);

  // HANDLERS
  const clickFavorite = () => {
    setFavorites({ ...favorites, [id]: !favorites[id] });
  };
  return (
    <div className="details-page">
      <div className="details__top">
        {details[id] && details[id].poster_path ? (
          <img
            className="details__image"
            src={`${imageRoot}/${details[id].poster_path}`}
            alt="Movie Poster"
          />
        ) : null}

        <div className="details__info">
          <div className="details__info-top">
            <Score score={details[id] && details[id].popularity} />
            <Favorite isFavorite={favorites[id]} onClick={clickFavorite} />
          </div>
          <div className="details__info-bottom">
            <div>{details[id] && details[id].releaseDate}</div>
          </div>
        </div>
      </div>
      <div className="details__bottom">
        {details[id] && details[id].overview}
      </div>
    </div>
  );
}

export default Details;
