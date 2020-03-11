import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./Details.css";
import TMDB from "../services/TMDB";
import Score from "../components/Score";

function Details({ year }) {
  const { id } = useParams();

  return (
    <div className="details-page">
      <p>DETAILS {id}</p>
    </div>
  );
}

export default Details;
