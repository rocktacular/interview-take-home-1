import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import Score from "../components/Score";
import Favorite from "../components/Favorite";

import { imageRoot } from "../components/MovieCard";

function Details({ setShowBack, setTitle, details, setDetails }) {
  // SET HEADER
  const { id } = useParams();
  useEffect(() => {
    setShowBack(true);
    setTitle(details[id] && details[id].title);
  }, [id, details]);

  // HANDLERS
  const clickFavorite = () => {
    const newDetails = { ...details };
    newDetails[id].favorite = !newDetails[id].favorite;
    setDetails(newDetails);
  };
  return (
    <div className="details-page">
      <div className="details-container">
        <div className="details__top">
          {details[id] && details[id].poster_path ? (
            <img
              className="details__image"
              src={`${imageRoot}/${details[id].poster_path}`}
              alt="Movie Poster"
            />
          ) : (
            <div className="details__image"></div>
          )}

          <div className="details__info">
            <div className="details__info-top">
              <Score score={details[id] && details[id].popularity} />
              <Favorite
                isFavorite={details[id] && details[id].favorite}
                onClick={clickFavorite}
              />
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
    </div>
  );
}

export default Details;
