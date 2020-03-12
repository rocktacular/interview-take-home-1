import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
// import "./Details.css";
import TMDB from "../services/TMDB";
import Score from "../components/Score";

function Details(props) {
  const { id } = useParams();
  const location = useLocation();

  return (
    <div className="details-page">
      <p>DETAILS {id}</p>
    </div>
  );
}

export default Details;
