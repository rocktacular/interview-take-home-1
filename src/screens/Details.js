import React, { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useObserver } from "mobx-react-lite";

import { StoreContext } from "../stores/AppStore";

import "./Details.css";
import { get } from "lodash";
import Score from "../components/Score";
import Favorite from "../components/Favorite";
import Loading from "../components/Loading";

function Details() {
  // FETCH DATA
  const { id } = useParams();
  const store = useContext(StoreContext);
  useEffect(() => {
    store.fetchMovieDetails(id);
  }, [id]);

  // ROUTE PROPS
  const location = useLocation();
  const imageUrl = get(location, "state.imageUrl");
  const score = get(location, "state.score");
  const releaseDate = get(location, "state.releaseDate");

  // STATE
  const [isFavorite, setIsFavorite] = useState(false);

  // HANDLERS
  const clickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return useObserver(() => (
    <div className="details-page">
      {store.isLoading ? (
        <Loading />
      ) : (
        <>
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
          <div className="details__bottom">{store.movieDetails.overview}</div>
        </>
      )}
    </div>
  ));
}

export default Details;
