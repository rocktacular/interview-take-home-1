import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import TMDB from "../services/TMDB";
import Score from "../components/Score";
import Favorite from "../components/Favorite";

import { imageRoot } from "../components/MovieCard";

function Details({ setShowBack, setTitle, favorites, setFavorites }) {
  // FETCH DATA
  const { id } = useParams();
  useEffect(() => {
    setShowBack(true);
    setTitle("");
    TMDB.details(id).then(res => {
      setDetails(res);
      setTitle(res.title);
    });
  }, [id]);

  // STATE
  const [details, setDetails] = useState("");

  // HANDLERS
  const clickFavorite = () => {
    setFavorites({ ...favorites, [id]: !favorites[id] });
  };
  return (
    <div className="details-page">
      <div className="details__top">
        {details.poster_path ? (
          <img
            className="details__image"
            src={`${imageRoot}/${details.poster_path}`}
            alt="Movie Poster"
          />
        ) : null}

        <div className="details__info">
          <div className="details__info-top">
            <Score score={details.popularity} />
            <Favorite isFavorite={favorites[id]} onClick={clickFavorite} />
          </div>
          <div className="details__info-bottom">
            <div>{details.releaseDate}</div>
          </div>
        </div>
      </div>
      <div className="details__bottom">{details.overview}</div>
    </div>
  );
}

export default Details;
