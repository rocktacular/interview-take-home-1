import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Details.css";
import { get } from "lodash";
// import TMDB from "../services/TMDB";
import Score from "../components/Score";
import Favorite from "../components/Favorite";

function Details() {
  const { id } = useParams();
  const location = useLocation();
  const imageUrl = get(location, "state.imageUrl");
  const score = get(location, "state.score");
  const releaseDate = get(location, "state.releaseDate");

  const [isFavorite, setIsFavorite] = useState(false);

  const clickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="details-page">
      <div className="details__top">
        <img className="details__image" src={imageUrl} alt="Movie Poster" />

        <div className="details__info">
          <div className="details__info-top">
            <Score score={score} />
            <Favorite isFavorite={isFavorite} onClick={clickFavorite} />
          </div>
          <div className="details__info-bottom">
            <div>{releaseDate}</div>
          </div>
        </div>
      </div>
      <div className="details__bottom">
        Details go here. Details go here. Details go here. Details go here.
        Details go here. Details go here. Details go here.
      </div>
    </div>
  );
}

export default Details;
