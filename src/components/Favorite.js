import React from "react";
import "./Favorite.css";

const Favorite = ({ isFavorite, onClick }) => {
  return (
    <div
      className={`favorite ${isFavorite ? "is-favorite" : ""}`}
      onClick={onClick}
    ></div>
  );
};

export default Favorite;
