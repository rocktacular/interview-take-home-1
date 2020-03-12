import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Details.css";
import { get } from "lodash";
import TMDB from "../services/TMDB";
import Score from "../components/Score";
import Favorite from "../components/Favorite";

function Details() {
  // FETCH DATA
  const { id } = useParams();
  useEffect(() => {
    TMDB.details(id).then(res => {
      setDetails(res);
    });
  }, []);

  // ROUTE PROPS
  const location = useLocation();
  const imageUrl = get(location, "state.imageUrl");
  const score = get(location, "state.score");
  const releaseDate = get(location, "state.releaseDate");

  // STATE
  const [isFavorite, setIsFavorite] = useState(false);
  const [details, setDetails] = useState("");

  // HANDLERS
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
      <div className="details__bottom">{details.overview}</div>
    </div>
  );
}

export default Details;
